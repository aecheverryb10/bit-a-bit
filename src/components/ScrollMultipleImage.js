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
			tl_images.to(`.image--container-${i}`, { opacity: 1 });
		}

		ScrollTrigger.refresh();

	}, { scope: containerRef });

	return (
		<div ref={containerRef}>
			<div className='flex'>
				{/* Images */}
				<div ref={imagesRef} className='w-full '>
					<div className='relative' style={{ height: `${images.length + 1}00vh` }}>
						{
							images.map((item, index) => (
								<div className={`${index === 0 ? "opacity-100" : ""} absolute image--container image--container-${index} h-screen w-full top-0`} key={`images-${item.key}`}>
									{/* eslint-disable-next-line @next/next/no-img-element */}
									<img
										className='image h-full w-full object-cover object-center '
										alt={item.alt}
										src={item.img}
									/>
								</div>
							))
						}
						<div className={`image--container absolute image--container-0 h-screen w-full top-${images.length + 1}`} />
					</div>
				</div>
				{/* Captions */}
				<div className='h-full absolute right-0'>
					{
						images.map(item => (
							<div className='h-screen flex justify-end items-end' key={`caption-${item.key}`}>
								<div className='image--caption right-0 bottom-0 text-white'>
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