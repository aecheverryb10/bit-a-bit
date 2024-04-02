import Capitulos from '@/data/capitulos';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const barraMenu = useRef();
  const { asPath } = useRouter();

  const { height, width } = barraMenu.current?.getBoundingClientRect() ?? {};
  const currentChapter = Capitulos.find((item) => `/${item.url}` === asPath);

  return (
    <div className='fixed z-50 xl:pr-20 w-full'>
      <div className='bg-black text-white py-4 shadow-lg relative z-10' ref={barraMenu}>
        <div className='container flex items-center px-9'>
          <button className='flex items-center' onClick={() => setIsOpen(!isOpen)}>
            <span className='pr-4'>
              <span className='w-6 block border-t-2 border-white rounded-full' />
              <span className='w-6 block border-t-2 border-white rounded-full my-[6px] ml-1' />
              <span className='w-6 block border-t-2 border-white rounded-full' />
            </span>
            <span className='uppercase tracking-widest'>Menú</span>
          </button>
          <Link href='./'>
            <h2 className='uppercase tracking-[0.18em] text-white text-sm pl-24'>
              <span className='border-r border-white font-medium pr-4 mr-4'>Bit a bit</span>{' '}
              <span className='font-light'>La evolución digital en la Universidad Nacional de Colombia</span>
            </h2>
          </Link>
        </div>
      </div>

      <div
        className='absolute transition-all duration-500 z-100 text-white'
        style={{ top: `${isOpen ? height : -414}px`, width: `${width}px` }}
      >
        <div className='bg-blue-dark bg-opacity-90 rounded-br-[24px] flex border-t border-white'>
          {Capitulos.map((item, index) => {
            const { url, title, subtitle } = item;
            const capitulosIniciales = index === 0 || index === 4;
            const activeItem = asPath === `/${url}`;
            return (
              <Link
                key={`item-menu-${index}`}
                className={`${capitulosIniciales ? 'text-2xl' : 'text-5xl '} d-block basis-1/5 text-left px-6 pb-10 ${
                  activeItem ? 'bg-black bg-opacity-80' : ''
                }`}
                href={url}
              >
                <div className='mb-10'>
                  <span className='block ml-3 w-px h-28 border-r border-white' />
                  <span className='block ml-2 w-2 h-2 rounded-full bg-white relative z-10' />
                  <span
                    className={`block w-6 h-6 rounded-full border border-white -mt-4 ${
                      activeItem ? 'bg-purple-base' : ''
                    }`}
                  />
                </div>
                {capitulosIniciales ? title : index}
                {!capitulosIniciales && (
                  <p className='text-left text-xl font-extralight pt-4'>
                    {title}
                    <br />
                    {subtitle ?? ''}
                  </p>
                )}
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
        <div className='bg-purple-base bg-opacity-70 text-white pt-3 pb-5  rounded-br-[15px] shadow-lg lg:pl-80'>
          <p className='font-extralight text-xl'>
            {currentChapter?.title} {currentChapter?.subtitle ?? ''}
          </p>
        </div>
      )}
    </div>
  );
};

export default Menu;
