import { useRef, useState } from 'react';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// https://github.com/cookpete/react-player/issues/1474#issuecomment-1184645105
import dynamic from 'next/dynamic';
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

const ScrollVideo = (props) => {
	const { url } = props;
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
			pinSpacing: false,
			trigger: containerRef.current,
			start: "top",
			endTrigger: containerRef.current,
			end: "bottom",
			onEnter: () => playPauseVideo(true),
			onEnterBack: () => playPauseVideo(true),
			onLeave: () => playPauseVideo(false),
			onLeaveBack: () => playPauseVideo(false),
		});

		ScrollTrigger.refresh();
	}, { scope: containerRef });


	return (
		<div className='bg-black h-screen' ref={containerRef}>
			<ReactPlayer className='!h-screen !w-full m-auto' playing={isPlaying} url={url} controls muted />
		</div>
	);
};

export default ScrollVideo;