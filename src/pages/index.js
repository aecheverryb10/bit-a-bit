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
        className='w-full min-h-[100vh] flex flex-col align-center justify-center relative bg-blend-mode-lighten mix-blend-mode-lighten'
        style={{
          background: `linear-gradient(39.2deg, rgba(255, 118, 87, 0.2) -7.15%, rgba(0, 0, 0, 0.2) 68.29%), radial-gradient(77.64% 135.08% at 72.62% -5.14%, #326799 0%, rgba(78, 173, 215, 0.348804) 32.19%, rgba(161, 105, 250, 0.04) 100%)`,
        }}
      >
        <div className='grow flex flex-col align-center justify-center relative'>
          <div className='bg-blue-100 rounded-b-xl absolute right-32 top-0 px-8 py-7'>
            <img src={'./img/escudo-unal.svg'} alt={'Escudo universidad nacional'} />
          </div>

          <div className='container text-white px-20 min-h-[65vh] bg-blue-100 bg-opacity-40 bg-blend-multiply flex flex-col'>
            <div className='grow pt-14 mb-20'>
              <h1 className='font-medium text-8xl mb-3'>Bit a Bit</h1>
              <h2 className='font-light text-[1.8em] tracking-widest leading-snug'>
                La evolución digital en la
                <br /> Universidad Nacional de Colombia
              </h2>
            </div>
            <img src={'./img/escudo-unal.svg'} alt={'Escudo universidad nacional'} />
          </div>

          <div className='text-center text-white -mt-10'>
            <button className='text-center block mx-auto'>
              <img className='w-14 block mx-auto' src='./img/scroll-button.svg' />{' '}
              <span className='uppercase inline-block mt-4 text-lg tracking-wider opacity-80'>Scroll down</span>
            </button>
          </div>
        </div>
      </div>
      <div className='bg-black text-white py-5 border-t-2 border-white'>
        <div className='container flex justify-end'>
          <Link className='font-light text-xl mr-12 uppercase tracking-widest flex align-center' href={'/creditos'}>
            <img className='w-9 mr-2' src='./img/boton-siguiente.svg' alt='botón siguiente' /> <span>Créditos</span>
          </Link>
          <Link className='font-light text-xl uppercase tracking-widest flex align-center' href={'/autores'}>
            <img className='w-9 mr-2' src='./img/boton-siguiente.svg' alt='botón siguiente' /> <span>Autores</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
