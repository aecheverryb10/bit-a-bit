import Capitulos from '@/data/capitulos';
import { useGSAP } from '@gsap/react';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useDispatch, useTrackedState } from '@/store';
import GeneralLink from './GeneralLink';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const barraMenu = useRef();
  const purpleBar = useRef();
  const { pathname } = useRouter();

  const dispatch = useDispatch();
  const state = useTrackedState();
  const { fontSize } = state;

  const menuElement = useRef();
  const submenuRef = useRef();
  const { height, width } = barraMenu.current?.getBoundingClientRect() ?? {};
  const currentChapter = Capitulos.find((item) => `/${item.url}` === pathname);
  const chapterIndex = Capitulos.findIndex((item) => `/${item.url}` === pathname);

  const [currentTitle, setCurrentTitle] = useState({ text: currentChapter?.title, position: 0 });
  const [submenu, setSubMenu] = useState([]);
  const [observers, setObservers] = useState([]);

  const replaceInnerHTML = (innerHTML) => innerHTML?.replace('<br/>', ' ').replace('block', '').replace('text-4xl', '');

  useEffect(() => {
    const getAllHeadlines = () => {
      const container = document.querySelector('.chapter');
      if (container) {
        let SUBMENU = [];
        const headlineTags = container.querySelectorAll('h1, h2, h3, h4, h5, h6');

        const observers = Array.from(headlineTags).map((headline, index) => {
          let content = replaceInnerHTML(headline.innerHTML);
          const tagname = headline.tagName;
          SUBMENU.push({
            element: headline,
            content: content,
            id: headline.id,
            key: headline.textContent.split(' ').join('-'),
          });

          const observer = new IntersectionObserver(
            (entries) => {
              if (entries[0].isIntersecting) {
                setCurrentTitle({ content: content, position: index });
              } else {
                if (!(entries[0].intersectionRect.top < window.innerHeight / 2)) {
                  setCurrentTitle({
                    content: replaceInnerHTML(headlineTags[index - 1]?.innerHTML),
                    position: index - 1,
                  });
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
        setSubMenu(SUBMENU);
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

    tl_caption.from(purpleBar.current, { y: '-103%', duration: 0.3 }, 0);
  }, []);

  const goToSection = (element, index) => {
    const height_purpleBar = purpleBar.current.offsetHeight;
    const offsetTop_section = element.offsetTop;

    index === 0 && setIsSubmenuOpen(false);
    window.scrollTo({ top: offsetTop_section - (height + height_purpleBar), behavior: 'smooth' });
  };

  const changeFontSize = (decrease) => {
    const htmlElement = document.getElementsByTagName('html')[0];
    let baseValue = fontSize;
    let createNewValue = () => {
      if (decrease) {
        let maxValue = 12;
        let newValue = baseValue - 1;
        return newValue > maxValue ? newValue : maxValue;
      } else {
        let maxValue = 22;
        let newValue = baseValue + 1;
        return newValue < maxValue ? newValue : maxValue;
      }
    };
    let newValue = createNewValue();
    dispatch({ type: 'MODIFY_STATE', property: 'fontSize', value: newValue });
    htmlElement.style.fontSize = `${newValue}px`;
  };

  const [menuHeight, setMenuHeight] = useState(600);
  useEffect(() => {
    setMenuHeight(menuElement?.current?.getBoundingClientRect()?.height ?? 600);
  }, [fontSize]);

  const [positionSubMenu, setPositionSubmenu] = useState(60);

  useEffect(() => {
    if (purpleBar.current) {
      setPositionSubmenu(purpleBar.current?.getBoundingClientRect()?.height);
    }
  }, [currentTitle]);

  return (
    <div
      className='fixed z-50 xl:pr-20 w-full'
      onMouseLeave={() => {
        setIsOpen(false);
      }}
    >
      <div className='bg-black text-white py-4 shadow-lg relative z-50' ref={barraMenu}>
        <div className='lg:container flex items-center px-9'>
          <button className='flex items-center' onMouseOver={() => setIsOpen(true)} onClick={() => setIsOpen(!isOpen)}>
            <span className='pr-4'>
              <span className='w-6 block border-t-2 border-white rounded-full' />
              <span className='w-6 block border-t-2 border-white rounded-full my-[6px] ml-1' />
              <span className='w-6 block border-t-2 border-white rounded-full' />
            </span>
            <span className='uppercase tracking-widest'>Menú</span>
          </button>
          <GeneralLink href='/'>
            <h2 className='uppercase tracking-[0.18em] text-white text-sm pl-24'>
              <span className='lg:border-r hidden md:inline-block border-white font-medium pr-4 mr-4'>Bit a bit</span>{' '}
              <span className='font-light hidden lg:inline-block'>
                La evolución digital en la Universidad Nacional de Colombia
              </span>
            </h2>
          </GeneralLink>
        </div>
        <div className='absolute right-8 top-3 flex items-center'>
          <button
            onClick={() => changeFontSize()}
            className='w-5 h-5 flex items-center justify-center text-2xl text-white font-ancizar font-bold'
          >
            <span>+</span>
          </button>
          <button className='text-2xl text-white font-ancizar font-bold mx-2'>A</button>
          <button
            onClick={() => changeFontSize(true)}
            className='w-5 h-5 flex items-center justify-center text-2xl text-white font-ancizar font-bold'
          >
            <span>-</span>
          </button>
        </div>
      </div>

      <div
        className='absolute transition-all duration-500 z-40 text-white'
        style={{
          top: `${isOpen ? height : `-${menuHeight}`}px`,
          width: `${width}px`,
        }}
      >
        <div
          className='bg-blue-dark rounded-br-[24px] border-t border-white max-h-[80vh] xl:max-h-none overflow-auto'
          ref={menuElement}
        >
          <div className='flex flex-col xl:flex-row'>
            <GeneralLink
              className={` md:hidden text-2xl d-block basis-1/5 text-left px-6 py-6 xl:pt-0 xl:pb-10 transition hover:bg-black hover:bg-opacity-80`}
              href={'/'}
            >
              <div className='flex xl:flex-col'>Inicio</div>
            </GeneralLink>
            {Capitulos.filter((item) => !item.notIncludeInMenu)?.map((item, index) => {
              const { url, title, subtitle, initial } = item;
              const activeItem = pathname === `/${url}`;
              return (
                <GeneralLink
                  key={`item-menu-${index}`}
                  className={`${
                    initial ? 'text-2xl' : 'text-5xl '
                  } d-block basis-1/5 text-left px-6 py-6 xl:pt-0 xl:pb-10 transition hover:bg-black hover:bg-opacity-80 ${
                    activeItem ? 'bg-black bg-opacity-80' : ''
                  }`}
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
                </GeneralLink>
              );
            })}
          </div>
          <div className='bg-black text-white border-t-2 border-white z-40'>
            <div className='container flex justify-end'>
              <GeneralLink
                className='font-light text-base 2x:text-xl px-3 lg:px-5 uppercase tracking-widest flex align-center hover:bg-white hover:bg-opacity-20 transition py-5 lg:py-3 2xl:pt-4 2xl:pb-3'
                href={'./creditos'}
              >
                <img
                  className='w-7 2xl:w-9 mr-2 mt-[2px] 2xl:-mt-[2px]'
                  src='./img/boton-siguiente.svg'
                  alt='botón siguiente'
                />{' '}
                <span>Créditos</span>
              </GeneralLink>
              <GeneralLink
                className='font-light text-base 2x:text-xl px-3 lg:px-5  uppercase tracking-widest flex align-center hover:bg-white hover:bg-opacity-20 transition py-5 lg:py-3 2xl:pt-4 2xl:pb-3'
                href={'./referencias'}
              >
                <img
                  className='w-7 2xl:w-9 mr-2 mt-[2px] 2xl:-mt-[2px]'
                  src='./img/boton-siguiente.svg'
                  alt='botón siguiente'
                />{' '}
                <span>Referencias</span>
              </GeneralLink>
            </div>
          </div>
        </div>
      </div>
      {!!currentChapter && (
        <>
          {isSubmenuOpen && (
            <div className={`absolute h-screen w-screen cursor-pointer`} onClick={() => setIsSubmenuOpen(false)} />
          )}
          <div
            ref={purpleBar}
            className='relative z-10  bg-purple-base bg-opacity-70 text-white pt-3 pb-5  rounded-br-[15px] shadow-lg'
          >
            <div className='lg:container px-9 flex items-center gap-6'>
              {!currentChapter?.initial && (
                <button
                  className='uppercase tracking-widest block lg:border-r border-white lg:pr-6'
                  onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
                >
                  <div className='flex items-center'>
                    <span className='lg:pr-4'>
                      <span className='w-6 block border-t-2 border-white rounded-full' />
                      <span className='w-6 block border-t-2 border-white rounded-full my-[6px]' />
                      <span className='w-6 block border-t-2 border-white rounded-full' />
                    </span>
                    <span className='hidden lg:inline-block'>Índice</span>
                  </div>
                </button>
              )}
              <p className='font-extralight text-xl' dangerouslySetInnerHTML={{ __html: currentTitle.content }} />
            </div>
            <div
              className={`absolute w-full z-40 max-w-[640px] transition-all duration-700  text-white max-h-[70vh] xl:max-h-none overflow-auto ${
                isSubmenuOpen ? 'left-0 ' : '-left-full overflow-hidden'
              }`}
              style={{ top: `${positionSubMenu}px` }}
              ref={submenuRef}
            >
              <div className='w-full h-auto bg-blue-dark bg-opacity-80  rounded-br-2xl pt-4  shadow-xl'>
                <div className='pl-8 lg:pl-16 2xl:pl-40 pt-5 pb-8 pr-5'>
                  <p className='text-3xl'>Capítulo {chapterIndex - 1}</p>
                  <p className='font-light text-xl'>
                    {currentChapter?.title}
                    {currentChapter?.subtitle && <span>{currentChapter?.subtitle}</span>}
                  </p>
                </div>
                {submenu
                  ?.filter((el) => !el?.element?.classList.contains('chapter-title'))
                  ?.map((option, index) => {
                    return (
                      <button
                        className={`${
                          option.element.tagName === 'H2'
                            ? 'bg-purple-base bg-opacity-60 pl-8 pl-16 2xl:pl-40'
                            : 'pl-12 lg:pl-24 2xl:pl-48'
                        } border-b border-opacity-20 border-white transition font-light block w-full text-left py-2 text-lg hover:bg-white hover:text-purple-base pr-5`}
                        onClick={() => goToSection(option.element, index)}
                        key={option.key}
                        dangerouslySetInnerHTML={{ __html: option.content }}
                      />
                    );
                  })}
                <button
                  className='pl-16 2xl:pl-40 w-full font-light uppercase tracking-widest py-4 bg-blue-dark bg-opacity-90 flex items-center block rounded-br-2xl mt-4 text-sm'
                  onClick={() => setIsSubmenuOpen(false)}
                >
                  <img src='./img/arrow-left.svg' className='inline-block -ml-8 mr-3 w-4 h-4 align-middle mt-0' />
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Menu;
