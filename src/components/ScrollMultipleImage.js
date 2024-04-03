import { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const ScrollMultipleImages = (props) => {
	const { images } = props;
	const containerRef = useRef();
	const imagesRef = useRef();

	useGSAP(() => {
		// gsap code here...
		const tl_images = gsap.timeline({
			scrollTrigger: {
				pin: true,
				scrub: true,
				trigger: imagesRef.current,
				start: "top",
				endTrigger: imagesRef.current,
				end: "bottom bottom",
			},
		});
		for (let i = 0; i <= images.length; i++){
			tl_images.from(`.image--container-${i}`, { opacity: 0 });
		}

		tl_images.scrollTrigger.refresh();

	}, { scope: containerRef });

	return (
		<div className='overflow-hidden' ref={containerRef}>
			<div className='flex relative'>
				{/* Images */}
				<div ref={imagesRef} className='w-full '>
					<div className='relative' style={{ height: `${images.length + 1}00vh` }}>
						{
							images.map((item, index) => (
								<div className={`${index === 0 ? "opacity-100" : ""} absolute image--container-${index} h-screen w-full top-0`} key={`images-${item.key}`}>
									{/* eslint-disable-next-line @next/next/no-img-element */}
									<img
										className='image h-full w-full object-cover object-center '
										alt={item.alt}
										src={item.img}
									/>
								</div>
							))
						}
						<div className={`absolute image--container-${images.length} h-screen w-full `} />
					</div>
				</div>
				{/* Captions */}
				<div className='h-full absolute right-0'>
					{
						images.map(item => (
							<div className='h-screen flex justify-end items-end pr-24' key={`caption-${item.key}`}>
								<div className='image-caption  bottom-0 text-white caption-element'>
									{item.caption}
								</div>
							</div>
						))
					}
					<div className='h-screen' />
				</div>
			</div>
		</div>
	);
};

export default ScrollMultipleImages;