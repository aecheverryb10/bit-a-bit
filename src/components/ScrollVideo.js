import { useRef, useState } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// https://github.com/cookpete/react-player/issues/1474#issuecomment-1184645105
import dynamic from 'next/dynamic';
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

const ScrollVideo = (props) => {
	const { url } = props;
	gsap.registerPlugin(useGSAP, ScrollTrigger);
	//States
	const [isPlaying, setIsPlaying] = useState(false);

	//Refs
	const containerRef = useRef();

	useGSAP(() => {
		const playPauseVideo = async (value) => {
			setIsPlaying(value);
		};

		ScrollTrigger.create({
			pin: true,
			trigger: containerRef.current,
			start: "top",
			endTrigger: containerRef.current,
			end: "bottom",
			onEnter: () => playPauseVideo(true),
			onEnterBack: () => playPauseVideo(true),
			onLeave: () => playPauseVideo(false),
			onLeaveBack: () => playPauseVideo(false),
		});

	}, { scope: containerRef });


	return (
		<div className='bg-black z-50 h-screen' ref={containerRef}>
			<ReactPlayer className='!h-screen !w-full m-auto' playing={isPlaying} url={url} controls muted />
		</div>
	);
};

export default ScrollVideo;