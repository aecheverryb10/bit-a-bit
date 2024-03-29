import Image from 'next/image';
import ReactModal from 'react-modal';

const TimelineModal = (props) => {
	const { data, isOpenModal, openCloseModal } = props
	
	const containerClassName = (num) => {
		let class_name = "flex flex-col justr"
		if (num <= 3) {
			class_name = `${class_name} grow basis-full justify-center`
		} else if (num === 4) {
			class_name = `${class_name} w-2/5`
		}
		else if (num > 4) {
			class_name = `${class_name} w-1/5`;
		}

		return class_name
	}

	return (
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
					maxHeight: "fit-content",
					height: 700,
					outline: 'none',
					overflow: 'auto',
					padding: 30,
					position: 'absolute',
					width: 1140,
					margin: "auto",
					top: 0,
					bottom: 0,
					left: 0,
					right: 0,
				}
			}}
		>
			<button className='absolute bg-white rounded-full w-[39px] h-[39px] right-[30px] text-[#02EBB6] hover:scale-105' onClick={openCloseModal}>X</button>
			<div className='pb-5'>
				{data.title && <p className='text-2xl pb-1'>{data.title}</p>}
				{data.description && <p className='text-3xl text text-white'>{data.description}</p>}
			</div>
			<div className={`grow flex flex-row ${data?.children?.length >= 4 ? "flex-wrap justify-around" : ""} gap-x-10 gap-y-5`}>
				{
					data.children
						// More than one items
						? data.children.map(child => {
							return (
								<div className={`${containerClassName(data.children.length)} ${child.className ?? ""}`} key={`${child.title}`}>
									<div className=''>
										{child.title && <p className='text-xl pb-1'>{child.title}</p>}
										{child.description && <p className='text-l text text-white'>{child.description}</p>}
									</div>
									{
										child.image && <div className='relative my-4 rounded-2xl'>
											<Image
												alt={child.description}
												src={child.image}
												fill
												className={`!relative border-8 bg-white border-white rounded-2xl mb-3 mx-auto !max-h-96 ${child.image_className ?? ""}`}
											/>
										</div>
									}
									{
										child.caption && <figcaption className='text-sm font-light'>
											{child.caption}
										</figcaption>
									}
								</div>
							);
						})
						// Only one item
						: <div className='grow flex flex-col gap-4'>
							{
								data.image && <div className='relative grow rounded-2xl'>
									<Image
										alt={data.description}
										src={data.image}
										fill
										objectFit='contain'
										className={`!w-auto border-8 rounded-2xl bg-white border-white mb-3 mx-auto ${data.image_className ?? ""}`}
									/>
								</div>
							}
							{
								data.caption && <figcaption className='font-light w-2/5 mx-auto'>
									{data.caption}
								</figcaption>
							}
						</div>
				}
			</div>
		</ReactModal>
	)
};

export default TimelineModal;