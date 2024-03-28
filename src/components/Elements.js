const MainSection = (props) => {
  const { children } = props;
  return <section className='pl-52 max-w-[1440px] '>{children}</section>;
};

const ParrafoInicial = (props) => {
  const { children } = props;
  return (
    <MainSection>
      <div className='bg-grey-light bg-opacity-30 py-28 pl-40 pr-16 rounded-tl-[40px] 2xl:rounded-tr-[40px] shadow-xl'>
        <div className='max-w-[700px] text-white font-ancizar text-xl leading-relaxed'>{children}</div>
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

export { MainSection, ParrafoInicial, BloqueTexto };
