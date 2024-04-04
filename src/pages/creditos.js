const { default: Capitulo } = require('@/components/Capitulo');
const { MainSection } = require('@/components/Elements');

const Creditos = () => {
  return (
    <Capitulo background={`radial-gradient(63.95% 32.77% at 13.12% 8.61%, #78BEFF 0%, #326799 100%)`}>
      <MainSection>
        <div className={`bg-white bg-opacity-30 shadow-xl pt-40 pb-20 relative`}>
          <img className='absolute right-0 top-0' src={'./img/creditos-lineas.svg'} />
          <div className={`pl-40 pr-16 `}>
            <div className='max-w-[700px] text-white text-lg font-serif leading-relaxed '>
              <h3 className='text-6xl font-light text-white font-sans'>Créditos</h3>

              <div className='font-ancizar max-w-[400px]'>
                <div className='py-5'>
                  <p>© Universidad Nacional de Colombia</p>
                  <p>© Editorial Universidad Nacional de Colombia</p>
                  <p>© Dirección Nacional de Estrategia digital DNED</p>
                  <p>© División Universidad Laboratorio UNALab</p>
                  <p>© Liz Karen Herrera Quintero, Jacobo Zuluaga Forero y Paula Carolina Uribe Polo</p>
                </div>
                <div className='py-5'>
                   <p className='font-bold'>Editorial Universidad Nacional de Colombia</p>
                  <p>Alberto Amaya Calderón Director</p>
                </div>
                <div className='py-5'>
                  <p className='font-bold'>Comité editorial</p>
                  <p>Alberto Amaya Calderón</p>
                  <p>Ana Patricia Noguera de Echeverry </p>
                  <p>Fabio Andrés Pavas Martínez </p>
                  <p>Veronique Claudine Bellanger </p>
                  <p>Fredy Fernando Chaparro Sanabria </p>
                  <p>Jairo Iván Peña Ayazo</p>
                  <p>Pedro Nel Benjumea Hernández</p>
                </div>
                <div className='py-5'>
                  <p className='font-bold'>Dirección y coordinación del proyecto</p> <p>Liz Karen Herrera Quintero</p>
                </div>

                <div className='py-5'>
                  <p className='font-bold'>Investigación histórica y redacción</p>
                  <p>Jacobo Zuluaga Forero Adaptación</p>
                </div>

                <div className='py-5'>
                  <p className='font-bold'>Edición y redacción</p>
                  <p> Paula Carolina Uribe Polo</p>
                </div>

                <div className='py-5'>
                  <p className='font-bold'>Coordinación editorial</p>
                  <p>Valentina Martin R. </p>
                </div>

                <div className='py-5'>
                  <p className='font-bold'>Corrección de estilo</p>
                  <p> Omar Andrés Portilla Melo </p>
                </div>

                <div className='py-5'>
                  <p className='font-bold'>Diseño y maquetación</p>
                  <p> Andrés Echeverry</p>
                  <p> Santiago Mojica</p>
                  <p> Vanessa Suárez</p>
                </div>

                <div className='py-5'>
                  <p className='font-bold'>Producción Multimedia </p>

                  <p className='italic'>Investigación, presentación, supervisión y diseño de entrevistas</p>
                  <p>Paula Carolina Uribe Polo </p>
                </div>

                <div className='py-5'>
                  <p className='italic'>Diseño gráfico</p>
                  <p>Laboratorio de innovación, creatividad y nuevas tecnologías LAB101 Unal</p>
                </div>

                <div className='py-5'>
                  <p className='italic'>Grabación y edición de video</p>
                  <p>Laboratorio de innovación, creatividad y nuevas tecnologías LAB101 Unal</p>
                </div>
                <div className='py-5'>
                  <p className='italic'>Producción sonora (podcast)</p>

                  <p>Laboratorio de innovación, creatividad y nuevas tecnologías LAB101 Unal y Podcast Radio Unal </p>

                  <div className='py-5'>
                    <p className='italic'>Fotografías</p>

                    <p>
                      Archivo Fotográfico de Unimedios y Laboratorio de innovación, creatividad y nuevas tecnologías
                      LAB101 Unal{' '}
                    </p>
                  </div>
                  <div className='py-5'>
                    <p className='italic'>
                      Agradecimientos Johan Sebastián Eslava Garzón, José Alfonso Sánchez, Jose Ismael Peña, Jeimi
                      Villamizar (Unimedios) y Nicol Torres (Unimedios).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainSection>
    </Capitulo>
  );
};

export default Creditos;
