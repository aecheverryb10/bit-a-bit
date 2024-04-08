import Capitulos from '@/data/capitulos';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const barraMenu = useRef();
  const purpleBar = useRef();
  const { asPath } = useRouter();

  const menuElement = useRef();
  const { height, width } = barraMenu.current?.getBoundingClientRect() ?? {};
  const currentChapter = Capitulos.find((item) => `/${item.url}` === asPath);

  const [currentTitle, setCurrentTitle] = useState({ text: currentChapter?.title, position: 0 });
  const [observers, setObservers] = useState([]);

  useEffect(() => {
    const getAllHeadlines = () => {
      const container = document.querySelector('.chapter');
      if (container) {
        const headlineTags = container.querySelectorAll('h1, h2, h3, h4, h5, h6');

        const observers = Array.from(headlineTags).map((headline, index) => {
          const observer = new IntersectionObserver(
            (entries) => {
              if (entries[0].isIntersecting) {
                setCurrentTitle({ text: entries[0].target.textContent, position: index });
              } else {
                if (!(entries[0].intersectionRect.top < window.innerHeight / 2)) {
                  setCurrentTitle({ text: headlineTags[index - 1]?.textContent, position: index - 1 });
                }
              }
            },
            {
              root: null,
              rootMargin: '-35px',
              threshold: 1.0,
            }
          );

          observer.observe(headline);
          return observer;
        });

        setObservers(observers);
      }
    };

    getAllHeadlines();
  }, [currentChapter]);

  useEffect(() => {
    return () => {
      observers.forEach((observer) => {
        observer.disconnect();
      });
    };
  }, [observers]);

  useGSAP(() => {
    const tl_caption = gsap.timeline({
      scrollTrigger: {
        trigger: '.chapter-title',
        start: 'bottom',
        // markers: true,
        toggleActions: 'play none none reverse',
      },
    });
    tl_caption.from(purpleBar.current, { y: '-103%', duration: 0.3 });
  }, []);

  return (
    <div
      className='fixed z-50 xl:pr-20 w-full'
      onMouseLeave={() => {
        setIsOpen(false);
      }}
    >
      <div className='bg-black text-white py-4 shadow-lg relative z-10' ref={barraMenu}>
        <div className='lg:container flex items-center px-9'>
          <button className='flex items-center' onMouseOver={() => setIsOpen(true)} onClick={() => setIsOpen(!isOpen)}>
            <span className='pr-4'>
              <span className='w-6 block border-t-2 border-white rounded-full' />
              <span className='w-6 block border-t-2 border-white rounded-full my-[6px] ml-1' />
              <span className='w-6 block border-t-2 border-white rounded-full' />
            </span>
            <span className='uppercase tracking-widest'>Menú</span>
          </button>
          <Link href='./'>
            <h2 className='uppercase tracking-[0.18em] text-white text-sm pl-24'>
              <span className='lg:border-r border-white font-medium pr-4 mr-4'>Bit a bit</span>{' '}
              <span className='font-light hidden lg:inline-block'>
                La evolución digital en la Universidad Nacional de Colombia
              </span>
            </h2>
          </Link>
        </div>
      </div>

      <div
        className='absolute transition-all duration-500 z-100 text-white'
        style={{
          top: `${isOpen ? height : `-${menuElement?.current?.getBoundingClientRect()?.height ?? 600}`}px`,
          width: `${width}px`,
        }}
      >
        <div
          className='bg-blue-dark bg-opacity-90 rounded-br-[24px] flex flex-col xl:flex-row border-t border-white max-h-[80vh] xl:max-h-none overflow-auto'
          ref={menuElement}
        >
          {Capitulos.filter((item) => !item.notIncludeInMenu)?.map((item, index) => {
            const { url, title, subtitle, initial } = item;
            const activeItem = asPath === `/${url}`;
            return (
              <Link
                key={`item-menu-${index}`}
                className={`${
                  initial ? 'text-2xl' : 'text-5xl '
                } d-block basis-1/5 text-left px-6 py-6 xl:pt-0 xl:pb-10 ${activeItem ? 'bg-black bg-opacity-80' : ''}`}
                href={url}
              >
                <div className='xl:mb-10 hidden xl:block'>
                  <span className='block ml-3 w-px h-28 border-r border-white' />
                  <span className='block ml-2 w-2 h-2 rounded-full bg-white relative z-10' />
                  <span
                    className={`block w-6 h-6 rounded-full border border-white -mt-4 ${
                      activeItem ? 'bg-purple-base' : ''
                    }`}
                  />
                </div>
                <div className='flex xl:flex-col'>
                  {initial ? title : index - 1}
                  {!initial && (
                    <p className='text-left text-xl font-extralight pl-5 xl:pl-0 xl:pt-4'>
                      {title}
                      <br />
                      {subtitle ?? ''}
                    </p>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
        <button
          className='font-extralight uppercase tracking-widest border-top pl-6 pr-16 py-4 bg-blue-dark bg-opacity-90 border-t border-white rounded-br-xl flex items-center'
          onClick={() => setIsOpen(false)}
        >
          <img src='./img/close-button.svg' alt='arrow down' className='w-4 mr-4' />
          Cerrar
        </button>
      </div>
      {!!currentChapter && (
        <div
          ref={purpleBar}
          className='bg-purple-base bg-opacity-70 text-white pt-3 pb-5  rounded-br-[15px] shadow-lg pl-8 lg:pl-48 xl:pl-80'
        >
          <p className='font-extralight text-xl'>
            {/* {currentChapter?.title} {currentChapter?.subtitle ?? ''} */}
            {currentTitle.text}
          </p>
        </div>
      )}
    </div>
  );
};

export default Menu;
