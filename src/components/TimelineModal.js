import Image from 'next/image';
import ReactModal from 'react-modal';

const TimelineModal = (props) => {
  const { data, isOpenModal, openCloseModal } = props;

  const containerClassName = (num) => {
    let class_name = 'flex flex-col justr';
    if (num <= 3) {
      class_name = `${class_name} grow basis-full justify-center`;
    } else if (num === 4) {
      class_name = `${class_name} w-2/5`;
    } else if (num > 4) {
      class_name = `${class_name} w-1/5`;
    }

    return class_name;
  };

  return (
    <ReactModal
      className='text-center'
      isOpen={isOpenModal}
      contentLabel='Minimal Modal Example'
      overlayClassName='react-modal-overlay'
      onAfterOpen={() => {
        document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
      }}
      onRequestClose={openCloseModal}
      closeTimeoutMS={300}
      shouldCloseOnOverlayClick={true}
      preventScroll={true}
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
        },
        content: {
          background: '#fff',
          border: 'none',
          borderRadius: 15,
          display: 'flex',
          flexDirection: 'column',
          maxHeight: 'fit-content',
          height: 700,
          outline: 'none',
          overflow: 'auto',
          padding: 30,
          position: 'absolute',
          maxWidth: 1140,
          margin: 'auto',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        },
      }}
    >
      <button
        className='bg-blue-dark absolute rounded-full w-[39px] h-[39px] right-[30px] text-white hover:bg-opacity-80 transition text-4xl font-light'
        onClick={openCloseModal}
      >
        <span className='inline-block -mt-3 align-middle'>×</span>
      </button>
      <div className='pt-10 pb-5'>
        {data.title && <p className='text-3xl pb-1 font-bold text-purple-base'>{data.title}</p>}
        {data.description && <p className='text-2xl'>{data.description}</p>}
      </div>
      <div className='grow flex flex-col items-center justify-center'>
        <div
          className={`grow flex flex-row items-start ${
            data?.children?.length >= 4 ? 'flex-wrap justify-around' : ''
          } gap-x-10 gap-y-5`}
        >
          {data.children ? (
            // More than one items
            data.children.map((child) => {
              return (
                <div
                  className={`${containerClassName(data.children.length)} ${child.className ?? ''}`}
                  key={`${child.title}`}
                >
                  <div className=''>
                    {child.title && <p className='text-xl pb-1 font-bold text-purple-base'>{child.title}</p>}
                    {child.description && <p className='text-l text font-light font-ancizar'>{child.description}</p>}
                  </div>
                  <div>
                    {child.image && (
                      <div className='relative my-4 rounded-2xl'>
                        <Image
                          alt={child.description}
                          src={child.image}
                          fill
                          className={`!relative border-8 bg-white border-white rounded-2xl mb-3 mx-auto w-auto !max-h-56 ${
                            child.image_className ?? ''
                          }`}
                        />
                      </div>
                    )}
                    {child.caption && <figcaption className='text-sm font-light'>{child.caption}</figcaption>}
                  </div>
                </div>
              );
            })
          ) : (
            // Only one item
            <div className='grow flex flex-col gap-4'>
              {data.image && (
                <div className='relative grow rounded-2xl'>
                  <Image
                    alt={data.description}
                    src={data.image}
                    fill
                    objectFit='contain'
                    className={`!relative !w-auto border-8 rounded-2xl !max-h-96 bg-white border-white mb-3 mx-auto ${
                      data.image_className ?? ''
                    }`}
                  />
                </div>
              )}
              {data.caption && <figcaption className='font-light w-2/5 mx-auto'>{data.caption}</figcaption>}
            </div>
          )}
        </div>
        {!!data?.additionalData && (
          <div className=''>
            {data?.additionalData?.title && <p className='text-xl pb-1'>{data?.additionalData?.title}</p>}
            {data?.additionalData?.description && <p className='text-l text '>{data?.additionalData?.description}</p>}
          </div>
        )}
      </div>
    </ReactModal>
  );
};

export default TimelineModal;
