import { useRef } from 'react';
import Image from 'next/image';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const ScrollMultipleImages = (props) => {
	const { images } = props;
	const containerRef = useRef();
	const captionRef = useRef();
	const imagesRef = useRef();

	useGSAP(() => {
		for (let i = 0; i <= images.length; i++) {
			// console.log(`.image--container-${i}`);
			// const opacity = i === images.length ? 1 : 0;
			gsap.set(`.image--container-${i}`, { opacity: 0 });
			// if (i === 0) {
			// 	// tl_images.to(`.image--container-${i - 1}`, { opacity: 0 }, 0)
			// }
		}
		// gsap code here...
		const tl_images = gsap.timeline({
			scrollTrigger: {
				pin: true,
				scrub: true,
				trigger: imagesRef.current,
				start: "top",
				endTrigger: imagesRef.current,
				end: "bottom bottom",
				markers: true
			},
		});
		for (let i = 0; i <= images.length; i++){
			console.log(`.image--container-${i}`);
			const opacity = i === images.length ? 1 : 0
			tl_images.to(`.image--container-${i}`, { opacity: 1 });
			// if (i === 0) {
			// 	// tl_images.to(`.image--container-${i - 1}`, { opacity: 0 }, 0)
			// }
		}

		ScrollTrigger.refresh();

	}, { scope: containerRef });

	return (
		<div ref={containerRef} className='flex justify-stretch'>
			{/* Images */}
			<div ref={imagesRef} className='w-full '>
				<div className='relative' style={{ height: `${images.length + 1}00vh` }}>
					{
						images.map((item, index) => (
							<div className={`${index===0 ? "opacity-100" : ""} opa absolute image--container image--container-${index} h-screen w-fit top-0`} key={`images-${item.key}`}>
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img
									className='image h-full w-fill object-cover object-center '
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
			<div className='h-full'>
				{
					images.map(item => (
						<div className='h-screen flex justify-end items-end' key={`caption-${item.key}`}>
							<div className='image--caption right-0 bottom-0 text-white'>
								{item.caption}
							</div>
						</div>
					))
				}
				{/* <div className='h-screen'/> */}
			</div>
			{/* <div className={"relative"}>
				{
					images.map((image, index) => {
						const {key, caption, alt, img} = image
						return (
							<div key={key} className={`absolute flex h-screen justify-between image--container-${index}`}>
								<div className='relative w-fit mx-auto'>
									{/* eslint-disable-next-line @next/next/no-img-element
									<img
										className='image h-screen w-fill object-cover object-center'
										alt={alt}
										src={img}
									/>
								</div>
								<div className='relative w-2/4'>
									<div className='absolute image--caption right-0 bottom-0 text-white z-10'>
										{caption}
									</div>
								</div>
							</div>
						);
					})
				}
			</div> */}
		</div>
	);
};

export default ScrollMultipleImages;