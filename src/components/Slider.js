'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import FsLightbox from 'fslightbox-react';

//Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/keyboard';
import { Keyboard } from 'swiper/modules';

const Slider = (props) => {
  const { slides = [] } = props;
  //States
  const [isDisabled, setIsDisabled] = useState({ prev: true, next: false });
  const [photo, setPhoto] = useState(0);
  const [toggler, setToggler] = useState(false);
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
    <div>
      <Swiper
        keyboard={{
          enabled: true,
        }}
        modules={[Keyboard]}
        onKeyPress={(swiper, code) => {
          const AVAILABLE_KEYS = [37, 39];
          if (AVAILABLE_KEYS.includes(code)) {
            updateStateControllers();
          }
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={3}
        spaceBetween={50}
      >
        {slides.map((slide, index) => {
          const { src, alt, caption } = slide;
          return (
            <SwiperSlide key={alt}>
              <div style={{ position: 'relative' }}>
                <Image
                  alt={alt}
                  height={100}
                  onClick={() => {
                    setToggler(!toggler);
                    setPhoto(index + 1);
                  }}
                  src={src}
                  style={{ width: 'fit-content' }}
                  width={100}
                />
              </div>
              {caption && <figcaption>{caption}</figcaption>}
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div>
        <button
          className='disabled:opacity-50'
          disabled={isDisabled.prev}
          onClick={() => {
            swiperRef.current.slidePrev();
            updateStateControllers();
          }}
        >
          Prev
        </button>
        <button
          className='disabled:opacity-50'
          disabled={isDisabled.next}
          onClick={() => {
            swiperRef.current.slideNext();
            updateStateControllers();
          }}
        >
          Next
        </button>
      </div>

      <FsLightbox toggler={toggler} sources={slides.map((slide) => slide.src)} slide={photo} />
    </div>
  );
};

export default Slider;
