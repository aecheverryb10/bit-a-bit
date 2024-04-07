import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Capitulo from '@/components/Capitulo';
import { BloqueTexto, ParrafoInicial, Resaltado, Subtitulo, TituloCapitulo } from '@/components/Elements';
import Podcast from '@/components/Podcast';
import ScrollImage from '@/components/ScrollImage';
import ScrollMultipleImages from '@/components/ScrollMultipleImage';
import ScrollVideo from '@/components/ScrollVideo';
import Slider from '@/components/Slider';
import { slider_data2 } from '@/data/slider_data';
import { Tooltip } from 'react-tooltip';

export default function CulturaDigital() {
  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  return (
    <>
      <Capitulo>
        <TituloCapitulo>
          <div className='flex items-center'>
            <span
              style={{ background: `linear-gradient(159.71deg, #02EBB6 0.2%, rgba(115, 115, 115, 0) 41.04%)` }}
              className='chapter-number text-9xl font-extralight border-2 px-10 py-6 mr-8'
            >
              3
            </span>
            <div className='overflow-hidden py-3'>
              <h1 className='chapter-title text-6xl font-light'>Cultura Digital Unal:</h1>
              <p className='chapter-title text-4xl font-extralight mt-2'>caminos a la transformación digital</p>
            </div>
          </div>
        </TituloCapitulo>
        <ParrafoInicial>
          <p className='mb-6 first-letter:text-7xl first-letter:me-4 first-letter:tracking-n first-letter:float-start first-letter:font-sans first-letter:font-extralight'>
            En el siglo <span className='caps'>XXI</span>, Internet se ha convertido en el artefacto por excelencia del
            vasto universo de las tecnologías digitales. Se transformó en un dispositivo cultural que generó nuevas
            formas de relacionamiento social y produjo nuevas identidades. Internet es una herramienta, pero también un
            espacio social que las personas usan para extenderse a sí mismas y ampliar sus relaciones. Una enorme red
            digital, mediada por una multiplicidad de intercambios y artefactos, se consolidó, y la línea divisoria
            entre la realidad y la virtualidad se volvió cada vez más difusa: las prácticas individuales, la
            comunicación, el comercio electrónico, las relaciones de parentesco, amistad y sociabilidad se desplegaron
            paulatinamente alrededor de diversos dispositivos digitales (Grillo, 2019, pp. 21-28).
          </p>

          <p>
            El nuevo siglo está marcado por la especialización y masificación de las tecnologías asociadas a lo digital:
            celulares y smartphones, computadores portátiles, tabletas, inteligencias artificiales, aplicaciones con
            todo tipo de funcionalidades y sensores integrados a las máquinas electrónicas midiendo sus formas de uso
            para alimentar la <em>big data</em>: televisores, hornos, licuadoras, reproductores de sonidos, etc.
          </p>
        </ParrafoInicial>
        <BloqueTexto>
          <p>
            Desde los años 1990, en la antropología, comenzó a cuestionarse el concepto de <em>apropiación</em>, como
            una forma de entender la asimilación de nuevas prácticas en las vidas de las personas. Así, se entendió por
            “apropiación tecnológica” el proceso mediante el cual una tecnología deja de ser desconocida para pasar a
            formar parte de la vida diaria de un agente. En este proceso, se han identificado, a grandes rasgos, cuatro
            etapas: el acceso, el aprendizaje, la integración y la transformación. Se pensó, entonces, la tecnología
            como un agente de cambio, un medio generador de fenómenos como el hipertexto, la teoría del actor-red, los
            rizomas y la interconexión con discursos sobre biotecnología y biodiversidad (Morales, 2019, p. 35).
          </p>

          <p>
            Así, el exponencial crecimiento de los usuarios de tecnologías digitales comenzó a crear nuevos problemas
            dentro de la sociedad. El más básico es la inmersión de la intimidad humana en la gran red. Paulatinamente,
            cada usuario dejaba distintas huellas que confirmaban su paso por las plataformas virtuales: portales,
            páginas web y sistemas de información. La <em>big data</em>, esa gran masa de datos generada por los
            usuarios, comenzaba a adquirir sentido a través de los algoritmos, un conjunto de instrucciones usadas por
            los sistemas de información para “analizar, organizar, seleccionar y presentar de manera comprensible esos
            datos” (Morales, 2019, p. 39).
          </p>

          <p>
            Con esta evolución, emergieron nuevos conceptos como el <em>machine learning</em>, los <em>bots</em> y las
            inteligencias artificiales. Pero no solo conceptos, sino también necesidades sociales y regulaciones para
            proteger las huellas digitales, administrar los contenidos de internet y regular los modos de acceso y uso
            de todas estas herramientas. Así nacieron los derechos digitales, una rama del derecho que se ocupa de
            controlar el manejo de los datos de los usuarios e incentiva el uso adecuado de las Tecnologías de la
            Información y las Comunicaciones —<span className='caps'>TIC</span> (Morales, 2019).
          </p>

          <p>
            En definitiva, la apropiación de las tecnologías digitales en el presente siglo abre la puerta a nuevas
            formas de apropiación y empoderamiento de las personas, pero también carga consigo el lastre del mal uso
            como una herramienta de poder. Temas como los contenidos dañinos, la integridad electoral, la privacidad y
            portabilidad de los datos se convierten en problemas cardinales en el uso de estas tecnologías. Los derechos
            digitales son tan importantes en el presente, en términos de la gobernanza a nivel global, al punto que
            hacen parte de los derechos humanos de cuarta generación, junto con los derechos ecológicos, a la democracia
            y la solidaridad —recurso 4 (Morales, 2019).
          </p>
        </BloqueTexto>
        <Podcast subtitle={'Una conversación con el profesor Fabio Augusto González Osorio'} />
        <BloqueTexto>
          <p>
            Este era el contexto tecnológico en el que se encontraba inmersa la Universidad Nacional de Colombia entrado
            el siglo <span className='caps'>XXI</span>. Aunque los principales sistemas de información se pusieron en
            marcha en la primera década del siglo
            <span className='caps'>XXI</span>, aún era necesario desarrollar un plan para que las personas del común
            aprendieran a manejarlos. La segunda década del siglo, entonces, se caracterizó por implementar una serie de
            políticas y planes para el desarrollo de la llamada “cultura digital” en las prácticas educativas de la
            universidad. Fue un cambio de las materialidades del mundo, pero también de sus lógicas; comprender máquinas
            que parecen hechas por obra de magia, que aceleraban procesos y permitían una comunicación constante con las
            demás personas cómo nunca se había visto. En otras palabras, significó entender las funcionalidades de
            nuevos servicios y plataformas, dispositivos que pasaron de funcionar con perillas y botones, a teclados y
            ratones, pantallas táctiles, proyectores portátiles y celulares
          </p>
        </BloqueTexto>
        <ScrollImage
          img={'./img/figura_14.jpg'}
          caption={
            <>
              <p>Figura 14. Mabeg (2006).</p>
              <p>
                Archivo Fotográfico Unimedios <br />
                (Archivo de todos los años /2006/Bogotá)
              </p>
            </>
          }
        />
        <BloqueTexto>
          <p>
            A grandes rasgos, la <em>cultura</em> puede entenderse como las ideas, valores y prácticas colectivas que
            configuran el pensamiento y la vida de un pueblo. En este sentido, tiene una dimensión <em>performativa</em>
            , ya que la cultura se ejerce, se practica e implica una interacción con el mundo. Luego, la cultura digital
            es la inmersión de las tecnologías digitales en las culturas y sociedades humanas, entendida por algunos a
            través de tres conceptos principales: la <em>participación</em>, la <em>remediación</em> y el{' '}
            <em>bricolaje</em>, como se explica enseguida.
          </p>

          <p>
            La participación se refiere a la interacción con las personas y el medio como actores participantes de esa
            cultura digital. La remediación se refiere a la manipulación, modificación y reformulación de la información
            disponible, es decir, la mediación con lo digital de modo que se adapte a lo que quieren losindividuos. El
            bricolaje, por último,significa el uso de medios y procedimientos de forma autónoma e individual para operar
            esa información, como el <em>ctrl</em> + <em>c</em> y <em>ctrl</em> + <em>v</em>, remezclar, comentar y
            modificar; una forma de empoderamiento en la resolución de problemas informáticos (Uribe-Zapata, 2019).
          </p>

          <p>
            En resumen, la adaptación a la cultura digital puede entenderse como la modificación de ideas, prácticas y
            valores por el uso de tecnologías digitales, que permiten manipular y conectar la información de
            numerosísimas formas y mediante diversos medios.
          </p>

          <p>
            La asimilación de esta cultura diluye un límite que antes parecía claro: el de lo real y lo virtual, como si
            fueran cosas separadas (Uribe-Zapata, 2019, p. 120). La cultura digital lo disuelve de modo que uno afecta
            al otro. Por ejemplo, el hecho práctico-material es que se debe asistir a una clase por la mañana en el
            edificio Manuel Ancízar de la Universidad Nacional de Colombia – Sede Bogotá; el análogo virtual es el
            horario en el Sistema de Información Académica (<span className='caps'>SIA</span>) que indica que la clase
            es de 9 a.m. a 12 m., en el salón 301 del edificio 224. Al final, la herramienta virtual modifica y
            condiciona nuestras formas de vida, al punto en que si no tenemos acceso a la interfaz podría impedirnos
            acceder a la clase de la misma manera y con las mismas facilidades.
          </p>
        </BloqueTexto>
        <Subtitulo>
          <>
            Institucionalización <span className='caps'>TIC</span>: <span className='caps'>CNTIC</span>,{' '}
            <span className='caps'>DNTIC</span>, Peti, <span className='caps'>DNED</span>/UNALab
          </>
        </Subtitulo>
        <BloqueTexto noPaddingBottom={true} shadow={false}>
          <p>
            En 2009, se redefinieron las políticas digitales en la Universidad Nacional de Colombia. El Comité Nacional
            de Informática y Telecomunicaciones, creado en 1998, cambió levemente su nombre por Comité Nacional de
            Informática y Comunicaciones (posteriormente, Comité Nacional de Tecnologías de la Información y las
            Comunicaciones —<span className='caps'>CNTIC</span>). Este es el órgano responsable de la elaboración de los
            planes, las propuestas políticas y los programas en esta materia, con la capacidad de aplicarlos a todas las
            dependencias de la universidad. El enfoque de esta nueva normativa estipulaba ampliar el margen de acción
            del comité para permitir la participación de todas las sedes, junto a la Dirección Nacional de Informática y
            Comunicaciones. Además, impulsaba el uso de software libre para el apoyo administrativo y educativo y
            planteaba los lineamientos en torno a los derechos de autor y licenciamientos de productos informáticos. Se
            determinó, entonces, que todo software desarrollado con el personal de planta o contratistas dentro de la
            institución sería propiedad de la universidad. Por tanto, debía ser registrado ante las autoridades
            pertinentes. Era pues un intento por consolidar una arquitectura digital que, para ese tiempo, ya contaba
            con importantes avances, aunque con poca cohesión (Acuerdo 46 de 2009).
          </p>

          <p>
            Que para estos años todas las sedes de la universidad contaran con centros de cómputo y oficinas de
            informática, implicaba el aumento en las responsabilidades en cuanto al manejo y respaldo de los sistemas de
            información. El alcance funcional de las dependencias usuarias de los sistemas de información era enorme,
            pero los datos debían ser manipulados de forma adecuada en torno a su forma de consulta, ingreso,
            modificación, eliminación y divulgación.
          </p>

          <p>
            De modo que la Dirección Nacional de Informática y Comunicaciones lideró la implementación de mecanismos
            para garantizar la integridad, confiabilidad, oportunidad, disponibilidad y seguridad de estos recursos
            tecnológicos, a través de un trabajo conjunto con la comunidad universitaria para el correcto mantenimiento
            de los sistemas y la definición de los diferentes perfiles que accedían, entre administrativos, estudiantes,
            docentes y contratistas (Acuerdo 46 de 2009).
          </p>
          <h3 className='text-2xl text-purple-base font-sans mb-10'>
            Plan Estratégico de Tecnologías de Información y Comunicaciones
          </h3>
          <p>
            Con el tiempo, los esfuerzos por regular el uso de las tecnologías de la información se aglutinaron en
            detallados programas. En 2012, durante la rectoría de Ignacio Mantilla (2012- 2018), se aprobó el Plan
            Estratégico de Tecnologías de Información y Comunicaciones (Peti). Este plan se basó en los principios
            organizacionales de las dependencias de la universidad, fijados en 2005 por el Consejo Superior
            Universitario (<span className='caps'>CSU</span>), para garantizar el correcto manejo de los datos, un
            proceso necesario para la efectiva operación de los sistemas de información de gestión académica y
            administrativa. Con ayuda de la Facultad de Minas de la Sede Medellín, el Peti de 2012 se convirtió en un
            instrumento de planeación diseñado para establecer relaciones entre las necesidades de la universidad y las
            tecnologías de la información (Acuerdo 46 de 2012).
          </p>

          <p>
            Esta fue la primera vez en la que se estableció un plan no solo para solucionar problemas del pasado y del
            presente, sino también para anticiparse a los retos del futuro, preparándose para los acelerados cambios que
            experimentaba la universidad en procesos como las admisiones, el registro y el asesoramiento académico; en
            los cuales el auto servicio se había convertido en una necesidad latente. Con la implementación del Peti, se
            introdujo el concepto de “universidad en tiempo real”, es decir, lograr las competencias necesarias por
            medio del uso de información actualizada, para afrontar la inevitable realidad cambiante. La universidad
            necesitaba velocidad, conectividad y acceso oportuno a la información para trabajar en tiempo real con sus
            aliados, dependencias y participantes. Era una apuesta por entender el sentido del entorno y responder de
            manera más ágil a sus cambios. Las <span className='caps'>TIC</span> permitieron afrontar el reto, como
            parte de una estrategia institucional que no solo optimizaba los procesos, sino que, primordialmente,
            permitía lograr los objetivos misionales de la universidad (Grupo Consultor Peti, 2011).
          </p>
        </BloqueTexto>
        <Resaltado>
          <>
            Esta fue la primera vez en la que se estableció un plan no solo para solucionar problemas del pasado y del
            presente, sino también para anticiparse a los retos del futuro
          </>
        </Resaltado>
        <BloqueTexto noPaddingTop={true} noPaddingBottom={true}>
          <p>
            El Peti enfocó sus esfuerzos en dos agentes principales: (1) los usuarios y (2) la institución. En torno a
            los primeros, los distintos cuerpos colegiados debían procurar cumplir determinados requisitos en el marco
            de las
            <span className='caps'>TIC</span>: el acceso a la información y los recursos, el almacenamiento seguro, el
            trabajo colaborativo, el soporte en
            <span className='caps'>TIC</span> y la adquisición de software y hardware. En cuanto a los requisitos
            institucionales, tenían la premisa de cumplir con las necesidades de las actividades misionales de una
            “universidad de sedes”, es decir, que su funcionamiento debía luchar contra el carácter centralista que,
            históricamente, había definido a la universidad y que hasta ese momento había resultado en una
            administración desigual de las sedes. En este sentido, las tecnologías de la información debían servir a la
            institución en los siguientes frentes: la formación, investigación y extensión; la educación, entrenamiento
            y socialización de las <span className='caps'>TIC</span>; la gestión administrativa; el gobierno{' '}
            <span className='caps'>TIC</span>; los indicadores y estadísticas; la integración de la información; y,
            finalmente, la memoria institucional e información histórica (Grupo Consultor Peti, 2011, pp. 1-22).
          </p>
          <p>
            En este contexto, el Peti de 2012 puede entenderse como un referente que integró los esfuerzos y visiones
            sobre el desarrollo tecnológico de estudiantes, investigadores, profesores y administrativos. Gracias a esta
            integración, en la Universidad Nacional de Colombia, comenzó a hablarse de “cultura de la información” y su
            impacto en los procesos tecnológicos, las personas y el valor (Umaña-Acosta, comunicación personal, 28 de
            agosto de 2023). De esta forma, se crearon las bases institucionales de planes constantemente reevaluados e
            implementados.
          </p>

          <p>
            Hasta la fecha, se han implementado dos Planes Estratégicos de Tecnologías de Información y Comunicaciones,
            adicionales al de 2012, a saber, el correspondiente a 2016-2018 y el actual, que abarca de 2022 hasta 2024.
            Estos se plantearon como actualizaciones progresiva del plan anterior (Acuerdo 227 de 2016;{' '}
            <span className='caps'>DNED</span>, 2022).
          </p>
          <h3 className='text-2xl text-purple-base font-sans mb-10'>
            Dirección Nacional de Tecnologías de la Información y las Comunicaciones
          </h3>
          <p>
            Con la reestructuración académico-administrativa a nivel nacional en 2013, la Vicerrectoría General fijó sus
            funciones y definió las dependencias adscritas. Entre ellas tenía a cargo la Dirección Nacional de
            Tecnologías de la Información y las Comunicaciones (<span className='caps'>DNTIC</span>), heredera de las
            direcciones nacionales creadas en 1997. Como organismo de superior jerarquía, la{' '}
            <span className='caps'>DNTIC</span> se ocupó de diseñar las propuestas de políticas, reglamentación y
            planeación estratégica para el desarrollo de estas tecnologías, mientras servía de veedor de la gestión de
            las
            <span className='caps'>TIC</span> en la universidad, además garantizaba la existencia de la infraestructura
            tecnológica (Acuerdo 113 de 2013).
          </p>

          <p>
            Sumado a lo anterior, las vicerrectorías de las sedes Bogotá, Manizales, Medellín y Palmira crearon una
            Oficina de Tecnologías de la Información y las Comunicaciones en cada una de sus sedes, con el deber de
            gestionar y operar la infraestructura tecnológica e implementar los sistemas de seguridad y contingencia de
            los recursos informáticos y de comunicación (Acuerdo 316 de 2019; Acuerdo 164 de 2014). Finalmente, apoyando
            el enfoque público de estas políticas, se encuentra Unimedios, organismo encargado de la difusión de
            información, promoviendo el debate público y velando por la imagen de la universidad (Acuerdo 113 de 2013).
          </p>

          <p>
            La articulación entre las Oficinas <span className='caps'>TIC</span>, <span className='caps'>DNTIC</span>,
            el <span className='caps'>CNTIC</span> y Unimedios institucionalizó el manejo de las tecnologías de la
            información y creó un terreno fértil para enfrentar al acelerado cambio tecnológico del siglo
            <span className='caps'>XXI</span>. Dichos organismos son los encargados de garantizar el funcionamiento del
            soporte digital de la vida material de la universidad, donde paulatinamente se registra la identidad de
            todos los miembros de su comunidad, los edificios físicos y sus dependencias, así como los proyectos que
            sustentan su desarrollo académico y administrativo (Resolución 464 de 2014).
          </p>
          <h3 className='text-2xl text-purple-base font-sans mb-10'>Derecho y seguridad informática</h3>
          <p>
            El aumento en el uso de las tecnologías de la información, la masificación del uso de computadoras, la
            expansión de internet y la gigantesca acumulación de datos por parte de gobiernos y empresas han generado la
            necesidad de desarrollar nuevos campos en el derecho y la reglamentación jurídica. El derecho informático es
            entendido como “el conjunto de normas jurídicas que regulan los efectos jurídicos nacidos de la interacción
            de sujetos en el ámbito de la informática y sus derivaciones” (Tato, 2013).
          </p>

          <p>
            Esta rama del derecho resulta de la progresiva digitalización de las sociedades y su cultura: el mundo
            personal, institucional, administrativo, empresarial, social y gubernamental. Pasados los años, ha enfocado
            sus esfuerzos en regular varios campos adjuntos a las <span className='caps'>TIC</span>, a saber, el régimen
            jurídico del software, las redes de transmisión de datos, los documentos electrónicos, los contratos, las
            bases de datos, la privacidad y los delitos informáticos. La conceptualización del uso de las{' '}
            <span className='caps'>TIC</span> se estructura bajo la mirada del derecho, dando lugar a nuevas
            concepciones sobre el delito y los usos correctos o incorrectos de estas tecnologías (Hernández-Díaz, 2009).{' '}
          </p>

          <p>
            Particularmente, las connotaciones contrarias a las normativas, que resultan delictivas o criminales, son
            algunas de las bases constitutivas del derecho informático, pues abogan por los comportamientos éticos
            relacionados con los procesos y transmisiones automáticas de datos. Por esta razón, se reflexiona sobre las
            posibles infracciones y vulneración de derechos e intereses individuales y supraindividuales a través de los
            ordenadores (Hernández-Díaz, 2009, p. 233).
          </p>

          <p>
            Para 2016, la Universidad Nacional de Colombia contaba con un importante número de elementos, dispositivos,
            recursos, procesos y personas capacitadas a nivel tecnológico, todos destinados a proteger la
            infraestructura digital que componía sus redes computacionales y sistemas de información que, para ese
            momento, ya eran de carácter vital para el desarrollo de las actividades institucionales y misionales. La
            existencia de esta “tecnología vital” implicaba también la existencia de múltiples riesgos relacionados con
            la posesión y manejo de información confidencial. Por lo tanto, se hizo necesario el desarrollo de una
            Política de Seguridad Informática y de la Información, que apoyara los esfuerzos de control y gestión
            tecnológica, apuntando a modelos sostenibles, progresivos y adaptables a los cambios tecnológicos adscritos
            a la normatividad y la legislación (Acuerdo 228 de 2016).
          </p>
        </BloqueTexto>
        <Resaltado>
          <>
            Es importante considerar que el concepto de <em>transformación digital</em> no solo implica un cambio de las
            tecnologías, ni se limita a la llegada de máquinas digitales o la presencia de grandes redes que transportan
            información
          </>
        </Resaltado>
        <BloqueTexto noPaddingTop={true}>
          <p>
            Esta nueva política es definida como una “estrategia mediante la cual se reconoce que la tecnología de la
            información y la comunicación es una herramienta necesaria para el desarrollo institucional, pero que
            conlleva riesgos inherentes que deben ser mitigados”. Los delitos informáticos que no pudieran ser
            detectados, detenidos y minimizados significaban un deterioro de la confianza y la fe institucional y, en
            consecuencia, del desarrollo académico, administrativo y misional de la universidad. En este orden de ideas,
            el objetivo fue establecer un primer marco clave que atravesara los procesos y los servicios informáticos,
            por medio de la adopción de medidastécnicas, estructuraslegales, recursos humanos y capacidades(Acuerdo 228
            de 2016).
          </p>

          <p>
            La política de seguridad informática era también una apuesta cultural, un canal de comunicación entre todos
            los miembros de la comunidad universitaria que, además de gozar de nuevos recursos para vivir la universidad
            (ahora con una dimensión digital), también adquirieron nuevas responsabilidades derivadas de la manipulación
            de estos recursos. En ese momento eran propiamente usuarios activos de información confidencial,
            infraestructura tecnológica y servicios informáticos institucionales. Por ello, las políticas se
            incorporaron al Sistema Integrado de Gestión Académica, Administrativa y Ambiental (Siga), con miras a que
            toda la comunidad universitaria fuera responsable y mantuviera habilitados y en correcto funcionamiento los
            controles de protección contra pérdida, daño intencionado (o no) y modificación de información y
            procesamientos (Acuerdo 228 de 2016).
          </p>

          <p>
            Era un reto de dimensiones mayores, porque representaba informar y educar a toca la comunidad sobre los
            peligros de la manipulación de la información en el siglo <span className='caps'>XXI</span>. La
            consolidación institucional que apostó por el uso responsable de las tecnologías develaba la relación
            intrínseca entre el derecho y la cultura, y entre la institución y la sociedad. En este sentido, logramos
            observar que la construcción de políticas, dependencias y organismos en torno a las{' '}
            <span className='caps'>TIC</span> en la universidad implicaba la construcción de estructuras de normas y
            reglas que trazaran los límites de sus proyecciones y sus usos, es decir, la creación de herramientas
            reguladoras del orden colectivo.
          </p>

          <p>
            Lo que ocurrió fue una suerte de influencia mutua entre la cultura y la norma. A la vez que las costumbres
            se convertían en derecho (como fuente formal de lo jurídico), el derecho ejercía presión para crear
            costumbres. En otras palabras, los actos repetitivos y aceptados por una comunidad se convirtieron,
            paulatinamente, en obligatorios. A medida que estas se cristalizaban institucionalmente, se transformaban en
            normas (como el cúmulo de bastos pensamientos en torno a un problema) y finalmente,se convertían en una
            herramienta educativa para guiar las acciones de la sociedad, basada en los principios de fomento y respeto
            por los valores jurídicos (Fregoso-Zárate, 2017, pp. 109-113). Así, la Universidad Nacional de Colombia
            construyó en la segunda década del siglo <span className='caps'>XXI</span> las bases normativas que
            regulaban sus experiencias en la era digital —recurso 5.
          </p>
        </BloqueTexto>
        <Podcast
          linkSpotify={'1wBm9beSVGMhChmZQgOoGu'}
          title={'Seguridad y la ética en la Universidad Nacional'}
          subtitle={'Una conversación con el director de la DNED, el profesor Johan Sebastián Eslava Garzón'}
          linkWeb={
            'https://podcastradio.unal.edu.co/detalle/t1-e2-la-cultura-digital-en-la-universidad-nacional-de-colombia'
          }
          linkIvoox={'https://go.ivoox.com/rf/126825025'}
        />
        <BloqueTexto noPaddingBottom={true}>
          <h3 className='text-2xl text-purple-base font-sans mb-10'>
            Iniciativas estratégicas de apropiación y optimización tecnológica
          </h3>
          <p>
            Paralelamente, en el mismo año en que se desplegaba la política de seguridad informática, se actualizó el
            Plan Estratégico de Tecnologías de Información y las Comunicaciones, implementado hasta 2018, tomando un
            rumbo distinto al planteado en 2012. Mientras el Peti de 2012 fue diseñado por un grupo consultor
            perteneciente al Sistema de Mejor Gestión (Simege), el del 2016 estuvo a cargo de la{' '}
            <span className='caps'>DNTIC</span>, acorde con las necesidades del Plan Global de Desarrollo 2016-2018
            (Acuerdo 227 de 2016). La estrategia de las tecnologías de la información (<span className='caps'>TI</span>)
            de este nuevo Peti consistió en “potenciar las capacidades y competencias en informática y comunicaciones
            para implementar procesos y proyectos como soporte a los procesos misionales de la universidad, que
            faciliten una gestión eficiente” (<span className='caps'>DNTIC</span>, 2015, p. 14).
          </p>

          <p>
            El Peti de 2016 enfocó sus esfuerzos en cuatro factores claves: (1) en la gestión de competencias y
            capacidades de las tecnologías de la información (<span className='caps'>TI</span>), con el objetivo de
            apropiar nuevas tecnologías, ampliar las capacidades de conectividad, procesamiento y almacenamiento,
            mejorar los esquemas de gobierno y establecer esquemas de cultura de <span className='caps'>TI</span> ; (2)
            en la gestión de procesos y proyectos de <span className='caps'>TI</span> para generar alianzas
            institucionales; (3) ofrecer servicios efectivos de <span className='caps'>TI</span> para la comunidad
            universitaria y la sociedad; y (4) en el campo de las inversiones en <span className='caps'>TI</span> para
            la universidad, como una apuesta por el manejo efectivo de los gastos y recursos en esta área. Con estas
            claridades, se plantearon doce proyectos enfocados al mejoramiento de las capacidades de la universidad,
            tanto en infraestructura como en conocimientos, cobertura y apropiación.
          </p>

          <p>
            Por ejemplo, se planteó el problema de la ausencia de modelos de vigilancia tecnológica y las aun presentes
            carencias en apropiación tecnológica, principalmente a causa de la resistencia a los cambios tecnológicos de
            los funcionarios, y la continua falta de recursos para la ejecución de proyectos. En este sentido, uno de
            estos proyectos buscó construir un modelo para generar una cultura alrededor de las tecnologías de la
            información, incluyendo mecanismos de comunicación y planes de entrenamiento continuo en tecnologías como
            aplicaciones empresariales, herramientas de ofimática, herramientas colaborativas y el uso de Internet.
          </p>

          <p>
            Adicionalmente, se requería mejorar la provisión de infraestructura tecnológica de hardware y software. Para
            esos años, la universidad contaba con gran capacidad de procesamiento, pues existían servidores en todas sus
            sedes, sin embargo, aún no existía una capacidad centralizada para almacenar los datos institucionales que
            se producían diariamente, corriendo riesgos constantes de pérdida o sustracción de información.
            Paralelamente, ya se contaba con modelos computaciones en la nube: Google Apps, correos, calendarios, drive,
            suite ofimática, contactos, redes sociales; además de planes de contingencia (
            <span className='caps'>DRP</span>), herramientas de servicios <span className='caps'>TIC</span> como Aranda
            (<span className='caps'>MS</span>-Asio) y SaaS. Al igual que con los soportes físicos, los soportes en la
            nube eran limitados y aún se requería crear un área de almacenamiento en red, que proporcionara un respaldo
            institucional para cada uno de los procesos misionales y de apoyo de la universidad (
            <span className='caps'>DNTIC</span>, 2015).
          </p>
        </BloqueTexto>
        <Resaltado>
          <>
            la pandemia puso de manifiesto las enormes brechas tecnológicas de los estudiantes, profesores y personal
            administrativo en el uso y acceso de las tecnologías
          </>
        </Resaltado>
        <BloqueTexto noPaddingTop={true}>
          <p>
            En cuanto a los sistemas de información, se planteó la necesidad de crear un modelo de consolidación y
            actualización de los sistemas de información de misión crítica: Sara, <span className='caps'>SIA</span> y
            Quipu. La administración de los sistemas de información evidenciaba las enormes brechas entre las sedes de
            la universidad. Para aquel momento, los entornos de los tres sistemas se encontraban focalizados en las
            sedes de Bogotá, Medellín y Manizales, con componentes Web y cliente-servidor. A pesar de que varias de las
            sedes contaban con bases de datos para los sistemas de información (Bogotá, Medellín, Manizales, Pereira,
            Amazonía y Orinoquía), era latente la necesidad de unificarlas y centralizarlas. Gran parte de esta
            fragmentación se debió al debilitamiento de la calidad de la conectividad y la pérdida de continuidad en la
            administración de soluciones institucionales (<span className='caps'>DNTIC</span>, 2015).
          </p>

          <p>
            Los resultados de la implementación del Peti de ese año fueron de gran importancia para la historia de las
            tecnologías digitales en la universidad. Pese a que no solucionaron todos los problemas estructurales,
            alrededor del desarrollo del plan hubo hitos importantes en temas de transformación digital, los cuales se
            describen a continuación.
          </p>

          <p>
            El primer hito fue la unificación y la ampliación de las bases de datos de sistemas de información
            misionales y de apoyo como <span className='caps'>SIA</span>, Sara y Quipu. Antes de la implementación del
            Peti, el <span className='caps'>SIA</span> tenía ocho versiones, Quipu doce y Sara cuatro. Después de la
            aplicación del plan, se unificaron y parametrizaron las bases de datos, mejorando la gobernabilidad sobre
            estos aplicativos. Todo gracias a la gestión de proveedores, el personal administrativo (dueños de los
            procesos) y de las oficinas de tecnología. En segundo lugar, se destacaron avances significativos en el
            despliegue de aplicaciones en arquitectura de nube, dentro de un sistema híbrido (DataCenter y Cloud). Por
            último, en cuanto a los servicios informáticos y de red, la universidad amplió la capacidad de
            infraestructura a nivel administrativo y de docencia. Con ello, se mejoraron las redes, los equipos de
            usuario final y servidores, de manera que se generó una estandarización de los servicios{' '}
            <span className='caps'>TI</span> (Umaña-Acosta, comunicación personal, 28 de agosto de 2023).
          </p>

          <p>
            Posteriormente, articulado con el Plan Estratégico, en 2017, se expandió la estructura interna de la{' '}
            <span className='caps'>DNTIC</span>, con la creación de seis grupos internos de trabajo en torno a las{' '}
            <span className='caps'>TI</span>. Estos grupos son: el sistema de gobierno, de planeación, de recursos, de
            gestión de desempeño, de gestión de servicios y de gestión de entrega de valor. Los grupos de trabajo
            permitían una especialización en las funciones, posibilitando, por ejemplo, definir los estándares,
            directrices y lineamientos técnicos para la gestión de las <span className='caps'>TIC</span> para la
            universidad. Además, propusieron innovaciones potenciales en materia de cambios tecnológicos y mejoras que
            pudieran soportar los servicios actuales y futuros. Un elemento fundamental de esta iniciativa fue el
            constante monitoreo del desarrollo de las soluciones tecnológicas, la supervisión de los procesos y el
            seguimiento de la ejecución presupuestal (Resolución 185 de 2017).
          </p>

          <p>
            En definitiva, la restructuración de la <span className='caps'>DNTIC</span> preparó el terreno para afrontar
            los retos del futuro en el camino a la apropiación tecnológica. Con la veeduría constante y la guía en la
            gestión de recursos y capacidades, los diferentes grupos de trabajo buscaban satisfacer las necesidades y
            solucionar los problemas planteados tan explícitamente en el Peti de 2016.{' '}
          </p>

          <p>
            Era claro que los procesos debían articularse con las personas y las tecnologías, de nada servía contar con
            la infraestructura si las personas no tenían las capacidades adecuadas y suficientes, y viceversa. Sumado a
            ello, la existencia de un grupo especializado en la llamada “entrega de valor” era significativo. Es decir,
            evaluar constantemente la coincidencia entre los proyectos prometidos y la ejecución, refiriéndose a la
            valoración constante de la capacidad de la <span className='caps'>DNTIC</span> de satisfacer las necesidades
            y objetivos que se requerían y se proyectaban en la universidad (Resolución 185 de 2017).
          </p>

          <p>
            Las estrategias de transformación digital profundizaron su conexión con los fines misionales y las visiones
            de la Universidad Nacional de Colombia. La apuesta por fomentar la excelencia en los procesos de formación,
            investigación e innovación social y tecnológica demostró la asombrosa capacidad de la comunidad
            universitaria de reinventarse. La transformación digital implicó, a su vez, reinventarse, en sus estructuras
            internas y en las personas que las integraban. En consecuencia, la transformación digital ha sido también
            una transformación social, en sus fines de alcanzar una sociedad equitativa, incluyente y justa. La
            universidad, como centro de cultura y conocimiento, ha tenido la responsabilidad de formar personas
            integras, responsables y autónomas. Estas personas deben convertirse en agentes de cambio, con conciencia
            ética y social, capaces de contribuir a la construcción nacional desde el respeto a la diferencia, la
            inclusión social y el reconocimiento de la riqueza y la diversidad de las regiones (Dirección Nacional de
            Planeación y Estadística, 2019).
          </p>
          <h3 className='text-2xl text-purple-base font-sans mb-10'>
            Estrategia de Transformación Digital 2019-2021: fundación de la Dirección Nacional de Estrategia Digital
          </h3>
          <p>
            En este punto, la consolidación de una cultura digital y la apropiación tecnológica significaba trabajar en
            favor de una universidad conectada con el país y el mundo a través de la cooperación y el intercambio de
            conocimiento, cultura y tecnología. ¿Qué significa todo esto? Que los proyectos y las políticas que rodean a
            las
            <span className='caps'>TIC</span> están vinculados a objetivos mayores. El Plan Global de Desarrollo (
            <span className='caps'>PGD</span>) de 2019 -2021, implementado durante la rectoría de Dolly Montoya, se
            declaraba como “Proyecto Cultural y Colectivo de Nación”. Efectivamente, el{' '}
            <span className='caps'>PGD</span>
            de 2019, se articulaba en torno a la conexión de la universidad con la sociedad, su capacidad transformadora
            y su responsabilidad a niveles socioculturales:
          </p>

          <blockquote>
            Avanzar, desde las nueve sedes, hacia estrategias institucionales que armonicen con sus funciones misionales
            y articulen el trabajo académico interdisciplinario y en red, de forma que aportemos miradas integrales para
            comprender los problemas de nuestra comunidad, llevando innovación social y tecnológica [a] los territorios.
          </blockquote>

          <p>
            En el mismo año, se ajustó la estructura a nivel nacional de la universidad, por tres razones relacionadas
            con la transformación digital directamente. Primero, para dar cumplimiento a lo dispuesto en el Decreto 1083
            de 2015 del Sector de Función Pública, una serie de lineamientos para la implementación de políticas
            públicas enfocadas al fortalecimiento institucional en materia de <span className='caps'>TIC</span> (Decreto
            1083 de 2015 de la Función Pública). En el caso de la Universidad Nacional, se centró en el fortalecimiento
            y la integración de los sistemas de información, para mejorar la gestión y la toma de decisiones basadas en
            evidencia. Segundo, para impulsar la anhelada transformación de la cultura organizacional y la gestión
            institucional planteada en el <span className='caps'>PGD UN</span> 2019-2021. Por último, para implementar
            el Peti actualizado de 2016, de la mano con el proyecto de Transformación Digital proyectado a 2034, nacido
            paralelamente con la Dirección Nacional de Estrategia Digital (Acuerdo 316 de 2019).
          </p>

          <p>
            La restructuración de 2019 dio un espacio privilegiado a las responsabilidades públicas de la universidad,
            donde el fortalecimiento instruccional necesariamente requería de las competencias técnicas, experienciales
            y logísticas, en materia de tecnologías de la información y las comunicaciones. En este sentido, la
            universidad debía implementar planes, estrategias y políticas que le permitieran cumplir sus funciones y
            acreditarse en sus distintos niveles.
          </p>

          <p>
            Uno de los resultados de este proceso fue la creación de la Dirección Nacional de Estrategia Digital (
            <span className='caps'>DNED</span>). A pesar de que el concepto de <em>digital</em> ya hacía parte del
            lenguaje académico y cotidiano de la comunidad universitaria, solo hasta 2019 se comenzó a hablar
            institucionalmente del concepto de <em>cultura digital</em>, término que empezó a estar presente en las
            políticas y planes de la universidad. Puede considerarse que la <span className='caps'>DNED</span> es el
            organismo que unifica todos los planes, políticas y prácticas relacionadas con las{' '}
            <span className='caps'>TIC</span>, con enfoque administrativo y académico. La{' '}
            <span className='caps'>DNED</span> surge como la heredera de las políticas y funciones de la{' '}
            <span className='caps'>DNTIC</span> en su misión de centralizar el gobierno{' '}
            <span className='caps'>TIC</span>, en una gran dirección nacional (Acuerdo 316 de 2019).
          </p>

          <p>
            Esta dirección tiene la responsabilidad de asesorar al <span className='caps'>CSU</span>, la rectoría, los
            órganos de gobierno y al Comité de Estrategia Digital en el diseño, la formulación y el establecimiento de
            políticas, estrategias y prácticas en materia tecnológica de <em>cultura digital</em>. Esto significa que
            sus funciones trascienden los aportes netamente técnicos, para insertarse en las prácticas culturales de
            toda la comunidad universitaria, una apuesta por transformar las experiencias de las personas en sus formas
            de relacionarse con el mundo y las nuevas tecnologías —recurso 6 (Acuerdo 113 de 2013).
          </p>
        </BloqueTexto>
        <Podcast
          linkSpotify={'4uM5VjxFIuo6wH8RRuz26o'}
          title={'Conversación con el exdirector de la DNED, el profesor Gustavo Pérez Zapata'}
          linkWeb={
            'https://podcastradio.unal.edu.co/detalle/t1-e1-la-transformacion-digital-en-la-universidad-nacional-de-colombia'
          }
          linkIvoox={'https://go.ivoox.com/rf/126082782'}
        />
        <BloqueTexto>
          <p>
            Con la creación de la <span className='caps'>DNED</span>, también comenzó a hablarse institucionalmente de{' '}
            <em>transformación digital</em>, entendida como una necesidad e impulso por implementar el plan estratégico
            de tecnologías y sistemas de información. Como generadora de valor público, habilitaría las capacidades
            tecnológicas que permitirían la evolución de la universidad en torno a sus estrategias y modelos de gestión.
            Encabezando un proyecto de transformación de tales dimensiones, la <span className='caps'>DNED</span> debe
            orientar a las diferentes instancias universitarias en los procesos de arquitectura tecnológica en materia
            de software, hardware, redes y telecomunicaciones; además de dirigir los proyectos y servicios{' '}
            <span className='caps'>TIC</span>, a través de la definición de los lineamientos sobre tecnologías de la
            información y las comunicaciones, así como el establecimiento de relaciones con entidades externas a la
            institución. Por su parte, las Oficinas de Tecnologías de la Informática y las Comunicaciones, establecidas
            desde 2013 en las sedes Bogotá, Medellín, Manizales y Palmira, fueron suprimidas. Esto se hizo, atendiendo
            el interés de integrarlas a la <span className='caps'>DNED</span>, según lo establecido en el Acuerdo 316 de
            2019, por medio del cual se modificó “la estructura interna académico-administrativa del Nivel Nacional de
            la Universidad Nacional de Colombia”.
          </p>

          <p>
            En el camino hacia la adopción de una cultura digital orientada constantemente al futuro, la{' '}
            <span className='caps'>DNED</span> asumió la tarea de proponer innovaciones potenciales, cambios
            tecnológicos y mejoras que pudieran soportar eficazmente los servicios actuales y futuros de{' '}
            <span className='caps'>TI</span>. Por esta razón, se conformaron cinco dependencias adscritas, que han
            permitido desarrollar eficientemente todas estas políticas tecnológicas: la Oficina de Arquitectura
            Organizacional, la Oficina de Gestión de Información, la Oficina de Gobierno y Gestión Administrativa, la
            División Universidad Laboratorio (UNALab) y la División de Gestión Tecnológica (Acuerdo 316 de 2019). Cada
            una de estas dependencias se explica en las siguientes líneas.
          </p>
          <div className='pl-14'>
            <p>
              <em>Oficina de Arquitectura Organizacional</em>. Tiene la función de proponer políticas, estándares e
              iniciativas de arquitectura organizacional de <span className='caps'>TI</span>, de conformidad con los
              lineamientos de estrategia digital establecidos. Su objetivo es establecer de forma eficaz los estándares
              de dicha arquitectura en todas las sedes. Esta oficina es, además, la nueva responsable de actualizar el
              plan estratégico de <span className='caps'>TI</span>, alineado con los objetivos de la universidad, junto
              con el mapa de ruta, considerando los entornos actuales. La oficina debe estar en constante observación de
              la universidad en su conjunto, pues precisa alinear la arquitectura organizacional con los procesos
              institucionales (Resolución 318 de 2020).
            </p>

            <p>
              <em>Oficina de Gestión de Información</em>. Está a cargo de diseñar los planes y modelos de planeación y
              gobierno de componentes de información, para garantizar la interoperabilidad, la seguridad y la calidad de
              la información institucional. Esta dependencia tiene la responsabilidad de observar el ciclo de vida de
              los datos que circulan en la institución, a fin de implementar estrategias que cumplan los criterios de
              seguridad de la universidad.
            </p>

            <p>
              <em>Oficina de Gobierno y Gestión Administrativa</em>. Brinda orientación a las instancias directivas de
              la universidad en el diseño de políticas, lineamientos, estrategias e iniciativas para llevar a cabo el
              seguimiento y la evaluación en asuntos <span className='caps'>TIC</span> y la transformación digital. Su
              papel es fundamental, pues se encarga del mantenimiento de acuerdos de gobierno{' '}
              <span className='caps'>TI</span>, es decir la protección de las correctas prácticas en el uso de los
              recursos tecnológicos. Para ello, debe analizar e identificar los factores del entorno y sus tendencias,
              además de indagar sobre la aplicabilidad de regulaciones externas — obligaciones legales y contractuales
              en relación con el gobierno de tecnologías de la información—.
            </p>

            <p>
              <em>División Universidad Laboratorio</em>. Esta es la dependencia más cercana a la comunidad académica, en
              la medida en que se encarga de comunicarse con los docentes, los estudiantes, los investigadores y el
              personal administrativo, tanto para responder a las necesidades e iniciativas tecnológicas, como para
              incentivar procesos de innovación y emprendimiento. Para ello, debe cumplir su función como observatorio
              tecnológico de las nuevas tendencias, tanto técnicas como pedagógicas y de estrategia digital. Su accionar
              busca cumplir los objetivos misionales de la universidad en cuanto al impacto en el desarrollo territorial
              y el bienestar de las comunidades del país.
            </p>

            <p>
              La división, conocida también como UNALab, ha emprendido, desde 2020, importantes labores para la
              adaptación y aprovechamiento de las tecnologías digitales. UNALab se convirtió en un gestor estratégico de
              nivel nacional, para la transformación digital. A través de la articulación con la comunidad
              universitaria, ha potenciado las capacidades internas de la institución y promovido la resolución de retos
              y necesidades institucionales y académicas (Cómbita-Pulido <em>et al.</em>, 2023).
            </p>

            <p>
              Con su enfoque en investigación y extensión, UNALab ha implementado experiencias novedosas en la
              universidad, para articular la realidad material con el mundo digital. Un ejemplo de esto es el Maratón
              Virtual de Co-creación, realizado en 2020, que abordó cinco retos instruccionales con la participación de
              docentes, estudiantes y grupos de investigación. Esta iniciativa articuló la <em>innovación abierta</em>{' '}
              con el uso de tecnologías digitales. Los cinco retos que se trataron en este evento fueron la arquitectura
              organizacional, el acceso editorial con tecnologías digitales, la red de egresados, la gestión inteligente
              del territorio y las bibliotecas en Palmira (Universidad Nacional de Colombia, 2020).
            </p>

            <p>
              Otro ejemplo de aportes novedosos fue el lanzamiento de la primera Cátedra Nacional de Transformación
              Digital en 2021. Durante las sesiones de esta cátedra, se han revisado ejemplos de transformación digital
              para visibilizar la importancia de convertir procesos análogos y objetos físicos en digitales, para
              potencializar su utilidad (<span className='caps'>LAB101</span> Unal, 2021).
            </p>

            <p>
              Actualmente, UNALab cuenta con iniciativas y proyectos prometedores que fomentan y fortalecen la cultura
              digital en la universidad, principalmente centrados en un modelo inter-sedes, en diálogo con las
              tendencias tecnológicas y las iniciativas de la Cuarta Revolución Industrial. Entre estas iniciativas, se
              encuentran los talleres de cultura digital para toda la comunidad universitaria; la medición de madurez
              digital para visibilizar el desarrollo de las diferentes sedes y facultades; la creación de Aulas STEAM en
              las sedes Medellín, Bogotá y Tumaco, con la misión de replicar el modelo del Aula STEM – Laboratorio de
              Fabricación (FabLab) de la Sede Manizales; el diseño de estrategias para visibilizar y cerrar las brechas
              de género; y el desarrollo de aplicaciones y entornos virtuales de aprendizaje inmersivo, para fortalecer
              la comunicación, el trabajo y el bienestar de la comunidad Unal —recurso 7 (UNALab, 2023){' '}
              <sup
                data-tooltip-id='tooltip'
                data-tooltip-html={`Al respecto, ver el Capítulo 2 de <em>Transformación digital. Experiencias colectivas,</em> donde se narra cómo UNALab potencia las capacidades internas en la Universidad Nacional de Colombia (<a href="https://repositorio.unal.edu.co/handle/unal/83373" style='cursor:pointer;' target='_blank'>https://repositorio.unal.edu.co/handle/unal/83373).</a>`}
              >
                1
              </sup>
              .
            </p>
          </div>
          <Tooltip
            openOnClick={true}
            clickeable={true}
            id='tooltip'
            style={{ maxWidth: '600px', pointerEvents: 'all' }}
          />
        </BloqueTexto>

        <Podcast
          linkSpotify={'4AzdLDalrrpZ9xwsiyZIS1'}
          linkWeb={
            'https://podcastradio.unal.edu.co/detalle/t1-e2-la-cultura-digital-en-la-universidad-nacional-de-colombia'
          }
          linkIvoox={'https://go.ivoox.com/rf/126459051'}
          title={
            'Charla con la profesora y coordinadora de la división UNALab, Liz Karen Herrera Quintero, acerca de la Cultura Digital en la Unal.'
          }
        />
        <BloqueTexto>
          <p>
            <em>División de Gestión Tecnológica</em>. Es la heredera de las oficinas <span className='caps'>TIC</span>{' '}
            de las sedes andinas, y sus funciones se reparten en cuatro secciones, distribuidas en varios territorios
            del país: la Sección de Seguridad de la Información, en la Sede Manizales; la Sección de Infraestructura y
            Gestión de Servicios de la Información, en la Sede Bogotá; la Sección de Aplicaciones, de la Sede Medellín;
            y la Sección de Identidades Digitales, de la Sede Palmira. Todas se acompañan de los profesionales en{' '}
            <span className='caps'>TI</span> de las demás sedes de presencia nacional.
          </p>

          <p>
            Esta división cumple varias tareas en torno a la coordinación y el seguimiento de{' '}
            <span className='caps'>TI</span>, elaborando planes de diseño para la gestión tecnológica y presentando, así
            también, propuestas de funcionamiento e inversión. La articulación entre las secciones de sedes del
            territorio nacional brinda la posibilidad de identificar las necesidades tecnológicas a nivel de sedes,
            facultades, centros e institutos, convirtiéndose en la heredera de las fragmentadas oficinas{' '}
            <span className='caps'>TIC</span> de 2013 (Resolución 318 de 2020).
          </p>

          <p>
            Desde cierto ángulo, esta división se ha erigido como líder en la implementación de políticas tecnológicas
            en la universidad. Por un lado, se encarga de presentar la propuesta presupuestal de funcionamiento e
            inversión para la gestión tecnológica, considerando las necesidades tecnológicas de las sedes de la
            universidad. Además, elabora los planes, diseños y propuestas para la gestión tecnológica, incluyendo las
            normativas y reglamentos relacionados. Por otra parte, propone, controla y verifica la implementación de las
            estrategias a cumplir de acuerdo con los criterios de calidad, proyectando los planes de crecimiento de las
            plataformas tecnológicas y supervisando los servicios de <span className='caps'>TI</span> para la comunidad
            universitaria.
          </p>

          <p>
            En ese sentido, esta división ha logrado importantes avances en los servicios de conectividad a internet
            para varias de las sedes y la conectividad de usuarios a los aplicativos. Además, ha implementado un esquema
            a nivel nacional para el soporte de usuarios, <em>webinares</em> de seguridad informática para las nueve
            sedes e inversiones en equipos de seguridad perimetral y antivirus de última generación (Obando-Montúfar,
            2023).
          </p>

          <p>
            Para apoyar las labores de las oficinas y divisiones de la <span className='caps'>DNED</span>, en 2020, se
            creó el Comité Nacional de Estrategia Digital como órgano estratégico responsable a nivel institucional de
            la correcta planeación, evaluación y seguimiento de estrategias, políticas y lineamientos de tecnologías de
            la información y las comunicaciones en el proceso de transformación digital de la universidad. Sus funciones
            se basan en la aprobación, verificación y definición de las políticas y planes en materia de{' '}
            <span className='caps'>TIC</span>. Los miembros que lo conforman son la rectora, los vicerrectores de sede,
            algunos representantes de transformación digital y <span className='caps'>TI</span>, y el director de la{' '}
            <span className='caps'>DNED</span> (Resolución 614 2020).
          </p>

          <p>
            Antes de la llegada de la pandemia del covid-19 en el año 2020, esa que impondría de forma obligatoria un
            tipo de educación virtual, la universidad ya había reflexionado profundamente sobre el impacto y los
            alcances de las tecnologías digitales en la sociedad. En 2019, se contemplaba la transición hacia una
            “cultura de la transformación digital”. La transformación organizacional y su proyecto digital resultaban
            fundamentales para lograr la articulación de las funciones misionales y la gestión académica de una
            institución pública y el Estado.
          </p>

          <p>
            De ese modo, se propuso pensar la universidad en términos de cultura digital, desde la integración de los
            procesos de docencia, investigación, extensión y administrativos de apoyo, mediante el uso de tecnologías
            digitales, con el objetivo de generar nuevos procesos formativos, lograr vías de comunicación contemporáneas
            y, en último término, posibilitar la existencia de una universidad abierta, innovadora y en red conectada
            con el mundo (Dirección Nacional de Planeación y Estadística, 2019, pp. 141-142).
          </p>
        </BloqueTexto>
        <Subtitulo>Experiencias de cultura y transformación digital</Subtitulo>

        <ScrollImage
          img={'./img/figura_15.jpg'}
          caption={
            <>
              <p>
                <strong>Figura 15.</strong> Clínica de pequeños animales, Bogotá.
              </p>
              <p>Fuente: Archivo Fotográfico Unimedios (Brandon Pinto/2021/Clínica de Pequeños Animales).</p>
            </>
          }
          img2={'./img/figura_16.jpg'}
          caption2={
            <>
              <p>
                <strong>Figura 16.</strong> Clínica de pequeños animales, Bogotá.
              </p>
              <p>Fuente: Archivo Fotográfico Unimedios (Brandon Pinto/2021/Clínica de Pequeños Animales).</p>
            </>
          }
        />
        <BloqueTexto>
          <p>
            A pesar de que la transformación digital se institucionalizó en la Universidad Nacional de Colombia en 2019,
            la historia que hemos recorrido deja claro que, desde las décadas anteriores, la universidad, su estructura
            física y las personas que la han habitado venían transformándose por y para las tecnologías digitales. La
            transformación digital comenzó mucho tiempo antes, podría afirmarse que, desde mediados del siglo{' '}
            <span className='caps'>XX</span>, con la irrupción de las ciencias computacionales en las instituciones
            educativas colombianas. A pesar de ello, nombrar las cosas es clave, porque al nombrarlas se les da sentido
            y se les permite estar en el centro de la discusión (figuras 15-16).
          </p>

          <p>
            Es importante considerar que el concepto de <em>transformación digital</em> no solo implica un cambio de las
            tecnologías, nise limita a la llegada de máquinas digitales o la presencia de grandes redes que transportan
            información. Más bien, la transformación digital es, principal y esencialmente, una transformación cultural
            y, por tanto, un fenómeno que tiene que ver más con las personas que con las máquinas en sí.
          </p>

          <p>
            A pesar de que las tecnologías digitales operan en un plano virtual que, incluso en la actualidad, es
            difícil de comprender, siempre hay personas involucradas, tanto para que tales tecnologías funcionen, como
            para hacer uso de ellas. Por esto, la transformación digital en la Universidad Nacional de Colombia ha sido
            posible gracias a la participación y la agencia activa de personas, muchas de ellas aún vinculadas a la
            comunidad universitaria: docentes, estudiantes, investigadores, personal administrativo y contratistas, etc.
            En este libro, hemos tenido la oportunidad de destacar algunas de esas voces y comprender las diferentes
            visiones sobre la tecnología y su papel en la sociedad y, particularmente, dentro de la mayor universidad
            pública de Colombia.
          </p>

          <p>
            El <span className='caps'>PDG</span> de 2022 plantea que la transformación digital de la Universidad
            Nacional de Colombia
          </p>

          <blockquote>
            constituye un proceso de cambio cultural en el que la tecnología es apenas una herramienta para emprender
            innovaciones pedagógicas y de investigación, además de cambios fundamentales en la forma como la universidad
            se relaciona con los territorios de su país y con el mundo. La transformación digital nos permite consolidar
            formas de organización más descentralizadas, flexibles y livianas, tomar decisiones horizontales y
            democráticas, y acceder a modos de trabajo por procesos más eficientes y efectivos. (Universidad Nacional de
            Colombia, 2022a, p. 15)
          </blockquote>

          <p>
            La universidad se piensa en un contexto más amplio, no solo en su desarrollo académico, sino también en su
            interconexión con los demás seres humanos y los otros seres que habitan el planeta. En ese sentido, se
            adquieren responsabilidades éticas, identitarias y prácticas para afrontar las múltiples crisis que enfrenta
            el planeta, en términos económicos, ecológicos, educativos, democráticos y de salud. Así las cosas, el uso
            de las tecnologías digitales se vuelve transversal a la solución de estos problemas —figura 17 (Universidad
            Nacional de Colombia, 2022a).
          </p>
        </BloqueTexto>
        <ScrollImage
          img={'./img/figura_17.jpg'}
          caption={
            <>
              <p>
                <strong>Figura 17.</strong> Covid-19 Universidad Nacional de Colombia.
              </p>
              <p>Fuente: Archivo Fotográfico Unimedios (Brandon Pinto/2020/Laboratorio 1).</p>
            </>
          }
        />
        <BloqueTexto>
          <p>
            La pandemia ocasionada por el covid-19 recrudeció problemáticas sociales preexistentes. En esta
            circunstancia, las universidades fueron algunas de las instituciones que más tuvieron que reflexionar sobre
            sus prácticas en medio de la naciente crisis. Además de los problemas en materia económica y de salud
            pública, la pandemia afectó el núcleo emocional de las sociedades y aceleró la necesidad de repensar y
            construir nuevas respuestas institucionales en todos los frentes. Este evento evidenció tanto las
            potencialidades como las debilidades del uso de las tecnologías como herramienta para la formación académica
            y la importancia de reflexionar sobre la relación entre la presencialidad y la virtualidad. Sumado a ello,
            en los últimos años se ha tomado conciencia de la fragilidad del Estado en proveer servicios fundamentales
            como la salud y la educación (Universidad Nacional de Colombia, 2022a, pp. 20-120).
          </p>
          <p>
            De ese modo, durante la pandemia se vieron dos caras del fenómeno digital. Por un lado, se fortalecieron las
            redes de universidades latinoamericanas, con lo que se demostró que, a partir del intercambio de
            experiencias y en diálogo con los Gobiernos, la ciencia, la tecnología y la innovación han sido
            fundamentales para superar el covid-19, sus efectos y la pospandemia. Gracias a los adelantos de más de
            medio siglo en materia de tecnologías digitales, la universidad contaba con bases tecnológicas y culturales
            para afrontar la cruenta crisis. Como ejemplo de lo anterior, hubo un importante apoyo al Hospital
            Universitario Nacional (<span className='caps'>HUN</span>), con herramientas como TeleUci y Telemedicina; y
            se habilitó el
            <em>call center</em> que atendía las veinticuatro horas del día, para atender a la comunidad universitaria
            en apoyo psicológico. Además, se logró que el 85 % de los 7500 cursos semestrales se impartieran en
            modalidad virtual. Asimismo, se expidieron cerca de 20 000 diplomas de grado con tecnología{' '}
            <em>blockchain</em> y se desarrollaron aplicativos como <em>#estamoscontigo Unal</em>, para el proceso de
            retorno seguro a las sedes universitarias (Universidad Nacional de Colombia, 2022a, p. 88).
          </p>

          <p>
            Por otro lado, la pandemia puso de manifiesto las enormes brechas tecnológicas de los estudiantes,
            profesores y personal administrativo en el uso y acceso de las tecnologías, una muestra de las falencias de
            la universidad durante la crisis. Por ejemplo, con el paso de los meses, se demostró la necesidad vital de
            acceder a un buen servicio de internet y una infraestructura académica óptima, elemento desigual entre las
            distintas comunidades académicas de las sedes. La pandemia obligó a la universidad a dar un gran salto hacia
            la educación en ambientes virtuales e híbridos, al tiempo que evidenció las disparidades entre territorios,
            sedes y personas, materializadas en la preocupante deserción, problemas de aprendizaje, exclusión y
            dificultades socioeconómicas, entre otras —recurso 8 (Universidad Nacional de Colombia, 2022a, p. 22).
          </p>
        </BloqueTexto>
        <Podcast
          title={'Recurso 5. ¿Existen desigualdades de género en la transformación digital de la Universidad Nacional?'}
          subtitle={'Una conversación con Mónica López, contratista de UNALab.'}
          src={'./audio/recurso_8_desigualdad.mp3'}
        />
        <BloqueTexto>
          <p>
            Con la crisis, se demostró que la universidad no solamente debía ocuparse de la formación académica de los
            estudiantes, con conocimientos y competencias adecuadas, sino también de la necesidad de garantizar la
            sostenibilidad (económica, educativa, social y cultura) de la comunidad universitaria, con calidad durante
            todo el proceso educativo. En definitiva, la pandemia relució el compromiso de la universidad en generar
            espacios de pertenecía y cohesión social que diluyan las brechas sociales, apostando por acciones éticas,
            equitativas y democráticas que impulsen la inclusión, la equidad de género, el reconocimiento de la
            diversidad, la integración cultural y el bienestar colectivo. Fruto de esta reflexión, la conectividad y la
            educación se reconocen hoy como elementos inseparables, como bien público social y como un derecho humano y
            universal y, por tanto, un deber del Estado (Universidad Nacional de Colombia, 2022a, p. 22).
          </p>

          <p>
            Finalmente, la universidad ha venido asimilando los aprendizajes de la pandemia en la exploración de sus
            posibilidades en el mundo virtual. Asimismo, ha destacado el carácter fundamental de la presencialidad y el
            uso de los espacios físicos para la formación integral de las personas.
          </p>

          <p>
            Bajo estas preocupaciones y nuevas visiones sobre los impactos de las tecnologías digitales, se
            estructuraron en 2022 el Plan Estratégico Institucional (Plei) 2034 y el Peti 2022-2024, ambos alineados con
            la Estrategia de Transformación Digital con visión 2034 y con el <span className='caps'>PDG</span> 2022-
            2024. El Plei nació en 2017, con el Acuerdo 2038 del
            <span className='caps'>CSU</span>, régimen de planeación y evaluación permanente de resultados que sentó las
            bases para dar continuidad y coherencia a planes, estrategias y procesos institucionales. Este plan es una
            carta de navegación, delineada por ejercicios prospectivos a 2034 (Universidad Nacional de Colombia, 2022b).
          </p>

          <p>
            Por su parte, el Peti 2022-2034 se presenta como una estrategia para consolidar el gobierno y gestión de{' '}
            <span className='caps'>TI</span>, como base para la transformación digital de la Universidad Nacional de
            Colombia. Su propuesta se centra en fortalecer el modelo de capacidades de arquitectura organizacional,
            proyectos y entrega de servicios de tecnologías de la información y arquitectura empresarial, así como la
            implementación de productos y servicios de base tecnológica, orientados al usuario digital. Con esto se
            busca empoderar a la comunidad universitaria y satisfacer las necesidades informáticas de la institución.
            Como herramienta estratégica de la <span className='caps'>DNED</span>, este Peti se fundamenta en tres
            agentes de cambio estratégico: el usuario digital de la Unal, el análisis de datos de manera ética, y la
            generación de conocimientos —figuras 18-19 (<span className='caps'>DNED</span>, 2022, pp. 15-32).
          </p>
        </BloqueTexto>
        <ScrollImage
          img={'./img/figura_18.jpg'}
          caption={
            <>
              <p>
                <strong>Figura 18.</strong> Transpórtate al futuro con robótica disruptiva.
              </p>
              <p>
                Fuente: Archivo Fotográfico Unimedios (Jeimi Villamizar/2022/Transpórtate al Futuro con Robótica
                Disruptiva).
              </p>
            </>
          }
          img2={'./img/figura_19.jpg'}
          caption2={
            <>
              <p>
                <strong>Figura 19.</strong> Transpórtate al futuro con robótica disruptiva.
              </p>
              <p>
                Fuente: Archivo Fotográfico Unimedios (Jeimi Villamizar/2022/Transpórtate al Futuro con Robótica
                Disruptiva).
              </p>
            </>
          }
        />
        <BloqueTexto>
          <p>
            A su vez, la Estrategia de Transformación Digital de la Universidad plantea un modelo con el cual se han
            gestado diversos programas y proyectos que contribuyen a la madurez digital de la institución. A
            continuación, se mencionan algunas iniciativas, lideradas por las divisiones de la{' '}
            <span className='caps'>DNED</span>, alineadas con esta estrategia, principalmente, las que fortalecen la
            cultura digital y han experimentado un avance significativo:
          </p>
          <ul className='pl-10'>
            <li>
              — Desarrollo y escalamiento institucional del sistema Horus Unal, para la visualización de la capacidad
              investigativa y la producción científica de la Universidad.
            </li>
            <li>
              — Despliegue de la Estrategia de Transformación Digital y el Cierre de la Brecha de Género en la Unal.
              Este programa lo ha desarrollado la División Universidad Laboratorio desde 2022, por medio de la medición
              y seguimiento de indicadores, así como el desarrollo de cursos virtuales (
              <span className='caps'>OVA</span>) para el cierre de brechas en Stem (recurso 9).
            </li>
            <li>
              — Desarrollo de plataformas para experiencias de aprendizaje inmersivas con el apoyo de <em>spin off</em>{' '}
              de la Universidad, como Labs 360+ Unal, App de Transformación Digital Unal y el sistema FabLab Unal.
            </li>
            <li>
              — La Cátedra Nacional de Transformación Digital. Una asignatura ofertada en las nueve sedes, para
              estudiantes de pregrado. Es un espacio académico propicio de revisión, reflexión y análisis de múltiples
              entornos de la transformación digital, para conocer las estrategias y experiencias de los sectores público
              y privado en el país y el mundo.
            </li>
            <li>
              — El Clúster Aulas Steam intersedes, un proyecto que está implementándose en Bogotá, Medellín y Tumaco,
              liderado por la División Universidad Laboratorio. Tiene como objetivo establecer una red colaborativa de
              laboratorios para fortalecer diversas habilidades. Este proyecto replica y enriquece el modelo del Aula
              Steam-Laboratorio de Fabricación (FabLab) de la Sede Manizales, centrado en los ejes misionales de
              docencia, extensión e investigación (UNALab, 2023).
            </li>
            <li>
              — Despliegue del “Tablero de comando de madurez digital”, un proyecto de la División Universidad
              Laboratorio, para visibilizar el desarrollo de las diferentes sedes y facultades, en el cumplimiento de
              los procesos de transformación digital inter-sedes, así como evidenciar algunas experiencias y prácticas
              exitosas de la Universidad Nacional de Colombia.
            </li>
            <li>
              — Licenciamiento y capacitaciones en el uso de Google Workspace for Education Plus, para toda la comunidad
              universitaria, a cargo de la Oficina de Gobierno y Gestión Administrativa.
            </li>
            <li>
              — Diseño del modelo y la política para la gestión del dato y la información con visión a 2034, a cargo de
              la Oficina de Arquitectura Organizacional.
            </li>
            <li>
              — Buenas prácticas en ciberseguridad, dirigidas a la comunidad universitaria, por medio de{' '}
              <em>webinares</em> con expertos internacionales y nacionales de alto nivel, liderado por la Oficina de
              Gobierno y Gestión Administrativa (Informe gestión <span className='caps'>DNED</span>, 2022).
            </li>
          </ul>
        </BloqueTexto>
        <Podcast
          title={
            'Recurso 6. Cómo la Universidad Nacional de Colombia está apostando por la innovación, utilizando los datos para la toma de decisiones.'
          }
          src={'./audio/recurso_9_innovacion.mp3'}
        />
        <BloqueTexto>
          <p>
            Las proyecciones de los planes a 2034 plantean la identificación y el uso de tecnologías emergentes para el
            sector educativo, en tres niveles: (1) las tecnologías base, es decir, las tecnologías de la comunicación y
            la información; (2) las tecnologías habilitadoras, es decir, internet, la nube, el <em>big data</em>, las
            aplicaciones, la robótica, las inteligencias artificiales (<span className='caps'>IA</span>), el{' '}
            <em>blockchain</em>, etc.; y (3) las tecnologías transformadoras, es decir, la realidad aumentada, la
            realidad virtual y mixta y el internet de las cosas. Esta visión a futuro no solo evidencia el anhelo de
            usar las tecnologías digitales más recientes, sino la apuesta por integrar, de forma más estrecha, la
            realidad con lo digital, como herramienta para mejorar procesos. Ejemplo de esto es la estrategia de campus
            inteligente para la resignificación de espacios y la articulación a ecosistemas para el desarrollo
            territorial (<span className='caps'>DNED</span>, 2022, pp. 32-35).
          </p>

          <p>
            Ahora bien, parte importante de los avances en materia de cultura digital se han llevado a cabo gracias a
            las alianzas entre la universidad y otras instituciones y dependencias gubernamentales. Uno de los ejemplos
            más ilustrativos es el caso de los Laboratorios Digitales, una iniciativa que se dio en Bogotá, rondando el
            2013, que pretendía promover el desarrollo de ecosistemas digitales regionales, mediante el apoyo a la
            ciencia, la tecnología, la innovación y el emprendimiento (<em>Inauguración ViveLab Bogotá 2013</em>, 2013).
          </p>

          <p>
            En 2013 nace ViveLab Bogotá, fruto de una alianza entre la Universidad Nacional de Colombia, la Alcaldía
            Mayor de Bogotá, la Alta Consejería Distrital de <span className='caps'>TIC</span>, el Ministerio de
            Tecnologías de la Información y las Comunicaciones, Colciencias, <span className='caps'>ESIC</span>enter
            Siner
            <span className='caps'>TIC</span> Andino y Señal Colombia Sistema de Medios Públicos. ViveLab nació como un
            laboratorio de innovación que pretendía articular al Gobierno Nacional, las empresas, los ciudadanos y las
            universidades para promover soluciones de impacto social y económico con el uso de tecnologías. En su
            materialidad, este laboratorio ha sido un centro de entrenamiento y emprendimiento, para el desarrollo de
            contenido y aplicaciones digitales, iniciando su funcionamiento en las instalaciones de Señal Colombia (
            <em>InTIColombia</em>, 2019).
          </p>

          <p>
            La experiencia de ViveLab fue heredada por <span className='caps'>LAB101</span> Unal años después,
            posicionándose como un laboratorio de innovación integrado por profesionales de distintas áreas del
            conocimiento que construyen soluciones tecnológicas para transformar de manera positiva la realidad de las
            personas, las organizaciones públicas y privadas (
            <em>
              <span className='caps'>LAB101</span> Unal, contenidos pedagógicos al alcance de todos
            </em>
            , 2022). Las labores de este laboratorio han sido variadas y de gran impacto. Por ejemplo, con la
            participación de <span className='caps'>LAB101</span> se diseñó una plataforma para que más de veinte mil
            bogotanos participaran en el Plan de Desarrollo Distrital entre 2016 y 2019 (Martínez-Medina, 2023). Además,
            ha participado en la construcción de talleres y aulas virtuales hechos especialmente para la ciudadanía
            (niños, jóvenes y adultos) donde se interconecta el empoderamiento de la ciudadanía en torno a sus derechos
            y deberes y el uso de las tecnologías emergentes.
          </p>

          <p>
            <span className='caps'>LAB101</span> ha conectado a la universidad con el sector público, mediante el uso de
            tecnologías digitales, aportando al desarrollo de la cultura digital y poniendo en el centro de la discusión
            la utilización de las tecnologías por parte de todas las personas. Esto se ha logrado, por ejemplo, al
            enfocarse en el pensamiento de diseño: ¿cómo diseñar plataformas virtuales para que las personas interactúen
            con la realidad de forma comprensible? Se trata de un esfuerzo por crear una red de transformación digital
            entre las personas, y los distintostipos de hardware y software —recurso 10 (García-Camargo, 2023).
          </p>
        </BloqueTexto>
        <ScrollVideo url='https://youtu.be/w4UeMPSTuR8' type='video/mp4' />
        <Subtitulo>Ilusiones y retos tecnológicos en el camino a la transformación digital</Subtitulo>
        <BloqueTexto>
          <p>
            Las reflexiones en torno a la transversalidad de las tecnologías digitales en la vida de las sociedades del
            siglo <span className='caps'>XXI</span> no provienen únicamente de los planes y políticas institucionales,
            también hacen parte de las visiones inter y transdiciplinarias de las personas que han participado del
            proceso de cambio tecnológico y cultural en la universidad. Las problemáticas que se analizan en los{' '}
            <span className='caps'>PGD</span>, los Peti y los Plei pueden comprenderse de manera más detallada, al
            acercamos a las voces de las personas que trabajan, piensan e imaginan en las dependencias de tecnologías
            digitales de la universidad: profesores, ingenieros, diseñadores, arquitectos, programadores,
            administradores y muchos más.
          </p>

          <p>
            Un primer acercamiento podría ser a través de un elemento clave en la interacción entre las personas y las
            tecnologías digitales: las interfaces gráficas. Mónica Forero Díaz estudió diseño en la Unal, a comienzos de
            la década 1990 y, a partir de 1995, comenzó a trabajar con tecnologías digitales en la creación de
            interfaces gráficas, convirtiéndose en docente de la Escuela de Diseño Gráfico desde 2010. El reto de Mónica
            era enorme: traducir un lenguaje computacional a un lenguaje gráfico que las personas pudieran utilizar.
            Aunque las máquinas existían, la gente no podía usarlas como las empresas buscaban en su momento.
          </p>

          <p>
            El mundo de la década de 1990 era el de los impresos, y el campo laboral del diseño encontraba su fuerte en
            la publicidad. No obstante, Mónica se conectó al diseño y al mundo digital, en 1995, cuando se abrió una
            convocatoria para crear contenido multimedia para <span className='caps'>CD</span> de cuentos infantiles y
            de aves de Colombia. Posteriormente, se ocupó de realizar las primeras páginas web de empresas colombianas;
            una combinación entre logos, páginas <span className='caps'>HTML</span> e hipervínculos. Esos eran los
            comienzos, cuando apenas se reconocía la importancia de los enfoques interdisciplinarios en temas
            informáticos y computacionales (Forero-Díaz, comunicación personal, 29 de agosto de 2023).
          </p>

          <p>
            Tiempo después, Mónica participó en el proyecto de ViveLab Bogotá, en 2015, mezclando el diseño con la
            investigación y las tecnologías digitales. El reto, incluso en el siglo <span className='caps'>XXI</span>,
            consistía en integrar el área de diseño visual con una comprensión del modo de uso que deseaban los usuarios
            en las plataformas. Es decir, buscaba ofrecer una solución visual a la necesidad funcional al momento de
            interactuar con la máquina. Uno de los mayores obstáculos fue, precisamente, poder adelantar investigaciones
            en el diseño, ya que la comunidad tradicional del diseño no lo consideraba necesario. Por fortuna, las
            iniciativas como los laboratorios digitales facilitaron el encuentro entre saberes, perspectivas y
            necesidades (Forero-Díaz, comunicación personal, 29 de agosto de 2023).
          </p>

          <p>
            Así las cosas, es claro que hay una limitación, la representación de las plataformas digitales: comenzando
            por el apoyo a las investigaciones y los enfoques interdisciplinarios, pasando por la accesibilidad,
            disposición y familiarización de los usuarios, hasta el peligro en el uso no ético de las plataformas
            digitales, para coaccionar el comportamiento y las decisiones de las personas (Forero-Díaz, comunicación
            personal, 29 de agosto de 2023).
          </p>

          <p>
            Además de lo mencionado, la universidad también enfrenta importantes retos materiales y financieros. En la
            Sede La Paz, por ejemplo, la vicerrectora Marcela Camacho ha reflexionado sobre los avances en el desarrollo
            y la adquisición de tecnologías digitales. Entre sus planes de manejo de equipos, la sede ha conseguido,
            desde sus inicios, contar con equipos de última generación mediante el servicio de <em>renting</em>{' '}
            tecnológico, que significa la renovación constante de equipos, manteniendo a la sede a la vanguardia de la
            tecnología. Tanto es así que fue la primera sede en regresar a la presencialidad, gracias a que cuenta con
            los equipos y la conectividad necesarios para la transición híbrida a la presencialidad, un nodo esencial
            para que los estudiantes de la región puedan acceder a Internet y equipos (Camacho-Navarro, comunicación
            personal, 16 de agosto de 2023). Vale resaltar que parte de estas fortalezas se deben a que es una de las
            sedes más recientes de la universidad (su funcionamiento inició en 2019) y, por tanto, cuenta con una de las
            mejores infraestructuras físicas y tecnológicas.
          </p>

          <p>
            No obstante, aún persisten brechas significativas en cuanto las potencialidades de la universidad en la Sede
            de La paz. La primera esla existencia de procesos manualesinnecesarios y burocráticos, que retrasan procesos
            académicos, investigativos, administrativos y funcionales. Por ejemplo, la universidad podría contar con los
            medios para ser un campus virtual y monitorear el estado de las instalaciones con ayuda de sensores y
            dispositivos digitales. Además, la universidad sigue dependiendo ampliamente de las tecnologías diseñadas
            por agentes externos, a pesar de tener las capacidades dentro de la misma comunidad universitaria para
            desarrollarlas e innovar de manera autónoma. Sin olvidar que esta es una de las tantas nuevas formas de
            colonialismo del siglo <span className='caps'>XXI</span>. Por último, también hay constantes fallas en los
            sistemas de información y las herramientas digitales diseñadas por la universidad que aún no dialogan entre
            sí, ni con los restantes sistemas, como <span className='caps'>SIA,</span> Sara y Hermes, etc.
            (Camacho-Navarro, comunicación personal, 16 de agosto de 22023).
          </p>

          <p>
            Desafíos similares se presentan en otras sedes. El vicerrector de la Sede Medellín, Juan Camilo Restrepo ha
            analizado las necesidades cambiantes en una universidad que ya no es netamente física, sino también virtual.
            La virtualidad permite la presencia de cualquier persona del mundo en los espacios universitarios, una
            suerte de aula expandida que también amplía sus conexiones. Sin embargo, para que esto ocurra, deben
            implementarse procesos de pedagogía y capacitación digital, ligados a los procesos de investigación y
            formación. A diferencia de la Sede de La Paz, Medellín tiene fuertes limitaciones por la obsolescencia
            tecnológica y problemas de conectividad (Restrepo-Gutiérrez, comunicación personal, 11 de agosto de 2023).
          </p>

          <p>
            A pesar de ello, la Sede Medellín ha insistido en la necesidad de vincular la estructura física con la
            digital para optimizar el uso de los recursos. Un ejemplo de ello fue que, durante la pandemia, el consumo
            de agua de la Sede Bogotá no bajó, a pesar de que las instalaciones no se usaban, lo que demostró que hay
            inmensas pérdidas en las redes de agua. Este caso evidencia que en la mayoría de las sedes no existe un
            monitoreo ágil y oportuno del estado físico de su infraestructura. Afortunadamente, la Sede Medellín ha
            tomado la iniciativa en este campo, al usar un sistema de información para la administración y gestión de
            espacios, donde se ha generado una red de monitoreo de los edificios, para identificar los problemas en el
            mantenimiento. De modo que, también hace falta implementar estossistemas de administración de espacios en el
            ámbito académico, como la distribución de salones o la inscripción de asignaturas de forma más equitativa
            (Restrepo-Gutiérrez, comunicación personal, 11 de agosto de 2023).
          </p>

          <p>
            Ligado a lo anterior, uno de los mayores problemas de la universidad es el manejo articulado de los
            diferentes sistemas de información y la comunicación/unificación de sus bases de datos. A pesar de que los
            sistemas interactúan entre sí, aún se hace de formas manuales o través de interfaces, sin que se haya
            consolidado un sistema que articule todos los sistemas de información, de modo que la información se
            transmita de forma sencilla y segura y que de la misma forma puedan tomarse acciones precisas con dirección
            a los objetivos misionales (Salamanca-Guerrero, comunicación personal, 15 de septiembre de 2023).
          </p>

          <p>
            Finalmente, también es necesario mencionar que hay un problema de desigualdad entre sedes. No todas tienen
            las mismas posibilidades, recursos y capacidades para afrontar los retos de la transformación digital. El
            caso de la Sede Orinoquía es ilustrativo. Javier Carreño Ortiz, coordinador de la infraestructura digital de
            esta sede, destaca la importancia de la articulación de las sedes de presencia nacional con las demás,
            principalmente porque estas no son autónomas en la disposición de recursos. Como se ha evidenciado, las
            principales dependencias se alojan en Bogotá, Palmira, Manizales y Medellín. En ese sentido, en la Sede
            Orinoquia no es posible hablar estrictamente de estratégicas de transformación digital, al menos no en los
            términos en los que se ha experimentado en otras sedes. Ello se debe, principalmente, a los desafíos en
            conectividad y la falta de recursos para ejecutar proyectos que se proponen desde los territorios
            (Carreño-Ortiz, comunicación personal, 4 de agosto de 2023).
          </p>

          <p>
            Desde la oficina de infraestructura digital de la Sede Orinoquía, no se han ejecutado proyectos propios, más
            allá de brindar apoyo a iniciativas docentes o investigativas. Sin embargo, esto no ha impedido que se
            propongan estrategias. Por ejemplo, se ha formulado la creación de un recorrido con realidad virtual y
            aumentada por la colección de entomología de la sede, una colección biológica con información asociada a más
            de 9000 registros biológicos, recurso fundamental para el conocimiento, investigación y protección de la
            biodiversidad del país (
            <em>
              Colección entomológica de la Orinoquía —<span className='caps'>CEO</span>
            </em>
            , 2022). También se han planteado recorridos por un sendero ecológico con realidad virtual, una
            representación con medios tecnológicos para acercarse desde otros lugares del país y del mundo a estos
            espacios —figuras 20-23 (Carreño- Ortiz, comunicación personal, 4 de agosto de 2023).
          </p>
        </BloqueTexto>
        <Slider correctHeight={true} slides={slider_data2} />

        <BloqueTexto>
          <p>
            Estas iniciativas tienen el propósito de convertirse en un medio tanto académico como de difusión, para
            conocer las dinámicas de biodiversidad del territorio y consolidarse como estrategias de apropiación de
            tecnologías digitales. Sin embargo, hasta el momento, no han contado con los recursos para su ejecución.
            Como es evidente, estas propuestas se relacionan profundamente con las fortalezas académicas y culturales de
            las sedes de presencia nacional, y se proyectan dentro de los lineamientos institucionales de la Estrategia
            de Transformación Digital. En este caso, los componentes que se han requerido son la dotación de equipos y
            materiales, la ampliación de cobertura wifi, la construcción de materiales didáctico en realidad aumentada y
            realidad virtual, el desarrollo de una interfaz gráfica y la implementación de acciones de formación y
            divulgación de conocimiento (Carreño-Ortiz, comunicación personal, 4 de agosto de 2023).
          </p>

          <p>
            En definitiva, aún queda un importante camino por recorrer en el proceso de acceso, aprendizaje, integración
            y transformación en torno a la cultura y la infraestructura digital en la universidad. Este repaso por
            algunos de los retos y limitaciones que se han enfrentado en los últimos años ilustra algunas de las
            problemáticas más frecuentes, aun presentes en ese esfuerzo por comprender e interactuar con las máquinas,
            de modo que aporten a la sociedad colombiana.{' '}
          </p>

          <p>
            Es claro que existen importantes brechas tecnológicas y de apropiación cultural entre las sedes de la
            Universidad Nacional de Colombia que aún están en camino de disminuirse, retos que deben abordarse en las
            próximas administraciones. Como se mencionó, la universidad tiene un compromiso en generar espacios de
            pertenecía y cohesión social que diluyan las brechas sociales, apostando por acciones éticas, equitativas y
            democráticas, que impulsen la inclusión, la equidad de género, el reconocimiento de la diversidad, la
            integración cultural y el bienestar colectivo (figuras 24-25).
          </p>
        </BloqueTexto>
        <ScrollMultipleImages
          images={[
            {
              img: './img/figura_24.jpg',
              caption: (
                <>
                  <p>
                    <strong>Figura 24.</strong> Laboratorio de Biología de Embriones.
                  </p>
                  <p>Fuente: Archivo Fotográfico Unimedios (Nicol Torres/2023/Laboratorio de Biología de Embriones).</p>
                </>
              ),
            },
            {
              img: './img/figura_25.jpg',
              caption: (
                <>
                  <p>
                    <strong>Figura 25.</strong> Laboratorio de Ingeniería.
                  </p>
                  <p>Fuente: Archivo Fotográfico Unimedios (Nicol Torres/2023/Laboratorio de Ingeniería).</p>
                </>
              ),
            },
          ]}
        />
      </Capitulo>
    </>
  );
}
