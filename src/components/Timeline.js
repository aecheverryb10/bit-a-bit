"use client";
import { createRef, useRef, useState } from 'react';
import Image from 'next/image';
//Data
import timeline_data from '@/data/timeline_data';
import TimelineModal from './TimelineModal';


const Timeline = () => {
	//States
	const [isOpenModal, setIsOpenModal] = useState(false);
	const [modalData, setModalData] = useState({});
	//Refs
	const timelineRef = useRef();
	const sectionsRef = useRef(timeline_data.map(() => createRef()));


	//Move the scroll to the timeline section
	const moveTimeline = (index) => {
		const section_left = sectionsRef.current[index].current.offsetLeft;
		timelineRef.current.scrollTo(section_left, 0);
	};

	const openCloseModal = (data) => {
		setIsOpenModal(!isOpenModal);
		setModalData(data);
	};

	return (
		<div>
			<p>Hitos de la transformación tecnológica</p>
			{/* Menu */}
			<nav className='flex gap-3'>
				{
					timeline_data.map((section, index_section) => {
						return (
							<button key={`button-${section.name}`} type='button' onClick={() => moveTimeline(index_section)}>
								{section.name}
							</button>
						);
					})
				}
			</nav>

			{/* Timeline */}
			<div className='timeline w-full overflow-x-auto whitespace-nowrap' ref={timelineRef}>
				{/* Sections */}
				{
					timeline_data.map((section, index_section) => {
						return (
							<div
								className='timeline-section inline-block align-top whitespace-normal'
								key={section.name}
								ref={sectionsRef.current[index_section]}
							>
								{/* Periods */}
								{section.name}
								<div className='timeline-periods flex flex-nowrap'>
									{
										section.periods.map((period, index_period) => {
											const { title, image } = period;
											return (
												<div key={`${section}-${title}`} className='timeline-period'>
													<button className='relative' type='button' style={{ height: 129, width: 129 }} onClick={() => openCloseModal(period)}>
														<Image
															alt={`${section.name}-${title}`}
															fill={true}
															src={image}
														/>
													</button>
													<p>{title}</p>
												</div>
											);
										})
									}
								</div>
							</div>
						);
					})
				}
			</div>

			{/* Modal */}
			<TimelineModal
				data={modalData}
				isOpenModal={isOpenModal}
				openCloseModal={openCloseModal}
			/>
			
		</div>
	);
};

export default Timeline;