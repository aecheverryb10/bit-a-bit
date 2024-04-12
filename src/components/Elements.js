import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const MainSection = (props) => {
  const {children } = props;
  return <section className='px-4 md:px-10 xl:pr-0 xl:pl-52 max-w-[1440px] '>{children}</section>;
};

const ParrafoInicial = (props) => {
  const { children } = props;
  return (
    <MainSection>
      <div className='bg-grey-light bg-opacity-30 pl-10 lg:pl-20 xl:pl-40 pt-20 pb-28 rounded-t-[20px] xl:rounded-tr-none xl:rounded-tl-[40px] 2xl:rounded-tr-[40px] shadow-xl'>
        <div className='relative flex items-center mb-16 '>
          <div
            className='w-16 h-16 rounded-full left-[-30px] absolute'
            style={{ background: `radial-gradient(50% 50% at 50% 50%, #02EBB6 0%, rgba(8, 28, 89, 0) 100%)` }}
          />
          <div className='flex items-center relative z-10 w-full'>
            <span className='w-1 h-1 rounded-full bg-white' />
            <div className='border-white border-t grow w-full' />
          </div>
          <div className='absolute right-40 top-1 hidden lg:block'>
            <span className={`block h-64 border-r border-white mr-3`}></span>
            <span className='w-6 h-6 rounded-full bg-green-light border block' />
            <span className='w-2 h-2 rounded-full bg-white block -mt-4 ml-2' />
          </div>
        </div>
        <div className='pr-10 lg:pr-16'>
          <div className='max-w-[700px] text-white font-ancizar text-xl leading-relaxed'>{children}</div>
        </div>
      </div>
    </MainSection>
  );
};

const BloqueTexto = (props) => {
  const { children, shadow = true, noPaddingBottom = false, noPaddingTop = false } = props;
  return (
    <MainSection>
      <div className={`bg-white bg-opacity-70 ${shadow ? 'shadow-xl' : ''}`}>
        <div
          className={`pl-10 lg:pl-20 xl:pl-40 pr-10 lg:pr-16 ${noPaddingTop ? '' : 'pt-16'} ${
            noPaddingBottom ? '' : 'pb-28'
          }`}
        >
          <div className='max-w-[700px] main-content text-lg font-serif leading-relaxed'>{children}</div>
        </div>
      </div>
    </MainSection>
  );
};

const TituloCapitulo = (props) => {
  const { children } = props;
  const containerRef = useRef();

  useGSAP(
    () => {
      gsap.set('.line-left', { x: '-103%', opacity: 0 });
      gsap.set('.line-right', { x: '103%', opacity: 0 });
      gsap.set('.chapter-number', { y: '-100%', opacity: 0 });
      gsap.set('.chapter-title', { x: '-100%', opacity: 0 });

      const lines_left = gsap.utils.toArray('.line-left');
      const lines_right = gsap.utils.toArray('.line-right');
      const chapter_title = gsap.utils.toArray('.chapter-title');

      const title_animation = gsap.timeline();

      for (let i = 0; i < lines_left.length; i++) {
        title_animation.to(lines_left[i], { x: 0, opacity: 1, duration: 2 }, 0);
      }
      for (let i = 0; i < lines_right.length; i++) {
        title_animation.to(lines_right[i], { x: 0, opacity: 1, duration: 2 }, 0);
      }

      title_animation.to('.chapter-number', { y: 0, opacity: 1, duration: 1 });

      for (let i = 0; i < chapter_title.length; i++) {
        title_animation.to(chapter_title[i], { x: 0, opacity: 1, duration: 1.5 }, 3);
      }

      title_animation.duration(3);
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className=' overflow-hidden'>
      <div className='text-white py-16 lg:pt-24 lg:pb-40 '>
        <div className='flex justify-end mb-8'>
          <div className='line-right flex w-[70%] items-center'>
            <span className='w-6 h-6 rounded-full bg-green-light border block -mr-4' />
            <span className='w-2 h-2 rounded-full bg-white block ' />
            <span className={`block w-full border-t border-white`}></span>
          </div>
        </div>

        <div className='mb-12'>
          <div className='line-left flex w-[20%] items-center'>
            <span className={`block w-full border-t border-white`}></span>
            <span className='w-6 h-6 rounded-full border-white border block -mr-[14px]' />
            <span className='w-2 h-2 rounded-full bg-white block ' />
          </div>
        </div>

        <div className='line-left flex w-[80%] items-center -mb-3'>
          <span className={`block w-full border-t border-white`}></span>
          <span className='w-6 h-6 rounded-full bg-green-light border block -mr-4' />
          <span className='w-2 h-2 rounded-full block bg-white' />
        </div>

        <div className='lg:container container-title px-10 lg:pl-36 overflow-hidden'>{children}</div>

        <div className='flex justify-end mb-20'>
          <div
            className='line-right h-[1px] w-[76%] -mt-[1px]'
            style={{ background: `linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.2) 100%)` }}
          />
        </div>

        <div className='flex justify-between'>
          <div className='line-left flex w-[60%] items-center -mb-3'>
            <span className={`block w-full border-t border-white`}></span>
            <span className='w-2 h-2 rounded-full block bg-white' />
          </div>

          <div className='line-right flex w-[20%] items-center'>
            <span className='w-6 h-6 rounded-full bg-green-light border block -mr-4' />
            <span className={`block w-full border-t border-white`}></span>
          </div>
        </div>
      </div>
    </section>
  );
};

const Subtitulo = (props) => {
  const { children, id } = props;
  return (
    <MainSection>
      <div className='bg-purple-base bg-opacity-70 text-white'>
        <h2 id={id} className='pl-10 lg:pl-20 xl:pl-40 py-10 font-normal text-3xl'>{children}</h2>
      </div>
    </MainSection>
  );
};

const Resaltado = (props) => {
  const { children } = props;
  return (
    <MainSection>
      <div className={`bg-white bg-opacity-70 py-16 font-ancizar font-bold `}>
        <div className='flex max-w-[760px]'>
          <div className='items-center justify-start hidden md:flex'>
            <span className={`block w-20 lg:w-40 border-2 border-purple-base`}></span>
            <span className='w-8 h-8 rounded-full border-purple-base border-4 block -mr-[22px]' />
            <span className='w-3 h-3 rounded-full bg-purple-base block ' />
          </div>
          <p className='text-2xl text-purple-base pl-10 pr-10 lg:pr-0'>&quot;{children}&ldquo;</p>
        </div>
      </div>
    </MainSection>
  );
};

export { MainSection, ParrafoInicial, BloqueTexto, TituloCapitulo, Subtitulo, Resaltado };
