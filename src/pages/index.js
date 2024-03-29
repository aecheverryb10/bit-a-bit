import Link from 'next/link';
/* Rectangle 78 */

export default function Home() {
  return (
    <main className={`min-h-[100vh] bg-cover`} style={{ backgroundImage: `url('./img/cubierta.png')` }}>
      {/* <div className='w-full min-h-[100vh] flex flex-col align-center justify-center relative'>
        <div className='bg-black bg-opacity-70 py-4 text-center'>
          <div className='container'>
            <h2 className='uppercase tracking-[0.18em] text-white'>
              <span className='border-r border-white font-medium pr-4 mr-4'>Bit a bit</span>{' '}
              <span className='font-light'>La evolución digital en la Universidad Nacional de Colombia</span>
            </h2>
          </div>
        </div>

        <div className='grow'>
          <div className='h-[775px] flex items-center flex-grow text-white'>
            <div className='basis-full h-full bg-cover'>
              <div className='flex flex-col h-full'>
                <div className='text-center py-28'>
                  <p className='text-9xl font-thin'></p>
                </div>
                <div className='grow border-y border-white grow font-light text-3xl flex justify-end'>
                  <div className=''>
                    <span className='block border-l border-white h-16 mx-auto w-0' />
                    <span className='block rounded-full border border-white h-8 mx-auto w-8 flex items-center justify-center'>
                      <img src='./img/arrow-down.svg' alt='arrow down' className='w-4' />
                    </span>
                    <h2 className='mt-7'>Introducción</h2>
                  </div>
                </div>
                <div className='bg-blend-multiply text-center py-24'></div>
              </div>
            </div>

            <div
              className='z-20 relative basis-1/5 h-full shadow-capitulo'
              style={{
                background: `linear-gradient(233.61deg, rgba(74, 70, 255, 0.2) 32.21%, rgba(44, 42, 153, 0) 91.49%), url('./img/capitulo1-portada.png') center / cover`,
              }}
            >
              <div className='flex flex-col h-full'>
                <div className='color-capitulo1 bg-blend-multiply text-center py-12'>
                  <p className='text-9xl font-thin'>1</p>
                </div>
                <div className='grow border-y border-white grow font-light'>
                  <span className='block border-l border-white h-16 mx-auto w-0' />
                  <span className='bg-blue-base block rounded-full border border-white h-8 mx-auto w-8 flex items-center justify-center'>
                    <img src='./img/arrow-down.svg' alt='arrow down' className='w-4' />
                  </span>
                  <h2 className='text-3xl mt-7'>Ascendencias digitales</h2>
                  <p className='font-extralight text-2xl'>
                    perspectivas globales
                    <br /> y el caso colombiano
                  </p>
                </div>
                <div className='color-capitulo1 bg-blend-multiply text-center py-24'></div>
              </div>
            </div>

            <div
              className='z-10 relative basis-1/5 h-full bg-cover shadow-capitulo'
              style={{
                background: `linear-gradient(233.61deg, rgba(74, 70, 255, 0.2) 32.21%, rgba(44, 42, 153, 0) 91.49%), url('./img/capitulo2-portada.png') center / cover`,
              }}
            >
              <div className='flex flex-col h-full'>
                <div className='color-capitulo2 bg-blend-multiply text-center py-12'>
                  <p className='text-9xl font-thin'>2</p>
                </div>
                <div className='grow border-y border-white grow font-light'>
                  <span className='block border-l border-white h-16 mx-auto w-0' />
                  <span className='block bg-purple-base rounded-full border border-white h-8 mx-auto w-8 flex items-center justify-center'>
                    <img src='./img/arrow-down.svg' alt='arrow down' className='w-4' />
                  </span>
                  <h2 className='text-3xl mt-7'>La Universidad Nacional de Colombia en la era digital</h2>
                </div>
                <div className='color-capitulo2 bg-blend-multiply text-center py-24'></div>
              </div>
            </div>

            <div
              className='basis-1/5 h-full bg-cover'
              style={{
                background: `linear-gradient(233.61deg, rgba(74, 70, 255, 0.2) 32.21%, rgba(44, 42, 153, 0) 91.49%), url('./img/capitulo3-portada.png')`,
              }}
            >
              <div className='flex flex-col h-full'>
                <div className='color-capitulo3 bg-blend-multiply text-center py-12'>
                  <p className='text-9xl font-thin'>3</p>
                </div>
                <div className='grow border-y border-white grow font-light'>
                  <span className='block border-l border-white h-16 mx-auto w-0' />
                  <span className='bg-green-light block rounded-full border border-white h-8 mx-auto w-8 flex items-center justify-center'>
                    <img src='./img/arrow-down.svg' alt='arrow down' className='w-4' />
                  </span>
                  <h2 className='text-3xl mt-7'>Cultura digital UNAL</h2>
                  <p className='font-extralight text-2xl w-56'>
                    caminos a la
                    <br /> transformación digital
                  </p>
                </div>
                <div className='color-capitulo3 bg-blend-multiply text-center py-24'></div>
              </div>
            </div>

            <div className='basis-full h-full bg-cover'>
              <div className='flex flex-col h-full'>
                <div className='text-center py-28'>
                  <p className='text-9xl font-thin'></p>
                </div>
                <div className='grow border-y border-white grow font-light'>
                  <span className='block border-l border-white h-16 mx-auto w-0' />
                  <span className='block rounded-full border border-white h-8 mx-auto w-8 flex items-center justify-center'>
                    <img src='./img/arrow-down.svg' alt='arrow down' className='w-4' />
                  </span>
                  <h2 className='text-3xl mt-7'>Epílogo</h2>
                  <p className='font-extralight text-2xl'>
                    La transformación digital,
                    <br /> un proceso inacabado
                  </p>
                </div>
                <div className='bg-blend-multiply text-center py-24'></div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div
        className='w-full min-h-[100vh] flex flex-col align-center justify-center relative bg-blend-mode-lighten mix-blend-mode-lighten relative'
        style={{
          background: `linear-gradient(39.2deg, rgba(255, 118, 87, 0.2) -7.15%, rgba(0, 0, 0, 0.2) 68.29%), radial-gradient(77.64% 135.08% at 72.62% -5.14%, #326799 0%, rgba(78, 173, 215, 0.348804) 32.19%, rgba(161, 105, 250, 0.04) 100%)`,
        }}
      >
        <div className='absolute w-full h-[calc(100%_-_54px)] 2xl:h-[calc(100%_-_78px)] top-0'>
          <div className='absolute w-full pl-28'>
            <div className='h-8 border-r border-white w-px' />
            <div className='flex w-[8%] items-center -mt-[12px]'>
              <span className={`block w-full border-t border-white`}></span>
              <span className='w-6 h-6 rounded-full border-white border block -mr-[14px]' />
              <span className='w-2 h-2 rounded-full bg-white block ' />
            </div>
          </div>

          <div className='absolute flex w-[15%] items-center bottom-[25%]'>
            <span className={`block w-full border-t border-white`}></span>
            <span className='w-6 h-6 rounded-full border-white border block -mr-[15px]' />
            <span className='w-2 h-2 rounded-full bg-white block ' />
          </div>

          <div className='absolute flex w-[8%] items-center bottom-[8%]'>
            <span className={`block w-full border-t border-white`}></span>
            <span className='w-6 h-6 rounded-full border-white border block -mr-[14px]' />
            <span className='w-2 h-2 rounded-full bg-white block ' />
          </div>

          <div className='absolute h-[7.8em] right-[35%] w-px border-l border-white' />
          <div className='absolute flex w-[10%] items-center right-[35%] top-28'>
            <span className='w-6 h-6 rounded-full border-white border block -mr-[14px] bg-blue-100' />
            <span className='w-2 h-2 rounded-full bg-white block ' />
            <span className={`block w-full border-t border-white `}></span>
          </div>

          <div className='absolute flex w-[50%] items-center right-[0%] top-48'>
            <span className='w-6 h-6 rounded-full border-white border block -mr-4 bg-blue-100' />
            <span className='w-2 h-2 rounded-full bg-white block ' />
            <span className={`block w-full border-t border-white `}></span>
          </div>

          <div className='absolute flex w-[25%] items-center right-[0%] top-80'>
            <span className='w-6 h-6 rounded-full border-white border block -mr-[15px] bg-blue-100' />
            <span className='w-2 h-2 rounded-full bg-white block ' />
            <span className={`block w-full border-t border-white `}></span>
          </div>

          <div className='absolute w-full bottom-0 pr-[20%] flex justify-end items-start'>
            <div className='flex w-[10%] items-center -mt-[12px]'>
              <span className='w-6 h-6 rounded-full border-white border block -mr-[14px]' />
              <span className='w-2 h-2 rounded-full bg-white block ' />
              <span className={`block w-full border-t border-white`}></span>
            </div>
            <div className='h-16 border-r border-white w-px' />
          </div>
        </div>

        <div className='grow flex flex-col align-center justify-center relative z-50'>
          <div className='bg-blue-100 rounded-b-xl absolute right-32 top-0 px-8 py-7'>
            <img src={'./img/escudo-unal.svg'} alt={'Escudo universidad nacional'} />
          </div>

          <div className='container text-white px-20 2xl:px-36 2xl:min-h-[70vh] bg-blue-100 bg-opacity-40 bg-blend-multiply flex flex-col'>
            <div className='grow pt-14 2xl:pt-28'>
              <h1 className='font-medium text-[5em] leading-none 2xl:text-8xl mb-3'>Bit a Bit</h1>
              <h2 className='font-light text-[1.65em] 2xl:text-3xl tracking-widest leading-snug'>
                La evolución digital en la
                <br /> Universidad Nacional de Colombia
              </h2>
              <div className='flex mt-10 pb-12'>
                <img className='w-28' src={'./img/escudo-dned.svg'} alt={'Escudo DNED'} />
                <div className='ml-7 pl-7 mr-4 border-l border-white py-4 '>
                  <img className='w-24' src={'./img/escudo-unalab.svg'} alt={'Escudo Unalab'} />
                </div>
              </div>
            </div>
          </div>

          <div className='text-center text-white -mt-10'>
            <button className='text-center block mx-auto'>
              <img className='w-14 block mx-auto' src='./img/scroll-button.svg' />{' '}
              <span className='inline-block mt-2 text-base font-light tracking-wider opacity-80'>
                scroll para empezar
              </span>
            </button>
          </div>
        </div>
        <div className='bg-black text-white py-3 2xl:py-5 border-t-2 border-white'>
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
    </main>
  );
}
