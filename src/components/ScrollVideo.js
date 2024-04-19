import { useRef, useState } from 'react';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// https://github.com/cookpete/react-player/issues/1474#issuecomment-1184645105
import dynamic from 'next/dynamic';
import { BloqueTexto } from './Elements';
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

const ScrollVideo = (props) => {
	const {number,title, url } = props;
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
			markers: true,
			onEnter: () => playPauseVideo(true),
			onEnterBack: () => playPauseVideo(true),
			onLeave: () => playPauseVideo(false),
			onLeaveBack: () => playPauseVideo(false),
		});

		ScrollTrigger.refresh(true);
	}, { scope: containerRef });


	return (
		<>
			<BloqueTexto noPaddingBottom={true}>
				<p className='font-sans text-xl pb-8'>
					<span className='text-purple-base'>Recurso {number}.</span>{' '}
					<span className='font-light'>{title}</span>
				</p>
			</BloqueTexto> 
			<div className='bg-black h-screen' ref={containerRef}>
				<ReactPlayer className='!h-screen !w-full m-auto' playing={isPlaying} url={url} controls muted />
			</div>
		</>
	);
};

export default ScrollVideo;