'use client';
import { useEffect, useRef, useState } from 'react';
import FsLightbox from 'fslightbox-react';

//Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/keyboard';
import { Keyboard } from 'swiper/modules';
import { Portal } from 'react-portal';

const Slider = (props) => {
  const { slides = [], correctHeight } = props;
  //States
  const [isDisabled, setIsDisabled] = useState({ prev: true, next: false });
  const [photo, setPhoto] = useState(0);
  const [toggler, setToggler] = useState(false);
  const PHOTOS = slides.map((slide) => slide.src);
  //Ref
  const swiperRef = useRef();

  useEffect(() => {
    if (swiperRef.current) {
      updateStateControllers();
    }
  }, []);

  const updateStateControllers = () => {
    setIsDisabled({
      prev: swiperRef.current.isBeginning,
      next: swiperRef.current.isEnd,
    });
  };
  return (
    <>
      <div className='lg:pl-32 '>
        <div className='rounded-l-[30px] text-white relative overflow-hidden shadow-2xl'>
          <div
            className='absolute w-full h-full'
            style={{
              background: `linear-gradient(257.93deg, #52188C 13.06%, #061445 109.1%)`,
            }}
          />
          <img className='absolute h-full opacity-10' src='./img/texture_34.png' alt='textura' />
          <div className='py-20 px-10 lg:pr-0 lg:pl-20'>
            <Swiper
              keyboard={{
                enabled: false,
              }}
              modules={[Keyboard]}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              spaceBetween={35}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
                1560: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
            >
              {slides.map((slide, index) => {
                const { src, alt, caption } = slide;
                return (
                  <SwiperSlide key={alt}>
                    <div className='h-full' style={{ position: 'relative' }}>
                      <img
                        alt={alt}
                        onClick={() => {
                          setToggler(!toggler);
                          let position = PHOTOS.indexOf(src);
                          setPhoto(position);
                        }}
                        src={src}
                        style={
                          correctHeight
                            ? { height: '300px', maxHeight: '300px', width: 'auto' }
                            : { width: '100%', maxHeight: '552px' }
                        }
                      />
                      {caption && <div className='mt-8 pr-8'>{caption}</div>}
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className='flex text-white pt-8'>
              <button
                className='disabled:opacity-50 text-2xl z-50 relative '
                disabled={isDisabled.prev}
                onClick={() => {
                  swiperRef.current.slidePrev();
                  updateStateControllers();
                }}
              >
                <img src='./img/prev-button.svg' className='w-10' />
              </button>
              <button
                className='disabled:opacity-50 text-2xl z-50 relative ml-4'
                disabled={isDisabled.next}
                onClick={() => {
                  swiperRef.current.slideNext();
                  updateStateControllers();
                }}
              >
                <img src='./img/next-button.svg' className='w-10' />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Portal>
        <FsLightbox toggler={toggler} sources={PHOTOS} sourceIndex={photo} />
      </Portal>
    </>
  );
};

export default Slider;