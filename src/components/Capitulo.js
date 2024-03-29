import { useRef } from 'react';
import Menu from './Menu';

const Capitulo = (props) => {
  const {
    children,
    background = `radial-gradient(63.95% 32.77% at 13.12% 8.61%, #E9AAFF 0%, #00FFE0 100%)`,
    image = 'bg-capitulo1.png',
  } = props;

  const contenido = useRef();
  return (
    <>
      <Menu />
      <main className={`min-h-[100vh]`} style={{ background: background }}>
        <div className='w-full min-h-[100vh]'>
          <div
            className='fixed top-0 w-full h-[2900px] bg-cover z-0'
            style={{ backgroundImage: `url('./img/${image}')` }}
          ></div>
          <div className='relative z-10' ref={contenido}>
            {children}
          </div>
        </div>
      </main>
      <div
        className='fixed bottom-0 w-full h-40 z-20'
        style={{ background: `linear-gradient(180deg, rgba(209, 182, 253, 0) 13%, rgba(255, 255, 255, 0.37) 100%)` }}
      />
    </>
  );
};

export default Capitulo;
