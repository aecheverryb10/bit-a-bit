import { useRef } from 'react';
import Image from 'next/image';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


const ScrollImage = (props) => {
	const { alt, img, caption } = props;

	gsap.registerPlugin(useGSAP, ScrollTrigger);

	const containerRef = useRef();
	const captionRef = useRef();
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
		});
		tl_caption.to(captionRef.current, { top: "10%" });

		// gsap code here...
		const tl_gradient = gsap.timeline({
			scrollTrigger: {
				scrub: true,
				trigger: containerRef.current,
				start: "top 50%",
				endTrigger: containerRef.current,
				end: "bottom",
			},
		});
		tl_gradient
			.to(gradientRef.current, { opacity: 0 })
			.set(gradientRef.current, { bottom: 0, rotate: 180, top: "auto" })
			.to(gradientRef.current, { opacity: 1 });


	}, { scope: containerRef });

	return (
		<div className='bg-white h-[105vh]' ref={containerRef}>
			<div ref={gradientRef} className='absolute bg-gradient-to-b from-20% from-white to-transparent h-screen w-full top-0 z-10' />
			<div className='relative h-screen'>
				<div ref={captionRef} className='absolute right-0 bottom-0 text-white z-10'>
					{caption}
				</div>
				<Image
					alt={alt}
					src={img}
					fill
					objectPosition='center'
					objectFit='cover'
				/>
			</div>
		</div>
	);
};

export default ScrollImage;