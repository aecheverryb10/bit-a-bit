import { BloqueTexto, ParrafoInicial, Resaltado, Subtitulo, TituloCapitulo } from '@/components/Elements';

import Capitulo from '@/components/Capitulo';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import ScrollVideo from '@/components/ScrollVideo';
import Timeline from '@/components/Timeline';
import { useLayoutEffect } from 'react';
import { useTrackedState } from '@/store';

export default function AscendenciasDigitales() {
  const state = useTrackedState();
  const { fontSize } = state;

  useLayoutEffect(() => {
    ScrollTrigger.refresh(true);
  }, [fontSize]);

  return (
    <>
      <Capitulo>
        <TituloCapitulo>
          <div className='flex items-start flex-col lg:flex-row lg:items-center'>
            <span
              style={{ background: `linear-gradient(159.71deg, #02EBB6 0.2%, rgba(115, 115, 115, 0) 41.04%)` }}
              className='chapter-number text-8xl lg:text-9xl font-extralight border-2 px-10 py-6 mr-8'
            >
              1
            </span>
            <div className='overflow-hidden py-8 lg:py-3'>
              <h1 className='chapter-title text-5xl lg:text-6xl font-light'>
                Ascendencias digitales:{' '}
                <span className='block chapter-title text-3xl lg:text-4xl font-extralight mt-2'>
                  perspectivas globales y el caso colombiano
                </span>
              </h1>
            </div>
          </div>
        </TituloCapitulo>

        <ParrafoInicial>
          <p className='mb-6 first-letter:text-7xl first-letter:me-4 first-letter:tracking-n first-letter:float-start first-letter:font-sans first-letter:font-extralight'>
            El término <em>digital</em> no se ha comprendido siempre de la misma forma, aunque desde hace siglos ha
            guardado relación con los sistemas numéricos y sus usos. <em>Digital</em> surge del latín <em>digitālis</em>
            , lo que es relativo a los dedos, de las manos o los pies, y se cree que para finales del siglo{' '}
            <span className='caps'>XIV</span> se refería a los números hasta diez, los que pueden contarse con los dedos
            de las manos (Online Etymology Dictionary, 2021).
          </p>
          <p>
            Lo anterior tiene más sentido si se considera que <em>digitālis</em>, a su vez, deriva de <em>dĭgĭtus</em>,
            es decir, “dedo de la mano”. Esta semejanza, por ejemplo, llevó a que, en 1542, Leonard Fuch nombrara{' '}
            <em>Digitalis purpurea</em> a una planta que parecía un dedal (Online Etymology Dictionary, 2021). El
            vocablo se relaciona, además, con la raíz protoindoeuropea <em>deik</em>, que significa mostrar o señalar
            (Online Etymology Dictionary, 2017). De modo que, el sentido numérico de lo digital se halla en su
            inseparable relación con los dedos, en lo que puede ser contabilizado o señalado por ellos.
          </p>
        </ParrafoInicial>
        <Subtitulo id='preludios-digitales'>
          <>1.1 Preludios digitales: </>
          <span className='block font-extralight'>hacia una comprensión histórica de lo digital</span>
        </Subtitulo>
        <BloqueTexto shadow={false} Texto noPaddingBottom={true}>
          <p>
            En el siglo <span className='caps'>XX</span>, el concepto de <em>digital</em> se adaptó, para referirse,
            concretamente, a los datos representados por dígitos numéricos (Online Etymology Dictionary, 2021). La
            computación fue la disciplina científica que resignificó este término en un nuevo universo de posibilidades
            para usar y manipular la información. Esta nueva comprensión de lo digital dividió el mundo material,
            mecánico y analógico de uno intangible, representado por sistemas electrónicos y computacionales —recurso 1.
          </p>
        </BloqueTexto>
        <ScrollVideo
          number={1}
          title={'¿Qué es lo digital? y ¿qué es transformación digital?'}
          url='https://youtu.be/Cypiyk-Q-2A'
          type='video/mp4'
        />
        <BloqueTexto shadow={false} noPaddingBottom={true}>
          <p>
            La digitalización puede ser entendida como el proceso de “conversión de datos y procesos analógicos a un
            formato legible por máquinas” (<span className='caps'>OCDE</span>, 2019, p. 18). En otras palabras, la
            digitalización es un proceso de representación de la realidad en códigos que pueden ser leídos por máquinas.
            Si lo pensamos de otra forma, podríamos decir que este proceso es parecido a lo que pasa en una cerradura:
            las llaves de metal representan un código, el cual puede ser leído por una máquina (la cerradura). Cuando la
            llave se mueve, la cerradura lee el código y el mecanismo se activa en sus dos únicas funciones: abrir o
            cerrar. En términos sociales, puede pensarse que la era digital es una etapa histórica del ser humano en su
            relación con las máquinas. Norbert Wiener definió esta etapa en 1948, a través del concepto de{' '}
            <em>cibernética</em>, como la nueva ciencia de la comunicación y control entre el ser humano y la máquina
            (Téllez- Valdés, 1987, p. 9).
          </p>

          <p>
            El tránsito del mundo analógico al mundo digital experimentó un proceso paulatino de cambio tecnológico,
            cuyos orígenes se remontan a un sistema lógico y mecánico de equivalencias: las tarjetas perforadas. En las
            primeras décadas del siglo <span className='caps'>XVIII</span>, nacieron las tarjetas perforadas, como una
            adaptación de los mecanismos de relojería y las cajas de música. Su funcionamiento dependía de dos
            elementos: (1) las tarjetas que contienen perforaciones con un significado asignado y (2) la máquina que
            interpretaba esas perforaciones según una convención establecida. Era pues un sistema de equivalencias. Una
            de las aplicaciones pioneras de este sistema fue la máquina de tejer de Joseph Marie Jacquard, en la Francia
            de comienzos del siglo <span className='caps'>XIX</span>. La máquina leía las tarjetas que contenían
            información sobre el camino que debían seguir los hilos para producir diseños determinados. Estos fueron los
            inicios de los sistemas del procesamiento de datos y la automatización (Téllez-Valdés, 1987, p. 13).
          </p>

          <p>
            La importancia de esas tarjetas radicaba en su capacidad para almacenar información, a través de un código
            binario, es decir, la representación de información mediante dos símbolos: la presencia (1) y la ausencia
            (0). Estas tecnologías mecánicas fueron el inicio de la computación y la informática: formas de almacenar
            datos con representaciones simbólicas. La máquina interpretaba las perforaciones según una convención
            establecida, y realizaba las operaciones o acciones correspondientes. En este sentido, este sistema de
            cómputo mecánico cumplía varias funciones en la manipulación de la información por un lado, la almacenaba y,
            por otro, la procesaba para hacer cálculos matemáticos.
          </p>

          <p>
            La lógica de funcionamiento de las tarjetas perforadas fue aplicada para realizar este tipo de cálculos,
            progresivamente más complejos. A finales del siglo <span className='caps'>XIX</span>, fue usada en Estados
            Unidos por Herman Hollerith en una máquina electromecánica para tabular información registrada en tarjetas
            perforadas. Su invento facilitó el censo de 1890, pues permitió procesar alrededor de 15 millones de
            registros individuales en menos de dos años. Entrado el siglo <span className='caps'>XX</span>, las tarjetas
            perforadas ampliaron su campo de acción en el manejo y el procesamiento de datos masivos. Tanto los entes
            gubernamentales como la industria privada usaron esta tecnología para procesos de contabilidad, cálculo y
            análisis estadísticos. Los sistemas de seguridad social, la industria de seguros, las compañías telefónicas,
            las empresas manufactureras y los servicios públicos fueron algunos de sus beneficiarios e impulsores
            (Driscoll, 2012, pp. 8-10).
          </p>

          <p>
            La primera mitad del siglo <span className='caps'>XX</span> fue un tiempo fructífero en el desarrollo de las
            primeras calculadoras y computadoras electrónicas en Norteamérica y Europa. La computadora electromecánica
            Z1, desarrollada en Alemania en la década de 1930 (Rojas, 2014); la creación de la Oficina de Computación
            Thomas J. Watson con la ayuda de International Business Machines (<span className='caps'>IBM</span>)
            Corporation, en la Universidad de Columbia en 1934; la Eniac, calculadora electrónica que inauguró la era de
            la computación digital norteamericana en 1946; y la Univac 1, primera computadora de uso comercial en la
            década de 1950 (Ceruzzi, 2003, pp. 15-18). Estos casos marcan la primera etapa de desarrollo de las ciencias
            computacionales en Occidente, donde paulatinamente se reemplazaron los tabuladores mecánicos y las tarjetas
            perforadas por almacenamientos magnéticos y computadoras programables de uso general.
          </p>

          <p>
            En un sentido primario, las computadoras fueron creadas para computar, es decir, para resolver complejos
            problemas matemáticos, heredando los principios lógicos de las tarjetas perforadas, añadiendo un factor: la
            electricidad. El uso de circuitos electrónicos para realizar cálculos y procesar información fue el factor
            determinante en los impactos de dimensiones globales de la computación. Como es evidente en la actualidad,
            las computadoras no solo computan, sino que también almacenan y recuperan datos, procesan textos, manipulan
            imágenes y sonidos, administran redes de comunicación e, incluso, pilotean vehículos (Ceruzzi, 2003, p. 1).
          </p>

          <p>
            Es así como, en la segunda mitad del siglo <span className='caps'>XX</span>, la computación comenzó a
            adquirir estos rasgos y dimensiones. Aquel fue el momento en que la naturaleza de estas tecnologías cambió,
            para insertarse en nuevas esferas sociales, económicas y culturales. En 1962, el francés Phillipe Dreyfus
            sugirió la palabra “informática”, como expresión derivada de los vocablos <em>información</em> y{' '}
            <em>automatización</em>, entendida como “el conjunto de técnicas destinadas al tratamiento lógico y
            automático de la información”, para la toma de decisiones desde el punto de vista de los sistemas integrados
            (Téllez-Valdés, 1987, p. 11).
          </p>

          <p>
            La segunda mitad del siglo <span className='caps'>XX</span> es reconocida como la época de los más
            importantes avances de la informática y la computación, por sus impactos a nivel sociocultural: por una
            parte, desde finales de la década de 1940, las computadoras pasaron de ser instrumentos especializados para
            la ciencia, costosos y frágiles, a productos comerciales que podían fabricarse y venderse. Particularmente,{' '}
            <span className='caps'>IBM</span> desarrolló equipos para el manejo de la información para empresas
            estadounidenses. Posteriormente, en las dos décadas siguientes (1960-1970), el tamaño de las computadoras
            fue reduciéndose y sus funciones especializándose, de modo que permitieron el surgimiento de la computación
            personal, una suerte de <em>electrodoméstico</em> en los hogares norteamericanos y europeos. Alrededor de
            1980, pasó de ser un hardware especializado a un producto estandarizado, definido por software comercial, y
            cada uno adquirió importantes sectores del mercado. Finalmente, en la década de 1990, las computadoras se
            convirtieron en agentes que tejieron redes globales, un medio de comunicación sin precedentes (Ceruzzi,
            2003, pp. 14-15), que afectó gran parte de las disciplinas.
          </p>
        </BloqueTexto>
        <Resaltado>
          <>las computadoras fueron creadas para computar, es decir, para resolver complejos problemas matemáticos</>
        </Resaltado>
        <BloqueTexto noPaddingTop={true} noPaddingBottom={true}>
          <p>
            De forma particular, el nacimiento de las computadoras profundizó las reflexiones en torno a las diferencias
            entre las máquinas (hardware) y el conjunto de instrucciones que las dirigían para realizar tareas
            específicas (software). Las computadoras se convirtieron en máquinas con propósitos generales que, al ser
            exploradas por los usuarios, podían cambiar sus instrucciones y, consecuentemente, las tareas que eran
            capaces de realizar en ese momento (Ceruzzi, 2003, p. 80). Por esto, para el mejoramiento del software en
            términos computacionales, se hizo necesario el desarrollo de nuevas ramas del conocimiento, en el campo de
            las ciencias computacionales, como es el caso de la ingeniería de software.
          </p>

          <p>
            Sumado a ello, no puede dejarse de lado el papel transversal de Internet, entendido como una arquitectura de
            redes que se relaciona inseparablemente con la computación, desde los años 1960. El Internet se ha pensado
            como una colección de comunidades y tecnologías (computacionales, radiales, electrónicas y satelitales,
            etc.) que encuentra sus inicios en Arpanet, una red pionera de conmutación de paquetes de información. Dos
            elementos distinguieron a esta nueva tecnología: su carácter abierto y su capacidad de transferir paquetes
            de información, cúmulos de datos con sentidos propios. Desde la posibilidad de enviar correos electrónicos
            hasta la consolidación de la <em>world wide web</em> (red informática mundial), el Internet revolucionó los
            sistemas y flujos de información entre las sociedades humanas; y, al igual que la computación, se insertó en
            gran parte de las esferas y disciplinas, transformando profundamente las formas de sociabilidad a escalas
            globales (Leiner <em>et al.</em>, 1997).
          </p>

          <p>
            Ahora bien, hasta hace pocos años, se ha comenzado a reflexionar, desde una perspectiva histórica, sobre el
            impacto y el papel de las tecnologías digitales en América Latina y el Caribe. En este sentido, hay trabajos
            pioneros que arrojan luces en torno a dos líneas de investigación: por una parte, se ha hablado de los
            flujos de máquinas computacionales a las diferentes regiones de América Latina y el Caribe; y los usos que
            se le dieron; por otra parte, se ha rastreado la llegada de la informática como disciplina científica,
            insertándose en multiplicidad de centros académicos de los países latinoamericanos. Con ello, se ha pensado
            una historia de las Tecnologías de la Información y las Comunicaciones y una historia material de las
            máquinas digitales en el continente (Aguirre y Carnota, 2009; Rodríguez y Carnota, 2015a).
          </p>

          <p>
            A mediados del siglo <span className='caps'>XX</span>, se implantó la informática en Latinoamérica en medio
            de particulares coyunturas políticas y contextuales. Diferentes grados de libertad para los desafíos
            científicos y técnicos que representaron estas nuevas tecnologías. Brasil y Argentina, por ejemplo,
            experimentaron el panorama común de las dictaduras y, con ello, complejos y desconfiados diálogos con las
            prácticas científicas (Barrancos, 2015, p. xviii). Por su parte, en Cuba llegó la computación ampliamente y
            se insertó en sectores educativos, productivos y gubernamentales, a pesar de las barreras propias del
            bloqueo estadounidense y la posterior caída del socialismo en Europa Oriental (Aguirre y Carnota, 2009, p.
            15).
          </p>
        </BloqueTexto>
        <Resaltado>
          <>
            las computadoras pasaron de ser instrumentos especializados para la ciencia, costosos y frágiles, a
            productos comerciales que podían fabricarse y venderse
          </>
        </Resaltado>
        <BloqueTexto noPaddingTop={true}>
          <p>
            Chile, Argentina, Venezuela, Colombia, México, Uruguay, Cuba y Brasil ingresaron a esta nueva era digital de
            la computación entre 1957 y 1973, curiosamente, los primeros fueron Cuba y Colombia; mientras que Uruguay
            fue el último. En 1957, se instaló la primera computadora en Colombia, una <span className='caps'>IBM</span>{' '}
            650, importada por Bavaria, empresa cervecera. Un año más tarde, México y Cuba adquirieron un equipo de la
            misma referencia. La llegada de estas máquinas requería de esfuerzos significativos en cuanto a
            infraestructura y acondicionamiento de espacios, pues eran instrumentos enormes que necesitaban
            refrigeración para enfriar los tubos al vacío. Cuba figura, pues, como pionera en el caso latinoamericano,
            al ser el primer país en fabricar equipos de forma local, cuando en 1969 se produjo la primera
            microcomputadora en el país, la <span className='caps'>CID</span> 201-A (Dávila-Sguerra, 2015, pp. 12-13;
            Rodríguez y Carnota, 2015b, pp. xxiii- xxxiii).
          </p>

          <p>
            Otro caso paradigmático es el de la instalación de la primera computadora en Brasil, en la Pontificia
            Universidad Católica de Río de Janeiro en 1960, la Datatron Burroughs B-205, usada para trabajos de
            computación científica e ingeniería de la computación. Posteriormente, en los años 1980, Brasil se convirtió
            en uno de los pocos países con tecnologías propias en informática, alimentado por la Política Nacional de
            Informática (<span className='caps'>PNI</span>), que llegó a abastecer la mitad del mercado brasileño. Por
            su parte, Chile adquirió sus primeros equipos en 1962: una <span className='caps'>IBM</span> 1401 y una{' '}
            <span className='caps'>ER</span>-56 Standard Elektrik Lorenzo, de fabricación alemana, para la Facultad de
            Ciencias Físicas y Matemáticas de la Universidad de Chile (Rodríguez y Carnota, 2015b, pp. xxv-xxvi).
          </p>

          <p>
            Finalmente, podríamos mencionar algunas escuelas e instituciones formadas alrededor de la computación. En
            Colombia, en la década de 1970, época de los centros de cómputo, nació la Asociación Colombiana de
            Ingenieros de Sistemas (Acis); en Uruguay, el Centro de Computación de la Universidad de la República, entre
            1966 y 1973. Entretanto, en Argentina, durante la década de 1960, se creó el Instituto de Cálculo de la
            Facultad de Ciencias Exactas y Naturales de la Universidad de Buenos Aires, usando el equipo Mercury
            Ferranti; y en Venezuela, tras la caída de Pérez Jiménez, se creó en 1961 el Departamento de Cálculo
            Numérico en la Facultad de Ciencias de la Universidad Central de Venezuela (Rodríguez y Carnota, 2015b, pp.
            xxv-xxvi).
          </p>

          <p>
            Como vemos, América Latina y el Caribe experimentaron acercamientos diversos y complejos en torno a la
            computación y la informática. Equipos de varios lugares e instituciones del mundo llegaron al continente
            para apoyar los esfuerzos científicos y académicos por construir variadas escuelas de la computación y la
            informática. Con fines productivos, gubernamentales o pedagógicos, esta región se insertó en las redes
            globales de la era digital y aportó desde la construcción de saberes locales en la consolidación de estas
            tecnologías, destacándose la gestión de las instituciones de educación superior, como receptores de estos
            avances y formadores de los primeros profesionales de la era informática.
          </p>
        </BloqueTexto>
        <div id='recurso-2'>
          <Timeline />
        </div>
        <Subtitulo id='que-paso-en-colombia'>
          <>1.2 ¿Qué pasó en Colombia?</>
        </Subtitulo>
        <BloqueTexto noPaddingBottom={true}>
          <p>
            Como se señaló, Colombia fue uno de los primeros países en conectarse con las tecnologías computacionales en
            el contexto latinoamericano. Su recorrido en la era digital podría encontrar uno de sus orígenes en 1930,
            década en la cual comenzaron a usarse tarjetas perforadas electrónicas para realizar los censos nacionales.
            A lo largo del siglo <span className='caps'>XX</span> y durante lo corrido del siglo siguiente, estas nuevas
            tecnologías se adaptaron a las distintas necesidades: censo de las poblaciones, administración informática
            de empresas e instituciones estatales, contabilidad e investigación en distintas universidades, entre otras.
          </p>

          <p>
            En 1938, Colombia introdujo las máquinas tabuladoras Hollerith para el censo nacional de ese año. Estas
            máquinas fueron las primeras tarjetas perforadas eléctricas aplicadas a la informática en Colombia y, para
            antes de los años 1950, cumplirían funciones de gran importancia en el país. Por una parte, ayudaron a tener
            un panorama más amplio y preciso de la población y sus condiciones de vida, a través del censo de personas y
            edificios, con multiplicidad de variables (Orrego, 2017, pp. 155-156). Por otra parte, permitieron que las
            empresas colombianas contaran los ingresos y las salidas de los empleados (Jarava-Otero, 2020, p. 14).
          </p>

          <p>
            Estas tabuladoras electrónicas habían llegado a Brasil, México y Chile desde las décadas anteriores. Pero no
            habían podido ser usadas en Colombia, por los problemas fiscales y la falta de estadísticas centralizadas.
            Por ello, su uso significó una mayor precisión en el conteo y una economía del trabajo sin precedentes, en
            un país donde estos procesos se hacían solo de forma manual hasta ese momento (Orrego, 2017, p. 155).
          </p>

          <p>
            La computación moderna, surgida a nivel global en los años treinta, llegó a Colombia a finales de la década
            de 1950. En este proceso, el sector productivo antecedió, a las universidades, abriendo camino para la
            posterior investigación académica. Entre 1957 y 1958, cuatro empresas colombianas adquirieron un{' '}
            <em>mainframe</em> <span className='caps'>IBM</span> 650, a saber, Bavaria, Coltejer, las Empresas Públicas
            de Medellín (<span className='caps'>EPM</span>) y Ecopetrol. Posteriormente, en 1963 y 1968, llegaron estos
            mismos equipos a la Universidad de los Andes y la Universidad Nacional de Colombia, respectivamente. En el
            caso de la Universidad de los Andes, el computador llegó al Departamento de Ingeniería Eléctrica, donde
            permitió la creación de los primeros programas académicos en esta nueva disciplina, como es el caso de la
            carrera de Ingeniería de Sistemas, en 1967. Por su parte, la Universidad Nacional creó, en 1966, la Maestría
            en Sistemas, una de las primeras de América Latina y el Caribe en este nivel (Mesa, 2013, pp. 74-75).
          </p>

          <p>
            La evolución de la informática en Colombia tomaría distintos caminos para satisfacer las diversas
            necesidades de instituciones en el sector privado, académico y estatal. No obstante, para el desarrollo de
            este campo tecnológico se requeriría de una suerte de esfuerzo y comunicación conjunta. Bancos, empresas,
            medios de comunicación, el Estado y las industrias usaron estas tecnologías para el registro y procesamiento
            de información, de modo que permitió la automatización en la organización y análisis de archivos. Es así
            como, en 1968, se promulgaron los Decretos 2386 y 3167 para regular el uso de la informática y dotar al
            Gobierno de los mejores instrumentos de planeación y organización estatal, a través del uso de computadores,
            buscando hacer compatibles los equipos de procesamiento de datos en las diferentes entidades de
            administración pública (Decreto 2386 de 1968). Precisamente, el Departamento Administrativo Nacional de
            Estadística (Dane) se reorganizó en esos años, de manera que se convirtió en uno de los principales entes
            estatales en aportar al desarrollo de la informática y la administración en Colombia (Jarava-Otero, 2020, p.
            17).
          </p>

          <p>
            En la década de 1970, se promovió la participación de profesionales para controlar los estados financieros
            con el objetivo de cuidar patrimonios y registrar información (Salas-Machado, 2022, p. 4). Además, se
            implementó el uso de redes a partir de pulsos electrónicos que permitían transferir información; fue una
            alianza entre la computación, las redes eléctricas y las redes telefónicas y radiales que permitieron el
            intercambio de datos contables y financieros (Jarava- Otero, 2020, pp. 17-18).
          </p>
        </BloqueTexto>
        <Resaltado>
          <>
            La evolución de la informática en Colombia tomaría distintos caminos para satisfacer las diversas
            necesidades de instituciones en el sector privado, académico y estatal
          </>
        </Resaltado>
        <BloqueTexto noPaddingTop={true}>
          <p>
            Aunado a lo anterior, la integración de las tecnologías computacionales en la segunda mitad siglo{' '}
            <span className='caps'>XX</span> colombiano partió del uso de los tubos al vacío, pasando por los
            transistores y los circuitos integrados, hasta llegar a los microprocesadores. Aunque, para las décadas de
            1960-1970, los computadores aún eran escasos, en el país hubo importantes avances tanto en el nivel
            investigativo, como en la formación de una comunidad enfocada en esta ciencia emergente. La creación del
            Computador Digital Didáctico (Codidac) por la Pontificia Universidad Javeriana entre 1969 y 1971; y el
            centro de cómputo en la Universidad Pedagógica y Tecnológica, para sistematizar labores administrativas y
            académicas en 1972, fueron algunos ejemplos de estos avances. Además, se crearon organizaciones que
            estuvieron en el centro del desarrollo de nuevas tecnologías: la Asociación Colombiana de Usuarios de
            Computadores (Acuc), en 1972; la Asociación Colombiana de Ingenieros de Sistemas (Acis), en 1975; y el nodo
            en Colombia de la Red Iberoamericana de Informática Educativa (Ribiecol), en 1990. Los tres son algunos
            ejemplos que impulsaron la creación de grupos de investigación, enfocados a la educación y la informática
            (Mesa, 2013, pp. 74-76).
          </p>
          <p>
            Más tarde, también se llevaron a cabo significativos eventos y políticas que permitieron el diálogo entre
            esta comunidad. Por un lado, puede mencionarse la Ley 115 de 1994, por medio de la cual se expidió la “Ley
            general de educación”, que incluyó la tecnología e informática como áreas obligatorias del plan de estudio
            en la educación básica (art. 23), lo cual favoreció la alfabetización informática. En paralelo a esta
            iniciativa, transcurrieron eventos como el Foro de la Asociación Colombiana de Universidades sobre
            informática y educación universitaria y el primer Simposio Colombiano de Informática, Educación y
            Capacitación. Después, en 2008, se publicó el libro{' '}
            <em>
              Lineamiento para la formación de planes estratégicos de incorporación de las tecnologías de la información
              y las comunicaciones (<span className='caps'>TIC</span>) en instituciones de educación superior
            </em>{' '}
            (Mesa, 2013, pp. 76-77).
          </p>

          <p>
            En los inicios del siglo <span className='caps'>XXI</span>, Colombia ingresó en la era de la virtualidad, en
            la que la conjunción del procesamiento de datos de la computación y la conectividad que Internet facilitaba
            propició el desarrollo de nuevas tecnologías, que a su vez, se integraron inseparablemente en el ámbito
            educativo, principalmente en el universitario, y de manera progresiva en las instituciones de educación
            básica. El impulso inicial del Internet en Colombia se remonta a 1986, cuando la Universidad de los Andes,
            la Universidad Nacional de Colombia y la Universidad del Norte, con el respaldo del Instituto Colombiano
            para la Evaluación de la Educación Superior (Icfes), construyeron la infraestructura de la primera red
            conocida como Bitnet.
          </p>

          <p>
            En los años posteriores, con la participación de instituciones como la Universidad Eafit, el Departamento
            Administrativo de Ciencia, Tecnología e Innovación (Colciencias) y la Universidad del Valle, el internet
            finalmente llegó a Colombia en 1994. Esta nueva red de comunicación apoyó los procesos educativos de
            diversas instituciones, lo que permitió el surgimiento de planes educativos sin precedentes. Un ejemplo de
            sus alcances fue el caso de los programas académicos virtuales a distancia, resultado del convenio entre la
            Universidad Autónoma de Bucaramanga y el Instituto Tecnológico y de Estudios Superiores de Monterrey en la
            década de 1990. Finalmente, en el 2000, se implementó la primera política de Estado a largo plazo denominada
            “Agenda de conectividad: el salto a Internet” (Conpes 3072), impulsando programas como “Renata”,
            “Computadores para educar” y “Gobierno en línea” (Mesa, 2013, pp. 79-83).
          </p>
        </BloqueTexto>
      </Capitulo>
    </>
  );
}
