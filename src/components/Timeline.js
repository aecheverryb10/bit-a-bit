"use client";
import { createRef, useRef, useState } from 'react';
import Image from 'next/image';
import ReactModal from 'react-modal';
//Data
import timeline_data from '@/data/timeline_data';


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
			<ReactModal
				className="text-center"
				isOpen={isOpenModal}
				contentLabel="Minimal Modal Example"
				onRequestClose={openCloseModal}
				style={{
					overlay: {
						position: 'fixed',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						backgroundColor: "rgba(0, 0, 0, 0.8)",

					},
					content: {
						background: '#02EBB6',
						border: "none",
						borderRadius: 15,
						display: "flex",
						flexDirection: "column",
						height: 611,
						outline: 'none',
						overflow:'auto',
						padding:36,
						position: 'absolute',
						width: 860,
						margin: "auto",
						top:0,
						bottom:0,
						left:0,
						right:0,
					}
				}}
			>
				{/* <button onClick={openCloseModal}>Close Modal</button> */}
				<div className='pb-5'>
					{modalData.title && <p className='text-2xl pb-1'>{modalData.title}</p>}
					{modalData.description && <p className='text-3xl text text-white'>{modalData.description}</p>}
				</div>
				<div className={`grow flex flex-row ${modalData?.children?.length >= 4 ?"flex-wrap justify-around" : ""} gap-10`}>
					{
						modalData.children
							? modalData.children.map(child => {
								const num_children = modalData.children.length
								const basis = num_children === 4
									? "2"
									: num_children > 4 ? 4 : num_children

								return (
									<div className={`flex flex-col ${num_children>4? "basis-1/"+basis : "w-"+basis+"/5"}`} key={`${child.title}`}>
										<div className='mb-4'>
											{child.title && <p className='text-xl pb-1'>{child.title}</p>}
											{child.description && <p className='text-l text text-white'>{child.description}</p>}
										</div>
										{
											child.image && <div className='relative mb-2 rounded-2xl bg-white'>
												<Image
													alt={child.description}
													src={child.image}
													fill
													className='!w-auto !relative border-8 border-white rounded-2xl mb-3 mx-auto !max-h-96'
												/>
											</div>
										}
										{
											child.caption && <figcaption className='text-sm font-light'>
												{child.caption}
											</figcaption>
										}
									</div>
								)
							})
							: <div className='grow flex flex-col gap-4'>
								{
									modalData.image && <div className='relative grow bg-white  rounded-2xl'>
										<Image
											alt={modalData.description}
											src={modalData.image}
											fill
											objectFit='contain'
											className='!w-auto border-8 border-white mb-3 mx-auto'
										/>
									</div>
								}
								{
									modalData.caption && <figcaption className='font-light w-3/5 mx-auto'>
										{modalData.caption}
									</figcaption>
								}
							</div>
					}
				</div>
			</ReactModal>
		</div>
	);
};

export default Timeline;