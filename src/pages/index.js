import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import GeneralLink from '@/components/GeneralLink';

export default function Home() {
  const containerRef = useRef();
  const coverRef = useRef();
  const menuRef = useRef();
  const spaceRef = useRef();

  useGSAP(
    () => {
      gsap.set('.line-left', { x: '-103%', opacity: 0 });
      gsap.set('.line-right', { x: '103%', opacity: 0 });
      gsap.set('.line-top', { y: '-103%', opacity: 0 });
      gsap.set('.line-bottom', { y: '103%', opacity: 0 });
      gsap.set('.line-right', { x: '103%', opacity: 0 });

      gsap.set('.cover-title', { y: '-103%', opacity: 0 });
      gsap.set('.cover-subtitle', { x: '-10%', opacity: 0 });
      gsap.set('.cover-shields', { opacity: 0 });

      const lines_left = gsap.utils.toArray('.line-left');
      const lines_right = gsap.utils.toArray('.line-right');
      const lines_top = gsap.utils.toArray('.line-top');
      const lines_bottom = gsap.utils.toArray('.line-bottom');
      const shields = gsap.utils.toArray('.img-shield');

      for (let index = 0; index < shields.length; index++) {
        gsap.set(shields[index], { x: index === 0 ? '130%' : '-130%' });
      }

      const cover_animation = gsap.timeline();

      for (let i = 0; i < lines_left.length; i++) {
        cover_animation.to(lines_left[i], { x: 0, opacity: 1, duration: 1 }, 0);
      }
      for (let i = 0; i < lines_right.length; i++) {
        cover_animation.to(lines_right[i], { x: 0, opacity: 1, duration: 1 }, 0);
      }
      for (let i = 0; i < lines_top.length; i++) {
        cover_animation.to(lines_top[i], { y: 0, opacity: 1, duration: 1 }, 0);
      }
      for (let i = 0; i < lines_bottom.length; i++) {
        cover_animation.to(lines_bottom[i], { y: 0, opacity: 1, duration: 1 }, 0);
      }

      cover_animation.to('.cover-title', { y: 0, duration: 1, opacity: 1 });
      cover_animation.to('.cover-subtitle', { x: 0, duration: 1, opacity: 1 }, 1);
      cover_animation.to('.cover-shields', { opacity: 1 });
      cover_animation.to('.img-shield', { x: 0, opacity: 1 });

      cover_animation.duration(2.5);

      gsap.from('.scroll-img', { y: -10, ease: 'circ.out', repeat: -1, yoyo: true });

      const tl_cover = gsap.timeline({
        scrollTrigger: {
          start: 0,
          end: 1,
          pin: true,
          pinSpacing: 10,
          toggleActions: 'play none none reverse',
        },
      });

      tl_cover.to(coverRef.current, { top: '-100%', opacity: 0, ease: 'none' });
    },
    { scope: containerRef }
  );

  return (
    <>
      <main
        className={`min-h-[100vh] bg-cover relative z-50`}
        ref={containerRef}
        style={{ backgroundImage: `url('${process.env.NEXT_PUBLIC_BASE_PATH}img/cubierta.png')` }}
      >
        <div
          ref={coverRef}
          className='fixed z-[60] bg-white w-full min-h-[100vh]'
          style={{ backgroundImage: `url('${process.env.NEXT_PUBLIC_BASE_PATH}img/cubierta.png')` }}
        >
          <div
            className='w-full min-h-[-webkit-fill-available] min-h-[100vh] flex flex-col align-center justify-center relative bg-blend-mode-lighten mix-blend-mode-lighten'
            style={{
              background: `linear-gradient(39.2deg, rgba(255, 118, 87, 0.2) -7.15%, rgba(0, 0, 0, 0.2) 68.29%), radial-gradient(77.64% 135.08% at 72.62% -5.14%, #326799 0%, rgba(78, 173, 215, 0.348804) 32.19%, rgba(161, 105, 250, 0.04) 100%)`,
            }}
          >
            <div className='hidden lg:block overflow-hidden absolute w-full h-[calc(100%_-_54px)] 2xl:h-[calc(100%_-_78px)] top-0'>
              <div className='absolute w-full pl-28'>
                <div className='line-top h-8 border-r border-white w-px' />
                <div className='line-left flex w-[8%] items-center -mt-[12px]'>
                  <span className={`block w-full border-t border-white`}></span>
                  <span className='w-6 h-6 rounded-full border-white border block -mr-[14px]' />
                  <span className='w-2 h-2 rounded-full bg-white block ' />
                </div>
              </div>

              <div className='line-left absolute flex w-[15%] items-center bottom-[25%] '>
                <span className={`block w-full border-t border-white`}></span>
                <span className='w-6 h-6 rounded-full border-white border block -mr-[15px]' />
                <span className='w-2 h-2 rounded-full bg-white block ' />
              </div>

              <div className='line-left absolute flex w-[8%] items-center bottom-[8%] '>
                <span className={`block w-full border-t border-white`}></span>
                <span className='w-6 h-6 rounded-full border-white border block -mr-[14px]' />
                <span className='w-2 h-2 rounded-full bg-white block ' />
              </div>

              <div className='line-top absolute h-[7.8em] right-[35%] w-px border-l border-white' />
              <div className='line-right absolute flex w-[10%] items-center right-[35%] top-28'>
                <span className='w-6 h-6 rounded-full border-white border block -mr-[14px] bg-blue-100' />
                <span className='w-2 h-2 rounded-full bg-white block ' />
                <span className={`block w-full border-t border-white `}></span>
              </div>

              <div className='line-right absolute flex w-[50%] items-center right-[0%] top-48'>
                <span className='w-6 h-6 rounded-full border-white border block -mr-4 bg-blue-100' />
                <span className='w-2 h-2 rounded-full bg-white block ' />
                <span className={`block w-full border-t border-white `}></span>
              </div>

              <div className='line-right absolute flex w-[25%] items-center right-[0%] top-80'>
                <span className='w-6 h-6 rounded-full border-white border block -mr-[15px] bg-blue-100' />
                <span className='w-2 h-2 rounded-full bg-white block ' />
                <span className={`block w-full border-t border-white `}></span>
              </div>

              <div className='absolute w-full bottom-0 pr-[20%] flex justify-end items-start'>
                <div className='line-right flex w-[10%] items-center -mt-[12px]'>
                  <span className='w-6 h-6 rounded-full border-white border block -mr-[14px]' />
                  <span className='w-2 h-2 rounded-full bg-white block ' />
                  <span className={`block w-full border-t border-white`}></span>
                </div>
                <div className='line-bottom h-16 border-r border-white w-px' />
              </div>
            </div>

            <div className='-mt-[120px] md:mt-0 grow flex flex-col align-center justify-center relative z-40'>
              <div className='lg:container text-white 2xl:min-h-[70vh] lg:bg-blue-100 lg:bg-opacity-40 bg-blend-multiply flex flex-col'>
                <div className='grow md:pt-14 2xl:pt-28 overflow-hidden px-10 sm:px-20 2xl:px-36'>
                  <h1 className='cover-title font-medium text-[5em] leading-none 2xl:text-8xl short:text-7xl mb-3'>
                    Bit a bit
                  </h1>
                  <h2 className='cover-subtitle font-extralight short:text-[1.5em] text-[1.65em] 2xl:text-3xl tracking-widest leading-snug'>
                    La evolución digital en la
                    <br /> Universidad Nacional de Colombia
                  </h2>
                  <div className='cover-shields flex short:mt-6 mt-10 short:pb-6 pb-6 md:pb-12'>
                    <div className='short:w-24 w-20 md:w-28 my-auto overflow-hidden'>
                      <img
                        className='img-shield '
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}img/escudo-dned.svg`}
                        alt={'Escudo DNED'}
                      />
                    </div>
                    <div className='ml-7 pl-7 mr-4 border-l border-white short:py-3 py-3 md:py-4  overflow-hidden'>
                      <img
                        className='img-shield short:w-20 w-20 md:w-24'
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}img/escudo-unalab.svg`}
                        alt={'Escudo Unalab'}
                      />
                    </div>
                  </div>
                </div>

                <div className='un-logo bg-blue-100 rounded-b-xl w-full px-8 short:py-3 py-4 2xl:py-7 flex justify-end pr-20 2xl:pr-36'>
                  <img
                    className='short:w-28 w-28 md:w-36 2xl:w-40'
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH}img/escudo-unal.svg`}
                    alt={'Escudo universidad nacional'}
                  />
                </div>
              </div>

              <div className='text-center text-white mt-5 md:mt-10 lg:-mt-10'>
                <button
                  className='text-center block mx-auto'
                  onClick={() => {
                    document.getElementsByTagName('html')[0].scrollTop = 100;
                  }}
                >
                  <img
                    className='scroll-img short:w-8 w-7 lg:w-14 block mx-auto'
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH}img/scroll-button.svg`}
                  />{' '}
                  <span className='inline-block mt-2 text-base font-light tracking-wider opacity-80'>comenzar</span>
                </button>
              </div>
            </div>
            <div className='fixed bottom-0 w-full md:relative bg-black text-white py-5 lg:py-3 2xl:py-5 border-t-2 border-white z-50'>
              <div className='container flex pl-10 md:pl-0 md:justify-end'>
                <GeneralLink
                  className='font-light text-sm md:text-base 2x:text-xl mr-12 uppercase tracking-widest flex align-center'
                  href={'./creditos'}
                >
                  <img
                    className='w-7 2xl:w-9 mr-2 -m-[2px]'
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH}img/boton-siguiente.svg`}
                    alt='botón siguiente'
                  />{' '}
                  <span>Créditos</span>
                </GeneralLink>
                <GeneralLink
                  className='font-light text-sm md:text-base 2x:text-xl uppercase tracking-widest flex align-center'
                  href={'./referencias'}
                >
                  <img
                    className='w-7 2xl:w-9 mr-2 -m-[2px]'
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH}img/boton-siguiente.svg`}
                    alt='botón siguiente'
                  />{' '}
                  <span>Referencias</span>
                </GeneralLink>
              </div>
            </div>
          </div>
        </div>
        {/*MENU INTERNO*/}
        <div ref={spaceRef} className=' w-full h-10' />
        <div ref={menuRef} className='w-full min-h-[100vh] flex flex-col align-center justify-center relative'>
          <div className='bg-black bg-opacity-70 py-4 text-center shadow-xl relative z-50'>
            <div className='lg:container px-2'>
              <h2 className='uppercase tracking-[0.18em] text-white'>
                <span className='border-r border-white font-medium pr-4 mr-4'>Bit a bit</span>{' '}
                <span className='font-light'>La evolución digital en la Universidad Nacional de Colombia</span>
              </h2>
            </div>
          </div>

          <div className='grow'>
            <div className='lg:h-[680px] 2xl:h-[calc(100vh_-_56px)] flex flex-col lg:flex-row lg:items-center text-white'>
              <GeneralLink
                href={'./prologo'}
                className='basis-1/6 lg:h-full bg-cover group shadow-capitulo relative z-40'
              >
                <div className='flex flex-col h-full'>
                  <div className='text-center lg:py-28'>
                    <p className='text-9xl font-thin'></p>
                  </div>
                  <div className='grow border-y border-white font-light text-3xl flex justify-end'>
                    <div className='h-full text-center tracking-wider w-full px-8 2xl:px-16 transition-all group-hover:bg-white group-hover:bg-opacity-10 pb-10 lg:pb-0'>
                      <span className='block border-l border-white h-16 mx-auto w-0' />
                      <span className='block rounded-full border border-white h-8 mx-auto w-8 flex items-center justify-center'>
                        <img
                          src={`${process.env.NEXT_PUBLIC_BASE_PATH}img/arrow-down.svg`}
                          alt='arrow down'
                          className='w-4'
                        />
                      </span>
                      <h2 className='mt-7 text-2xl 2xl:text-3xl'>Prólogo</h2>
                    </div>
                  </div>
                  <div className='bg-blend-multiply text-center lg:py-20 2xl:py-24'></div>
                </div>
              </GeneralLink>

              <GeneralLink
                href={'./introduccion'}
                className='basis-1/6 lg:h-full bg-cover group shadow-capitulo relative z-30'
              >
                <div className='flex flex-col h-full'>
                  <div className='color-introduccion text-center lg:py-28'>
                    <p className='text-9xl font-thin'></p>
                  </div>
                  <div className='grow border-y border-white font-light text-3xl flex justify-end bg-blue-cian bg-opacity-20'>
                    <div className='h-full text-center tracking-wider w-full px-8 2xl:px-16  transition-all group-hover:bg-white group-hover:bg-opacity-10 pb-10 lg:pb-0'>
                      <span className='block border-l border-white h-16 mx-auto w-0' />
                      <span className='block rounded-full border border-white bg-blue-cian h-8 mx-auto w-8 flex items-center justify-center'>
                        <img
                          src={`${process.env.NEXT_PUBLIC_BASE_PATH}img/arrow-down.svg`}
                          alt='arrow down'
                          className='w-4'
                        />
                      </span>
                      <h2 className='mt-7 text-2xl 2xl:text-3xl'>Introducción</h2>
                    </div>
                  </div>
                  <div className='color-introduccion bg-blend-multiply text-center lg:py-20 2xl:py-24'></div>
                </div>
              </GeneralLink>

              <GeneralLink
                href={'./ascendencias-digitales'}
                className='group z-20 relative basis-1/6 h-full shadow-capitulo block'
                style={{
                  background: `linear-gradient(233.61deg, rgba(74, 70, 255, 0.2) 32.21%, rgba(44, 42, 153, 0) 91.49%), url('${process.env.NEXT_PUBLIC_BASE_PATH}img/capitulo1-portada.png') center / cover`,
                }}
              >
                <div className='flex flex-row lg:flex-col h-full'>
                  <div className='color-capitulo1 bg-blend-multiply text-center py-6 lg:py-12 px-10 lg:px-0 border-y lg:border-y-0 border-white'>
                    <p className='text-7xl lg:text-9xl font-thin'>1</p>
                  </div>
                  <div className='grow border-y border-white grow font-light px-7 w-full tracking-wider transition-all group-hover:bg-blue-base group-hover:bg-opacity-10'>
                    <span className='block border-l border-white h-16 mx-auto w-0 hidden lg:block' />
                    <span className='bg-blue-base block rounded-full border border-white h-8 mx-auto w-8 flex items-center justify-center hidden lg:flex'>
                      <img
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}img/arrow-down.svg`}
                        alt='arrow down'
                        className='w-4'
                      />
                    </span>
                    <h2 className='text-2xl 2xl:text-3xl mt-7'>Ascendencias digitales:</h2>
                    <p className='font-extralight text-lg 2xl:text-xl mt-2'>
                      perspectivas globales
                      <span className='lg:block'> y el caso colombiano</span>
                    </p>
                  </div>
                  <div className='color-capitulo1 bg-blend-multiply text-center py-20 2xl:py-24'></div>
                </div>
              </GeneralLink>

              <GeneralLink
                href={'./la-universidad-nacional-de-colombia-en-la-era-digital'}
                className='group z-10 relative basis-1/6 h-full bg-cover shadow-capitulo block'
                style={{
                  background: `linear-gradient(233.61deg, rgba(74, 70, 255, 0.2) 32.21%, rgba(44, 42, 153, 0) 91.49%), url('${process.env.NEXT_PUBLIC_BASE_PATH}img/capitulo2-portada.png') center / cover`,
                }}
              >
                <div className='flex flex-row lg:flex-col h-full'>
                  <div className='color-capitulo2 bg-blend-multiply text-center py-6 lg:py-12 px-8 lg:px-0 border-y lg:border-y-0 border-white'>
                    <p className='text-7xl lg:text-9xl font-thin'>2</p>
                  </div>
                  <div className='grow border-y border-white grow font-light px-7 w-full tracking-wider transition-all group-hover:bg-purple-base group-hover:bg-opacity-40'>
                    <span className='block border-l border-white h-16 mx-auto w-0 hidden lg:block' />
                    <span className='bg-purple-base rounded-full border border-white h-8 mx-auto w-8 flex items-center justify-center hidden lg:flex'>
                      <img
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}img/arrow-down.svg`}
                        alt='arrow down'
                        className='w-4'
                      />
                    </span>
                    <h2 className='text-2xl 2xl:text-3xl mt-7'>
                      La Universidad Nacional de Colombia en la era digital
                    </h2>
                  </div>
                  <div className='color-capitulo2 bg-blend-multiply text-center py-20 2xl:py-24'></div>
                </div>
              </GeneralLink>

              <GeneralLink
                href={'./cultura-digital-unal'}
                className='group basis-1/6 h-full bg-cover block'
                style={{
                  background: `linear-gradient(233.61deg, rgba(74, 70, 255, 0.2) 32.21%, rgba(44, 42, 153, 0) 91.49%), url('${process.env.NEXT_PUBLIC_BASE_PATH}img/capitulo3-portada.png')`,
                }}
              >
                <div className='flex flex-row lg:flex-col h-full'>
                  <div className='color-capitulo3 bg-blend-multiply text-center py-6 lg:py-12 px-8 lg:px-0 border-y lg:border-y-0 border-white'>
                    <p className='text-7xl lg:text-9xl font-thin'>3</p>
                  </div>
                  <div className='grow border-y border-white grow font-light px-7 w-full tracking-wider transition-all group-hover:bg-green-light group-hover:bg-opacity-20'>
                    <span className='block border-l border-white h-16 mx-auto w-0 hidden lg:block' />
                    <span className='bg-green-light block rounded-full border border-white h-8 mx-auto w-8 flex items-center justify-center hidden lg:flex'>
                      <img
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}img/arrow-down.svg`}
                        alt='arrow down'
                        className='w-4'
                      />
                    </span>
                    <h2 className='text-2xl 2xl:text-3xl mt-7'>Cultura digital Unal</h2>
                    <p className='font-extralight text-lg 2xl:text-xl mt-2'>
                      caminos a la
                      <span className='lg:block'>transformación digital</span>
                    </p>
                  </div>
                  <div className='color-capitulo3 bg-blend-multiply text-center py-20 2xl:py-24'></div>
                </div>
              </GeneralLink>

              <GeneralLink className='basis-1/6 h-full bg-cover group' href={'./epilogo'}>
                <div className='flex flex-col h-full'>
                  <div className='text-center lg:py-28'>
                    <p className='text-9xl font-thin'></p>
                  </div>
                  <div className='grow border-y border-white font-light'>
                    <div className='h-full text-center tracking-wider w-full transition-all group-hover:bg-white group-hover:bg-opacity-10 pb-10 lg:pb-0'>
                      <span className='block border-l border-white h-16 mx-auto w-0' />
                      <span className='block rounded-full border border-white h-8 mx-auto w-8 flex items-center justify-center'>
                        <img
                          src={`${process.env.NEXT_PUBLIC_BASE_PATH}img/arrow-down.svg`}
                          alt='arrow down'
                          className='w-4'
                        />
                      </span>
                      <h2 className='text-2xl mt-7 2xl:text-3xl'>Epílogo</h2>
                      <p className='font-extralight text-lg 2xl:text-xl mt-3 2xl:mt-4'>
                        La transformación digital, <span className='2xl:block'>un proceso inacabado</span>
                      </p>
                    </div>
                  </div>
                  <div className='bg-blend-multiply text-center lg:py-20 2xl:py-24'></div>
                </div>
              </GeneralLink>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
