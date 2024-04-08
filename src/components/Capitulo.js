import { useRef } from 'react';
import Menu from './Menu';
import { MainSection } from './Elements';
import { useRouter } from 'next/router';
import Capitulos from '@/data/capitulos';
import Link from 'next/link';

const Capitulo = (props) => {
  const { asPath } = useRouter();
  const currentChapterPosition = Capitulos.findIndex((item) => `/${item?.url}` === asPath);
  const currentChapter = Capitulos[currentChapterPosition];
  const prevChapter = Capitulos[currentChapterPosition - 1];
  const nextChapter = Capitulos[currentChapterPosition + 1];
  const defaultBackground = `radial-gradient(63.95% 32.77% at 13.12% 8.61%, #E9AAFF 0%, #00FFE0 100%)`;

  const { children, image = 'bg-capitulo1.png', background } = props;

  const contenido = useRef();
  return (
    <>
      <Menu />
      <main
        className={`min-h-[100vh] bg-blend-multiply chapter`}
        style={{ background: currentChapter?.background ?? background ?? defaultBackground }}
      >
        <div className='w-full min-h-[100vh]'>
          <div
            className='fixed top-0 w-full h-[2900px] bg-cover z-0 mix-blend-multiply'
            style={{ backgroundImage: `url('./img/${image}')` }}
          ></div>
          <div className='relative z-10' ref={contenido}>
            {children}
            {currentChapter && (
              <MainSection>
                <div className='bg-white bg-opacity-70 shadow-xl'>
                  <div className='flex flex-col lg:flex-row'>
                    {prevChapter && (
                      <Link
                        href={prevChapter?.url}
                        className={`text-white grow relative block overflow-hidden ${
                          nextChapter ? 'border-b-4 lg:border-b-0 lg:border-r-4 border-white' : ''
                        }`}
                      >
                        <div className='absolute bg-blue-dark w-full h-full' />
                        <img
                          className='top-0 left-0 absolute w-full h-auto opacity-20'
                          src={prevChapter?.img}
                          alt='textura'
                        />
                        <div className='px-8 mx-auto w-96 relative z-50 pt-20 pb-28 '>
                          <p className='font-light text-xl mb-2'>Capitulo anterior</p>
                          <p className='font-light text-4xl'>{prevChapter?.title}</p>
                          {prevChapter?.subtitle && <p className='font-extralight text-2xl'>{prevChapter?.subtitle}</p>}
                        </div>
                      </Link>
                    )}
                    {nextChapter && (
                      <Link href={nextChapter?.url} className=' text-white grow relative block overflow-hidden'>
                        <div className='absolute bg-blue-dark w-full h-full' />
                        <img
                          className='top-0 left-0 absolute w-full h-auto opacity-20'
                          src={nextChapter?.img}
                          alt='textura'
                        />
                        <div className='px-8 mx-auto w-96 relative z-50 pt-20 pb-28 '>
                          <p className='font-light text-xl mb-2'>Siguiente capítulo</p>
                          <p className='font-light text-4xl'>{nextChapter?.title}</p>
                          {nextChapter?.subtitle && <p className='font-extralight text-2xl'>{nextChapter?.subtitle}</p>}
                        </div>
                      </Link>
                    )}
                  </div>
                </div>
              </MainSection>
            )}
          </div>
        </div>
      </main>
      <div
        className='pointer-events-none fixed bottom-0 w-full h-40 z-20'
        style={{ background: `linear-gradient(180deg, rgba(209, 182, 253, 0) 53%, rgba(255, 255, 255, 0.37) 100%)` }}
      />
    </>
  );
};

export default Capitulo;
