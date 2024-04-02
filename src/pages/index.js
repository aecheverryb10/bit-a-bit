import { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import Link from 'next/link';
/* Rectangle 78 */

export default function Home() {
  const containerRef = useRef();

  useGSAP(() => {
    gsap.set(".line-left", { x: "-103%", opacity: 0 });
    gsap.set(".line-right", { x: "103%", opacity: 0 });
    gsap.set(".line-top", { y: "-103%", opacity: 0 });
    gsap.set(".line-bottom", { y: "103%", opacity: 0 });
    gsap.set(".line-right", { x: "103%", opacity: 0});
    
    gsap.set(".cover-title", { y: "-103%", opacity: 0 });
    gsap.set(".cover-subtitle", { x: "-10%", opacity: 0 });
    gsap.set(".cover-shields", { opacity: 0 });


    const lines_left = gsap.utils.toArray(".line-left");
    const lines_right = gsap.utils.toArray(".line-right")
    const lines_top = gsap.utils.toArray(".line-top")
    const lines_bottom = gsap.utils.toArray(".line-bottom")
    const shields = gsap.utils.toArray(".img-shield")

    for (let index = 0; index < shields.length; index++) {
      gsap.set(shields[index], { x: index === 0 ? "130%" : "-130%"});      
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
    
    cover_animation.to(".cover-title", {y: 0, duration:1, opacity: 1});
    cover_animation.to(".cover-subtitle", {x: 0, duration:1, opacity: 1}, 1);
    cover_animation.to(".cover-shields", { opacity: 1 });
    
    cover_animation.to(".img-shield", {x:0, opacity: 1});

    cover_animation.duration(4)

    gsap.from('.scroll-img', { y: -10, ease: "circ.out", repeat:-1, yoyo: true})
  }, { scope: containerRef });

  return (
    <main className={`min-h-[100vh] bg-cover`} ref={containerRef} style={{ backgroundImage: `url('./img/cubierta.png')` }}>
      <div
        className='w-full min-h-[100vh] flex flex-col align-center justify-center relative bg-blend-mode-lighten mix-blend-mode-lighten'
        style={{
          background: `linear-gradient(39.2deg, rgba(255, 118, 87, 0.2) -7.15%, rgba(0, 0, 0, 0.2) 68.29%), radial-gradient(77.64% 135.08% at 72.62% -5.14%, #326799 0%, rgba(78, 173, 215, 0.348804) 32.19%, rgba(161, 105, 250, 0.04) 100%)`,
        }}
      >
        <div className='overflow-hidden absolute w-full h-[calc(100%_-_54px)] 2xl:h-[calc(100%_-_78px)] top-0'>
          <div className='absolute w-full pl-28'>
            <div className='line-top h-8 border-r border-white w-px' />
            <div className='line-left flex w-[8%] items-center -mt-[12px]'>
              <span className={`block w-full border-t border-white`}></span>
              <span className='w-6 h-6 rounded-full border-white border block -mr-[14px]' />
              <span className='w-2 h-2 rounded-full bg-white block ' />
            </div>
          </div>

          <div className='line-left absolute flex w-[15%] items-center bottom-[25%]'>
            <span className={`block w-full border-t border-white`}></span>
            <span className='w-6 h-6 rounded-full border-white border block -mr-[15px]' />
            <span className='w-2 h-2 rounded-full bg-white block ' />
          </div>

          <div className='line-left absolute flex w-[8%] items-center bottom-[8%]'>
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

        <div className='grow flex flex-col align-center justify-center relative z-50'>
          <div className='un-logo bg-blue-100 rounded-b-xl absolute right-32 top-0 px-8 py-7'>
            <img src={'./img/escudo-unal.svg'} alt={'Escudo universidad nacional'} />
          </div>

          <div className='container text-white px-20 2xl:px-36 2xl:min-h-[70vh] bg-blue-100 bg-opacity-40 bg-blend-multiply flex flex-col'>
            <div className='grow pt-14 2xl:pt-28 overflow-hidden'>
              <h1 className='cover-title font-medium text-[5em] leading-none 2xl:text-8xl mb-3'>Bit a Bit</h1>
              <h2 className='cover-subtitle font-extralight text-[1.65em] 2xl:text-3xl tracking-widest leading-snug'>
                La evolución digital en la
                <br /> Universidad Nacional de Colombia
              </h2>
              <div className='cover-shields flex mt-10 pb-12'>
                <div className='w-28 my-auto overflow-hidden'>
                  <img className='img-shield ' src={'./img/escudo-dned.svg'} alt={'Escudo DNED'} />
                </div>
                <div className='ml-7 pl-7 mr-4 border-l border-white py-4  overflow-hidden'>
                  <img className='img-shield w-24' src={'./img/escudo-unalab.svg'} alt={'Escudo Unalab'} />
                </div>
              </div>
            </div>
          </div>

          <div className='text-center text-white -mt-10'>
            <button className='text-center block mx-auto'>
              <img className='scroll-img w-14 block mx-auto' src='./img/scroll-button.svg' />{' '}
              <span className='inline-block mt-2 text-base font-light tracking-wider opacity-80'>
                scroll para empezar
              </span>
            </button>
          </div>
        </div>
        <div className='bg-black text-white py-3 2xl:py-5 border-t-2 border-white z-40'>
          <div className='container flex justify-end'>
            <Link
              className='font-light text-base 2x:text-xl mr-12 uppercase tracking-widest flex align-center'
              href={'/creditos'}
            >
              <img className='w-7 2xl:w-9 mr-2' src='./img/boton-siguiente.svg' alt='botón siguiente' />{' '}
              <span>Créditos</span>
            </Link>
            <Link
              className='font-light text-base 2x:text-xl uppercase tracking-widest flex align-center'
              href={'/autores'}
            >
              <img className='w-7 2xl:w-9 mr-2' src='./img/boton-siguiente.svg' alt='botón siguiente' />{' '}
              <span>Autores</span>
            </Link>
          </div>
        </div>
      </div>
      {/*MENU INTERNO*/}
      <div className='w-full min-h-[100vh] flex flex-col align-center justify-center relative'>
        <div className='bg-black bg-opacity-70 py-4 text-center shadow-xl relative z-50'>
          <div className='container'>
            <h2 className='uppercase tracking-[0.18em] text-white'>
              <span className='border-r border-white font-medium pr-4 mr-4'>Bit a bit</span>{' '}
              <span className='font-light'>La evolución digital en la Universidad Nacional de Colombia</span>
            </h2>
          </div>
        </div>

        <div className='grow'>
          <div className='h-[680px] 2xl:h-[calc(100vh_-_56px)] flex items-center text-white'>
            <Link href={'/introduccion'} className='basis-full h-full bg-cover group'>
              <div className='flex flex-col h-full'>
                <div className='text-center py-28'>
                  <p className='text-9xl font-thin'></p>
                </div>
                <div className='grow border-y border-white font-light text-3xl flex justify-end'>
                  <div className='h-full tracking-wider w-64 2xl:w-80 px-16 transition-all group-hover:bg-white group-hover:bg-opacity-10'>
                    <span className='block border-l border-white h-16 mx-auto w-0' />
                    <span className='block rounded-full border border-white h-8 mx-auto w-8 flex items-center justify-center'>
                      <img src='./img/arrow-down.svg' alt='arrow down' className='w-4' />
                    </span>
                    <h2 className='mt-7 text-2xl 2xl:text-3xl'>Introducción</h2>
                  </div>
                </div>
                <div className='bg-blend-multiply text-center py-20 2xl:py-24'></div>
              </div>
            </Link>

            <Link
              href={'/ascendencias-digitales'}
              className='group z-20 relative basis-1/5 h-full shadow-capitulo block'
              style={{
                background: `linear-gradient(233.61deg, rgba(74, 70, 255, 0.2) 32.21%, rgba(44, 42, 153, 0) 91.49%), url('./img/capitulo1-portada.png') center / cover`,
              }}
            >
              <div className='flex flex-col h-full'>
                <div className='color-capitulo1 bg-blend-multiply text-center py-12 '>
                  <p className='text-9xl font-thin'>1</p>
                </div>
                <div className='grow border-y border-white grow font-light px-8 w-64 2xl:w-80 tracking-wider transition-all group-hover:bg-blue-base group-hover:bg-opacity-10'>
                  <span className='block border-l border-white h-16 mx-auto w-0' />
                  <span className='bg-blue-base block rounded-full border border-white h-8 mx-auto w-8 flex items-center justify-center'>
                    <img src='./img/arrow-down.svg' alt='arrow down' className='w-4' />
                  </span>
                  <h2 className='text-2xl 2xl:text-3xl mt-7'>Ascendencias digitales</h2>
                  <p className='font-extralight text-lg 2xl:text-xl mt-2'>
                    perspectivas globales
                    <br /> y el caso colombiano
                  </p>
                </div>
                <div className='color-capitulo1 bg-blend-multiply text-center py-20 2xl:py-24'></div>
              </div>
            </Link>

            <Link
              href={'/la-universidad-nacional-de-colombia-en-la-era-digital'}
              className='group z-10 relative basis-1/5 h-full bg-cover shadow-capitulo block'
              style={{
                background: `linear-gradient(233.61deg, rgba(74, 70, 255, 0.2) 32.21%, rgba(44, 42, 153, 0) 91.49%), url('./img/capitulo2-portada.png') center / cover`,
              }}
            >
              <div className='flex flex-col h-full'>
                <div className='color-capitulo2 bg-blend-multiply text-center py-12'>
                  <p className='text-9xl font-thin'>2</p>
                </div>
                <div className='grow border-y border-white grow font-light px-8 w-64 2xl:w-80 tracking-wider transition-all group-hover:bg-purple-base group-hover:bg-opacity-40'>
                  <span className='block border-l border-white h-16 mx-auto w-0' />
                  <span className='block bg-purple-base rounded-full border border-white h-8 mx-auto w-8 flex items-center justify-center'>
                    <img src='./img/arrow-down.svg' alt='arrow down' className='w-4' />
                  </span>
                  <h2 className='text-2xl 2xl:text-3xl mt-7'>La Universidad Nacional de Colombia en la era digital</h2>
                </div>
                <div className='color-capitulo2 bg-blend-multiply text-center py-20 2xl:py-24'></div>
              </div>
            </Link>

            <Link
              href={'/cultura-digital-unal'}
              className='group basis-1/5 h-full bg-cover block'
              style={{
                background: `linear-gradient(233.61deg, rgba(74, 70, 255, 0.2) 32.21%, rgba(44, 42, 153, 0) 91.49%), url('./img/capitulo3-portada.png')`,
              }}
            >
              <div className='flex flex-col h-full'>
                <div className='color-capitulo3 bg-blend-multiply text-center py-12'>
                  <p className='text-9xl font-thin'>3</p>
                </div>
                <div className='grow border-y border-white grow font-light px-8 w-64 2xl:w-80 tracking-wider transition-all group-hover:bg-green-light group-hover:bg-opacity-20'>
                  <span className='block border-l border-white h-16 mx-auto w-0' />
                  <span className='bg-green-light block rounded-full border border-white h-8 mx-auto w-8 flex items-center justify-center'>
                    <img src='./img/arrow-down.svg' alt='arrow down' className='w-4' />
                  </span>
                  <h2 className='text-2xl 2xl:text-3xl mt-7'>Cultura digital UNAL</h2>
                  <p className='font-extralight text-lg 2xl:text-xl mt-2'>
                    caminos a la
                    <br /> transformación digital
                  </p>
                </div>
                <div className='color-capitulo3 bg-blend-multiply text-center py-20 2xl:py-24'></div>
              </div>
            </Link>

            <Link className='basis-full h-full bg-cover group' href={'/epilogo'}>
              <div className='flex flex-col h-full'>
                <div className='text-center py-28'>
                  <p className='text-9xl font-thin'></p>
                </div>
                <div className='grow border-y border-white font-light'>
                  <div className='h-full tracking-wider w-64 2xl:w-80 pl-16 transition-all group-hover:bg-white group-hover:bg-opacity-10'>
                    <span className='block border-l border-white ml-4 h-16 w-0' />
                    <span className='block rounded-full border border-white h-8 w-8 flex items-center justify-center'>
                      <img src='./img/arrow-down.svg' alt='arrow down' className='w-4' />
                    </span>
                    <h2 className='text-2xl mt-7 2xl:text-3xl'>Epílogo</h2>
                    <p className='font-extralight text-lg 2xl:text-xl mt-7 2xl:mt-4'>
                      La transformación digital, <span className='2xl:block'>un proceso inacabado</span>
                    </p>
                  </div>
                </div>
                <div className='bg-blend-multiply text-center py-20 2xl:py-24'></div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
