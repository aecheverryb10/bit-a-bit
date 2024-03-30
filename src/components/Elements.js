const MainSection = (props) => {
  const { children } = props;
  return <section className='pl-52 max-w-[1440px] '>{children}</section>;
};

const ParrafoInicial = (props) => {
  const { children } = props;
  return (
    <MainSection>
      <div className='bg-grey-light bg-opacity-30 pl-40 pt-20 pb-28 rounded-tl-[40px] 2xl:rounded-tr-[40px] shadow-xl'>
        <div className='relative flex items-center mb-16 '>
          <div
            className='w-16 h-16 rounded-full left-[-30px] absolute'
            style={{ background: `radial-gradient(50% 50% at 50% 50%, #02EBB6 0%, rgba(8, 28, 89, 0) 100%)` }}
          />
          <div className='flex items-center relative z-10 w-full'>
            <span className='w-1 h-1 rounded-full bg-white' />
            <div className='border-white border-t grow w-full' />
          </div>
          <div className='absolute right-40 top-1'>
            <span className={`block h-64 border-r border-white mr-3`}></span>
            <span className='w-6 h-6 rounded-full bg-green-light border block' />
            <span className='w-2 h-2 rounded-full bg-white block -mt-4 ml-2' />
          </div>
        </div>
        <div className='pr-16'>
          <div className='max-w-[700px] text-white font-ancizar text-xl leading-relaxed'>{children}</div>
        </div>
      </div>
    </MainSection>
  );
};

const BloqueTexto = (props) => {
  const { children } = props;
  return (
    <MainSection>
      <div className='bg-white bg-opacity-70 shadow-xl'>
        <div className='pl-40 pr-16 pt-16 pb-28'>
          <div className='max-w-[700px] main-content text-lg font-serif leading-relaxed'>{children}</div>
        </div>
      </div>
    </MainSection>
  );
};

const TituloCapitulo = (props) => {
  const { children } = props;
  return (
    <section>
      <div className='text-white pt-24 pb-40 '>
        <div className='flex justify-end mb-8'>
          <div className='flex w-[70%] items-center'>
            <span className='w-6 h-6 rounded-full bg-green-light border block -mr-4' />
            <span className='w-2 h-2 rounded-full bg-white block ' />
            <span className={`block w-full border-t border-white`}></span>
          </div>
        </div>

        <div className='mb-12'>
          <div className='flex w-[20%] items-center'>
            <span className={`block w-full border-t border-white`}></span>
            <span className='w-6 h-6 rounded-full border-white border block -mr-4' />
            <span className='w-2 h-2 rounded-full bg-white block ' />
          </div>
        </div>

        <div className='flex w-[80%] items-center -mb-3'>
          <span className={`block w-full border-t border-white`}></span>
          <span className='w-6 h-6 rounded-full bg-green-light border block -mr-4' />
          <span className='w-2 h-2 rounded-full block bg-white' />
        </div>

        <div className='container pl-36'>{children}</div>

        <div className='flex justify-end mb-20'>
          <div
            className='h-[1px] w-[76%] -mt-[1px]'
            style={{ background: `linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.2) 100%)` }}
          />
        </div>

        <div className='flex justify-between'>
          <div className='flex w-[60%] items-center -mb-3'>
            <span className={`block w-full border-t border-white`}></span>
            <span className='w-2 h-2 rounded-full block bg-white' />
          </div>

          <div className='flex w-[20%] items-center'>
            <span className='w-6 h-6 rounded-full bg-green-light border block -mr-4' />
            <span className={`block w-full border-t border-white`}></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export { MainSection, ParrafoInicial, BloqueTexto, TituloCapitulo };
