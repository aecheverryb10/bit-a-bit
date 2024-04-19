import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { MainSection } from './Elements';

const ScrollImageVertical = (props) => {
  const { alt, img, caption } = props;

  const containerRef = useRef();
  const captionRef = useRef();
  const gradientRef = useRef();

  useGSAP(
    () => {
      // // gsap code here...
      const tl_caption = gsap.timeline({
        scrollTrigger: {
          pin: true,
          scrub: true,
          trigger: containerRef.current,
          start: 'top',
          endTrigger: containerRef.current,
          end: 'bottom',
          // markers: true
        },
      });
      tl_caption.to(captionRef.current, { top: '10%' });
      tl_caption.scrollTrigger.refresh(true);

      // gsap code here...
      const tl_gradient = gsap.timeline({
        scrollTrigger: {
          scrub: true,
          trigger: containerRef.current,
          start: 'top 50%',
          endTrigger: containerRef.current,
          end: 'bottom',
        },
      });
      tl_gradient
        .to(gradientRef.current, { opacity: 0 })
        .set(gradientRef.current, { bottom: 0, rotate: 180, top: 'auto' })
        .to(gradientRef.current, { opacity: 1 });

      tl_gradient.scrollTrigger.refresh(true);
    },
    { scope: containerRef }
  );

  return (
    <section className='lg:pl-20 max-w-[1440px] '>
      <div className='h-screen lg:bg-white lg:bg-opacity-70' ref={containerRef}>
        <div className='relative h-screen '>
          <div ref={captionRef} className='absolute right-48 bottom-0 text-white z-10 caption-element vertical'>
            {caption}
          </div>
          <div className='relative w-fit'>
            <div
              ref={gradientRef}
              className='absolute bg-gradient-to-b from-white  from-[-20%] to-transparent to-30% h-screen top-0 z-10 w-full '
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className='h-screen w-auto shadow-2xl'
              alt={alt}
              src={img}
              style={{ objectFit: 'contain', objectPosition: 'center' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollImageVertical;
