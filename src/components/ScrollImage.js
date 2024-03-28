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

	useGSAP(() => {
		// gsap code here...
		gsap.set(imageRef.current, { maskImage: "linear-gradient(transparent, black 20%)" }); // <-- automatically reverted

		// const pin_image

		// ScrollTrigger.create({
		// 	pin: true,
		// 	trigger: containerRef.current,
		// 	start: "top",
		// 	endTrigger: containerRef.current,
		// 	end: "bottom",
		// })

		const tl_caption = gsap.timeline({
			scrollTrigger: {
				pin: true,
				scrub: 1,
				markers: true,
				trigger: containerRef.current,
				start: "top",
				endTrigger: containerRef.current,
				end: "bottom",
			}
		})
		tl_caption.to(captionRef.current, { top: 0 });
	}, { scope: containerRef });

	return (
		<div className='bg-black h-[100vh]' ref={containerRef}>
			<div className='container relative h-screen '>
				<div ref={captionRef} className='absolute right-0 bottom-0 text-white z-10'>
					{caption}
				</div>
				<Image
					ref={imageRef}
					alt={alt}
					src={img}
					fill
				/>
			</div>
		</div>
	)
};

export default ScrollImage