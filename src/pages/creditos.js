const { default: Capitulo } = require('@/components/Capitulo');
const { MainSection } = require('@/components/Elements');

const Creditos = () => {
  return (
    <Capitulo background={`radial-gradient(63.95% 32.77% at 13.12% 8.61%, #78BEFF 0%, #326799 100%)`}>
      <MainSection>
        <div className={`bg-white bg-opacity-30 pt-40 pb-20 relative`}>
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
                  <p>Jacobo Zuluaga Forero</p>
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
                  <p className='font-bold'>Producción multimedia </p>

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
                      Agradecimientos:
                    </p>
                    <p className='italic'>
                      Johan Sebastián Eslava Garzón, José Alfonso Sánchez, José Ismael Peña, Jeimi
                      Villamizar (Unimedios)
                    </p>
                    <p className='italic'>Y Nicol Torres (Unimedios).</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`bg-white bg-opacity-30 shadow-xl px-40 pb-20`}>
          <div className='bord border border-white text-white p-10 font-ancizar'>
            <div className='pb-5'>
              <p>
                Catalogación en la publicación Universidad Nacional de Colombia
              </p>
            </div>

            <div className='py-5'>
              <p className='indent-8'>
                Herrera Quintero, Liz Karen, 1977-
              </p>
              <p>
                Bit a bit: la evolución digital en la Universidad Nacional de Colombia / Liz Karen Herrera Quintero, Jacobo Zuluaga
                Forero y Paula Carolina Uribe Polo, autores. -- Primera edición. -- Bogotá: Universidad Nacional de Colombia.
                Vicerrectoria de Investigación. Editorial Universidad Nacional de Colombia: Universidad Nacional de Colombia.
                Dirección Nacional de Estrategia Digital (DNED). División Universidad Laboratorio UNALab, 2024
              </p>
              <p>
                1 recurso en línea (HTML): ilustraciones (principalmente a color), diagramas, fotografías, facsímiles, podcast,
                vídeos.
              </p>
            </div>

            <div className='py-5'>
              <p>
                Incluye referencias bibliográficas
              </p>
              <p className='indent-8'>
                ISBN 978-958-505-595-7 (digital)
              </p>
            </div>

            <div className='pt-5'>
              <p>
                1. Universidad Nacional de Colombia. Dirección Nacional de Estrategia Digital (DNED). División Universidad
                Laboratorio UNALab -- Investigaciones 2. Educación superior -- Innovaciones tecnológicas -- Colombia 3.
                Transformación digital -- Historia 4. Tecnología educativa -- Colombia 5. Digitalización de la información 6.
                Cultura digital 7. Tecnologías de la información y la comunicación I. Zuluaga Forero, Jacobo, 1997-, autor II. Uribe
                Polo, Paula Carolina, 1992-, autor III. Título
              </p>
            </div>

            <div className='pt-5'>
              <p>
                CDD-23 378.007209861 / 2024
              </p>
            </div>
          </div>
        </div>
      </MainSection>
    </Capitulo>
  );
};

export default Creditos;
