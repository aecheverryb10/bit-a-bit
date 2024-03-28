import { useRef } from 'react';
import Image from 'next/image';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


const ScrollImage = (props) => {
	const {alt, img, caption}=props

	gsap.registerPlugin(useGSAP, ScrollTrigger);

	const containerRef = useRef();
	const captionRef = useRef();
	const imageRef = useRef();
	const gradientRef = useRef();

	useGSAP(() => {
		// gsap code here...
		const tl_caption = gsap.timeline({
			scrollTrigger: {
				pin: true,
				scrub: true,
				trigger: containerRef.current,
				start: "top",
				endTrigger: containerRef.current,
				end: "bottom",
			}
		})
		tl_caption.to(captionRef.current, { top: "10%" });

		// gsap code here...
		const tl_gradient = gsap.timeline({
			scrollTrigger: {
				scrub: true,
				trigger: containerRef.current,
				start: "top 50%",
				markers: true,
				endTrigger: containerRef.current,
				end: "bottom 50%",
			},
		})
		tl_gradient
			.to(containerRef.current, { opacity: 1 })
	}, { scope: containerRef });

	return (
		<div className='bg-black h-screen opacity-0' ref={containerRef}>
			{/* <div ref={gradientRef} className='absolute bg-gradient-to-b from-20% from-black to-transparent h-[80vh] w-full top-0 z-10'/> */}
			<div className='container relative h-screen'>
				<div ref={captionRef} className='absolute right-0 bottom-0 text-white z-10'>
					{caption}
				</div>
				<Image
					ref={imageRef}
					alt={alt}
					src={img}
					fill
					objectPosition='center'
				/>
			</div>
		</div>
	)
};

export default ScrollImage