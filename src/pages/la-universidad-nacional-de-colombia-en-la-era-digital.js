import Capitulo from '@/components/Capitulo';
import { BloqueTexto, MainSection, ParrafoInicial, Subtitulo, TituloCapitulo } from '@/components/Elements';
import Podcast from '@/components/Podcast';
import ScrollImage from '@/components/ScrollImage';
import ScrollImageVertical from '@/components/ScrollImageVertical';
import ScrollMultipleImages from '@/components/ScrollMultipleImage';
import Slider from '@/components/Slider';
import { slider_data } from '@/data/slider_data';

export default function UniversidadEraDigital() {
  return (
    <>
      <Capitulo>
        <TituloCapitulo>
          <div className='flex items-center'>
            <span
              style={{ background: `linear-gradient(159.71deg, #02EBB6 0.2%, rgba(115, 115, 115, 0) 41.04%)` }}
              className='text-9xl font-extralight border-2 px-10 py-6 mr-8'
            >
              2
            </span>
            <div>
              <h1 className='text-6xl font-light'>
                La Universidad Nacional de Colombia <span className='block'>en la era digital</span>
              </h1>
            </div>
          </div>
        </TituloCapitulo>
        <ParrafoInicial>
          <p>
            Las computadoras están compuestas por circuitos eléctricos que desempeñan una función fundamental: llevar a
            cabo operaciones lógicas. A diferencia de los circuitos que tradicionalmente se encontraban en los
            dispositivos electrónicos y que se utilizaban para encender-apagar, regular el flujo eléctrico, convertir la
            energía eléctrica en otras formas de energía y ampliar señales, entre otras funciones, las computadoras
            empezaron a emplear un tipo de circuito capaz de realizar operaciones matemáticas simples: las puertas
            lógicas (figura 1).
          </p>
        </ParrafoInicial>
        <ScrollImage
          img={'./img/figura_1.jpg'}
          caption={
            <>
              <p>
                <strong>Figura 1.</strong> Foto del Edificio de Ingeniería (ca. 1940).
              </p>
              <p>Fuente: Archivo Fotográfico Unimedios (Históricas/40s).</p>
            </>
          }
        />
        <Subtitulo>Los inicios</Subtitulo>
        <BloqueTexto shadow={false}>
          <p>
            Las puertas lógicas mencionadas nacieron como circuitos electrónicos integrados, formados internamente con
            unos dispositivos llamados <em>transistores</em> que, dependiendo de su composición, podían realizar
            funciones específicas: sumas, restas, multiplicaciones, inclusión y exclusión, entre otras. El principio de
            esto es simple: hacer operaciones matemáticas con solo dos dígitos: el 0 y el 1 (operaciones en el sistema
            numérico binario); y, dependiendo de la función del transistor, los sensores emitían una respuesta: prendido
            o apagado. Debido a ello, la computación requirió de un lenguaje particular para funcionar. La computación
            se basa en la combinación de operacionessimples, operadas por tablas de verdad que asignan un valor lógico
            binario a cada señal: <em>si A, entonces B</em> (Jiménez-Ramírez, 2020). Así pues, las computadoras
            adquirieron su renombre, por su capacidad de computar a través de circuitos eléctricos.
          </p>

          <p>
            En la Universidad Nacional de Colombia, el término <em>computar</em> ha evolucionado a lo largo del tiempo.
            En 1868, se usaba para referirse al cálculo manual de las notas y faltas de los estudiantes, un proceso que
            determinaba su estado académico al finalizar el periodo. En aquella época, la operación consistía en sumar
            números que representaban el desempeño de los alumnos en los diferentes cursos (Universidad Nacional de
            Colombia, 1868, pp. 67-71). Sin embargo, nuestra institución estuvo atenta al desarrollo tecnológico global
            y sus implicaciones en la educación y el funcionamiento de las organizaciones.
          </p>

          <p>
            Para la segunda mitad del siglo <span className='caps'>XX</span>, con el surgimiento de las ciencias
            computacionales y la aparición de los primeros equipos comerciales, empezó a desarrollarse una variedad de
            análisis sobre la relevancia de estas ciencias en diferentes áreas del conocimiento. En 1954, se publicó un
            artículo en la <em>Revista de la Facultad de Medicina</em>, donde se presentaba el <em>sanguinómetro</em>,
            una computadora fabricada en Estados Unidos diseñada para contar glóbulos rojos de manera automática. Este
            avance marcó un hito en la integración de la tecnología y la medicina, demostrando el potencial de las
            ciencias computacionales para revolucionar diversos campos. Esta computadora contaba con una cámara de
            televisión que detectaba los glóbulos y un contador que los registraba a través de impulsos eléctricos; la
            cámara recorría la muestra y enviaba impulsos cada vez que un rayo chocaba con la imagen de las células
            sanguíneas. Su potencial era enorme, pues permitía hacer recuentos de corpus sanguíneos de forma exacta y
            automática, lo que evidenciaba que el desarrollo de estas tecnologías tenía fuertes potencialidades en la
            medicina (Facultad de Medicina, 1954, pp. 369-371).
          </p>

          <p>
            Para la comunidad universitaria, el paso de lo manual a lo automático, de lo análogo a lo digital, de lo
            mecánico a lo electrónico significó la disminución de los tiempos para realizar tareas (figura 2). En
            principio, el desarrollo de las tecnologías digitales encarnó eso, la aceleración de los procesos. Diego
            López, miembro de la Facultad de Ingeniería, analizó las implicaciones de este tránsito en la década de
            1960. Reflexionó sobre las diferencias entre un computador análogo y uno digital: por un lado, el computador
            análogo es un sistema físico (electrónico y mecánico) en el que se resuelven ecuaciones matemáticas de forma
            similar a las relaciones de variables de problemas específicos —es decir, la operación física que realiza la
            máquina es similar al problema que tiene que resolver. Este tipo de computador es más parecido al ábaco o el
            sanguinómetro mencionado—. Por otro lado, el computador digital es un sistema capaz de almacenar información
            aritmética, realizar operaciones y tomar decisiones lógicas a gran velocidad. El primero, maneja los datos
            de forma continua y el segundo, a través de un sistema numérico binario, como se ha dicho (López, 1965, p.
            46).
          </p>
        </BloqueTexto>
        <ScrollImageVertical
          img={'./img/figura_2.jpg'}
          caption={
            <>
              <p>
                <strong>Figura 2.</strong> Primera mujer Ph. D. Margoth Suárez (1993).
              </p>
              <p>Fuente: Archivo Fotográfico Unimedios (Históricas/90s).</p>
            </>
          }
        />
        <BloqueTexto shadow={false}>
          <p>
            Más allá de los tecnicismos, la opción por uno u otro tenía implicaciones significativas para su uso
            práctico en el ámbito educativo. Las computadoras digitales podían realizar cálculos más veloces y precisos,
            por su capacidad de realizar operaciones algebraicas y almacenar información. Sin embargo, eran equipos más
            costosos en comparación con los análogos, además requerían de grandes esfuerzos de programación para
            solucionar algunos problemas que para el otro tipo de computadoras resultaba sencillo. Por tal razón, para
            esta época los computadores análogos ya eran una herramienta básica para los ingenieros y los científicos,
            mientras que los digitales aún estaban en proceso de desarrollo (López, 1965, p. 46).{' '}
          </p>

          <p>
            Ambos tipos de computador hicieron parte constitutiva de la universidad, pero el desarrollo del campo de la
            computación digital representó, particularmente, un reto para la institución. El más evidente: ¿cómo
            adquiriría la universidad estos equipos tan costosos? También, ¿cómo construiría una escuela que pudiese
            comprender, estudiar y desarrollar los complejos lenguajes de la programación? Incluso a nivel global, el
            reto era reciente, apenas en 1954, Jhon Backtus lideró los estudios en programación con una{' '}
            <span className='caps'>IBM</span> que, eventualmente, llevaría a la creación de Fortran considerado “el
            primer lenguaje de programación de alto nivel” (<em>Boletín de Matemáticas</em>, 1973, p. 323).
          </p>

          <p>
            Así, el concepto <em>digital</em>, en el sentido informático, comenzó a hacer parte esencial de los
            problemas investigativos de la Universidad Nacional de Colombia que, para esos años, se enlazaba con otro
            problema de proporciones similares: las telecomunicaciones. Eran las dos caras de la era digital, por un
            lado, la velocidad de procesar información; por el otro, la capacidad de enviar esa información de un lugar
            a otro, de conectar a las personas y las instituciones. En el Acuerdo 1 de 1954, el Consejo Académico creó
            el curso de Telecomunicaciones, en la Facultad de Matemáticas e Ingeniería, influenciado y financiado por la
            compañía Ericsson Ltda. de Bogotá (Acuerdo 1 de 1954) —figura 3.{' '}
          </p>

          <p>
            La relación entre esta compañía y Colombia inició en 1896, cuando Lars Magnus Ericsson envió a la Empresa de
            Teléfonos de Bogotá cincuenta aparatos telefónicos. Medio siglo después, en 1945, Ericsson se constituyó
            legalmente como una empresa en Colombia, aportando desde esos años a la automatización de los servicios de
            telefonía en el país (<em>Ericsson in Colombia</em>, 2023).
          </p>
        </BloqueTexto>

        <ScrollImageVertical
          img={'./img/figura_3.jpg'}
          caption={
            <>
              <p>
                <strong>Figura 2.</strong> Laboratorios de Ingeniería, talleres, Bogotá (s.f.).
              </p>
              <p>Fuente: Archivo Fotográfico Unimedios (Históricas/Campus Bogotá).</p>
            </>
          }
        />
        <BloqueTexto>
          <p>
            No era extraño que una empresa de tal trayectoria propiciara el desarrollo de esta ciencia en las
            universidades. El Acuerdo 1 de 1954 evidenciaba que la universidad estaba conectada a un esfuerzo mayor por
            desarrollar estas tecnologías. El encargado de diseñar el programa del curso fue el ingeniero David W. Mehl,
            graduado de la Escuela de Zúrich y miembro de la Sociedad de Matemáticas de México. Dos elementos capitales
            guiaron los contenidos del curso: primero, un nutrido recorrido por los principios de la telefonía, la
            electrónica aplicada y las líneas de comunicación a larga distancia; segundo, un apartado sobre la
            conmutación, sus fundamentos y sus dispositivos (Acuerdo 1 de 1954).
          </p>

          <p>
            Si la era digital tuviese que resumirse en dos conceptos podríamos elegir los de <em>computar</em> y{' '}
            <em>conmutar</em>, dicho de otro modo, calcular e intercambiar. En electrónica, <em>conmutar</em> significa
            “cambiar el sentido de una señal o corriente eléctrica” (Asociación de Academias de la Lengua Española
            [Asale] y Real Academia de la Lengua Española [<span className='caps'>RAE</span>], 2023) y es fundamental
            tanto en los sistemas de comunicación como en los computacionales. Los conmutadores son dispositivos que
            crean una ruta adecuada para que la información viaje de una fuente a un destino determinado. Sus usos son
            múltiples, desde lo más básico que son los circuitos, hasta las redes computacionales que permiten conmutar
            paquetes de datos con distintas tecnologías enlaces de transmisión (<em>Tema 4. Redes de conmutación</em>,
            2023). La creación de este curso planteaba un escenario valioso para el desarrollo y la compresión de las
            redes locales de comunicación, la transmisión de datos a largas distancias y la práctica en tecnologías de
            la conmutación.
          </p>

          <p>
            Desde 1958, se tiene registro del uso de máquinas de <span className='caps'>IBM</span> en el Departamento de
            Matemáticas y Estadística (Acuerdo 24 de 1958), pero solo hasta 1960 se creó una dependencia específica
            enfocada a “entrar de lleno en el campo de la utilización de las máquinas computadoras”: la Oficina
            Preparativa de Cómputos Electrónicos en la Facultad de Matemáticas (Acuerdo 76 de 1960). Esta oficina tenía
            el objetivo de impulsar los trabajos de investigación en computación y, con ello, prestar servicios a otras
            entidades de carácter oficial o privado. Era una apuesta por la automatización que afectaba a varios
            estamentos de la universidad: por una parte, el estudiantado, pero también las profesoras y los entes
            administrativos. En este sentido, se pensaba en el aprovechamiento de las máquinas no solo con fines de
            investigación, sino también para optimizar procesos internos de la institución.
          </p>

          <p>
            En los primeros años la universidad pudo acceder a los equipos a través del alquiler, gracias a la
            cooperación con otros centros y entidades oficiales (Acuerdo 76 de 1960). Por ejemplo, en 1965 se celebra un
            contrato con el Instituto Colombiano para la Reforma Agraria (Incora), para el arrendamiento de un
            computador electrónico y un operador de consola. El Incora, a su vez, tenía contrato con{' '}
            <span className='caps'>IBM</span> Colombia para el uso de estos equipos (Resolución 322 de 1965). La llegada
            de los equipos implicó, asimismo, la capacitación de personas para participar de su uso.
          </p>

          <p>
            Con la creación del Centro de Computación en 1964, se inició el proceso de consolidación de una escuela de
            la computación y la programación en la Universidad Nacional de Colombia. Para ese año ya se habían
            desarrollado varios contratos con <span className='caps'>IBM</span> de Colombia SA (Resolución 142 de 1964)
            y se comenzaban a dividir las tareas de las personas que participarían en esta dependencia: un jefe
            administrativo, un encargado de la enseñanza y la investigación, un programador y un perforador de tarjetas
            (Acuerdo 7 de 1966).
          </p>

          <p>
            Para ocupar estos cargos, se debía tener tanto conocimientos en ingeniería, matemáticas o física, como en
            campos más específicos que solo maneja <span className='caps'>IBM</span>, como 1620, sistematización,
            perforación de tarjetas y análisis de computación. En definitiva, la cooperación entre{' '}
            <span className='caps'>IBM</span> y la Universidad Nacional de Colombia fue cardinal en estas primeras
            etapas —figura 4 (Acuerdo 172 de 1965).
          </p>
        </BloqueTexto>

        <ScrollImage
          img={'./img/figura_4.png'}
          caption={
            <>
              <p>
                <strong>Figura 4.</strong> Tarjeta perforada.
              </p>
              <p>Fuente: Archivo Central Histórico (Rectoría/Consejo Superior/Acuerdos y Resoluciones 1965-1971).</p>
            </>
          }
        />

        <BloqueTexto>
          <p>
            En 1965, la sede Medellín de la Universidad Nacional estableció un fondo especial para apoyar a la Facultad
            Nacional de Minas de Medellín, creando el Centro Universitario de Computación (Resolución 61 de 1965). Este
            centro adquirió una serie de equipos de <span className='caps'>IBM</span> para su operación, incluyendo una
            unidad central 1131-2B, una impresora 1132-1, una lectora perforadora 1442- 1, discos magnéticos 2135-1, así
            como perforadoras, clasificadoras, interpretadoras y tabuladoras (Resolución 232 de 1967). Este desarrollo
            representó un cambio significativo en la forma en que se producía el conocimiento, marcando la transición de
            procesos manuales y el uso de computadoras analógicas a tecnologías más avanzadas. El Laboratorio de
            Electrónica de la Facultad de Minas se muestra en las figuras 5-8.
          </p>
        </BloqueTexto>
        <Slider slides={slider_data} />
        <BloqueTexto>
          <p>
            La introducción de la computación trajo consigo la profesionalización de los programas académicos. En la
            década de 1960, la Facultad de Ingeniería, con el apoyo de la Organización de las Naciones Unidas para la
            Educación, la Ciencia y la Cultura (Unesco), emprendió la tarea de diseñar un programa de especialización
            para graduados. Después de varios años de colaboración, el Consejo Superior Universitario (
            <span className='caps'>CSU</span>) aprobó la creación del programa de Magíster en Ingeniería de Sistemas en
            1967, uno de los primeros posgrados en esta área del conocimiento en América Latina. En 1973 se estableció
            una sección de Ingeniería de Sistemas, que concentró todas las actividades relacionadas y se independizó de
            los demás departamentos de la Facultad, convirtiéndose en 1978 en el Departamento de Ingeniería de Sistemas
            (Castellanos-Aceros, 2001, pp. 115-116).
          </p>

          <p>
            Con la creación del departamento, nació la carrera de Ingeniería de Sistemas, respaldada por el Acuerdo 1
            del 14 de marzo de 1978 del Consejo Superior Universitario (<span className='caps'>CSU</span>). Esta carrera
            tuvo una importancia crucial para el desarrollo de la disciplina en la universidad y el país, destacándose
            por su enfoque en la investigación de operaciones, la programación y el cálculo automático, y el análisis y
            diseño de sistemas de información. Estos enfoques permitieron formar profesionales que impulsaron la gestión
            administrativa, científica y tecnológica, contribuyendo así al avance de la computación electrónica, las
            ciencias de la informática y los modelos matemáticos de sistemas de información. El dominio de estas
            herramientas técnicas y tecnológicas buscaba aportar soluciones a problemas nacionales en la administración
            de recursos y el desarrollo social y económico (Castellanos-Aceros, 2001, pp. 116–117).
          </p>
        </BloqueTexto>
        <Subtitulo>Políticas y proyectos en la transición hacia una cultura digital</Subtitulo>
        <BloqueTexto>
          <p>
            La introducción de nuevas tecnologías y conocimientos transformó la universidad en todas sus áreas del
            conocimiento, aunque en distintos grados según las características disciplinarias. La adopción de
            tecnologías digitales significó un cambio fundamental a nivel académico, administrativo y productivo.
            Durante la segunda mitad del siglo <span className='caps'>XX</span>, se desarrollaron una serie de políticas
            y proyectos que contribuyeron a la creación de una cultura digital y un sólido marco institucional enfocado
            en la investigación, la gestión y el gobierno electrónico. Este último se refiere al uso de tecnologías de
            la información y la comunicación para ofrecer servicios, administrar recursos y asegurar una gobernanza
            efectiva (Naser y Concha, 2011, p. 11). A continuación, se destacan algunos de los hitos más importantes en
            este proceso de transformación digital.
          </p>

          <h3 className='text-2xl text-purple-base font-sans mb-10'>Las telecomunicaciones</h3>
          <p>
            Como se dijo, para finales de la década de 1960, se crearon varias dependencias especializadas en las
            ciencias computacionales y se estableció un curso completo sobre telecomunicaciones en 1954. Para esta
            segunda cara del proceso de adaptación a la era digital, era fundamental tener un aparato organizativo que
            regulara cómo la universidad se conectaba con el mundo. Ya desde la década de 1940 se adelantaron intentos
            para desarrollar este campo a través de una alianza entre la Empresa Nacional de Radiocomunicaciones, los
            Bancos y la Facultad de Ingeniería en Bogotá (Acuerdo 10 de 1947).
          </p>

          <p>
            Para 1965, existían dos dependencias que regulaban ese contacto mundo-universidad: el sistema de correos y
            la oficina de portes y telecomunicaciones, todos a cargo de la Dirección de Servicios Generales (Acuerdo 205
            de 1965). Como es evidente, fue necesario el constante apoyo de entidades privadas y públicas, para que las
            telecomunicaciones no solo fueran una dependencia administrativa de la universidad, sino también un campo
            del conocimiento en desarrollo, que permitiera interactuar con el sector académico y productivo. Como
            ejemplo de lo anterior, en 1985, en el marco del Programa de Investigación y Divulgación Científica y
            Tecnológica, se establecieron contratos de investigación con el Departamento del Tolima, la Empresa
            Colombiana de Telecomunicaciones (Telecom), la Empresa de Energía Eléctrica de Bogotá y el Departamento de
            Planeación (Acuerdo 95 de 1985).
          </p>

          <p>
            La colaboración con estas entidades facilitó el desarrollo de investigaciones y cursos dentro de las
            carreras existentes, así como la creación de nuevos programas académicos con enfoques especializados. Se
            reconocía ampliamente que las denominadas "nuevas tecnologías de la información" tenían impacto en todas las
            actividades humanas. Por tanto, los programas curriculares debían abordar problemas a través de un enfoque
            sistemático en la aplicación de estas tecnologías. Un ejemplo de esto fue la creación de la carrera de
            Ingeniería Electrónica en 1991, en la Facultad de Ingeniería y Arquitectura de la Sede Manizales. Este
            programa buscaba explorar las principales áreas de innovación de la época, como la microelectrónica, las
            telecomunicaciones y la informática, a través de la investigación y el diseño (Acuerdo 34 de 1991).
          </p>
          <h3 className='text-2xl text-purple-base font-sans mb-10'>Proyectos y dependencias</h3>
          <p>
            Como puede intuirse, hasta ese momento, las tecnologías computacionales y de las telecomunicaciones aún no
            estaban estrictamente integradas a proyectos o dependencias de la universidad; a primera vista, cada una iba
            por su cuenta. Desde la década de 1960 este proceso fue paulatino, e inició con los centros de computación y
            cálculo en Bogotá y Medellín. En 1966, se habló de la organización de la División de Docencia e
            Investigación, estableciendo una primera relación entre la computación y la comunicación. En esta división
            se integraron el Centro de Computación y el Centro de Medios Audiovisuales, ambos enfocados a la docencia,
            la investigación y los sistemas de enseñanza y difusión cultural en la universidad. Una apuesta por integrar
            a la comunidad universitaria, a través de medios tecnológicos (Acuerdo 3 de 1966).
          </p>

          <p>
            Durante 1970, el centro de cálculo electrónico especializaría sus funciones. La investigación aplicada, el
            estudio de sistemas y las aplicaciones docentes y administrativas regirían su funcionamiento, estableciendo,
            además, formas de intercambio y colaboración de investigaciones, materiales y equipos con otras
            instituciones nacionales y extranjeras (Acuerdo 6 de 1973). Posteriormente, en 1982, se creó la Oficina de
            Sistemas de Información y Procesos (Osip), con una apuesta por sistematizar la información interna de la
            universidad: archivo del personal docente, información y procesos de estudiantes e información
            administrativa de las facultades. Todo ello se hizo con el objetivo de procesar la información y enviarla al
            Consejo Superior Universitario (<span className='caps'>CSU</span>), direcciones nacionales y decanaturas
            para la toma de decisiones (Acuerdo 7 de 1982). Finalmente, antes de terminar la década se crearía el Centro
            de Equipos Interfacultades en la sede Bogotá (Ceif), que serviría de unificador y veedor del uso correcto de
            los equipos en la Universidad. Los miembros del Centro debían mantener, recuperar y montar los equipos
            necesarios para las actividades académicas (Acuerdo 66 de 1986).
          </p>

          <p>
            Para la década de 1980, los estudiantes de ingeniería ya podían tener acercamientos prácticos a los equipos
            computacionales. El computador se ubicaba en una sala de unos 60 metros cuadrados, donde había también
            equipos de enfriamiento de espacios para disipar el calor de una máquina de grandes dimensiones. Pocos
            estudiantes accedían directamente al computador, que era controlado por un funcionario del centro de
            cómputo, encargado de realizar las operaciones que estudiantes y profesores solicitaban. No obstante, los
            estudiantes podían acceder a las máquinas perforadoras de tarjetas para escribir instrucciones en código
            binario que el computador leería posteriormente. Después de escribir el programa, las tarjetas se
            recopilaban y se entregaban al funcionario para que las introdujera, tarjeta por tarjeta, al computador (J.
            I. Peña Reyes, comunicación personal, 25 de agosto de 2023).
          </p>

          <p>
            A pesar de la aceleración de los procesos que significaba el uso de esta máquina, el paso a paso no era
            sencillo: primero, hacer filas para usar las máquinas perforadoras; después, escribir las instrucciones de
            lo que se quería computar; posteriormente, hacer otra fila para entregar las tarjetas al centro de cómputo
            y, finalmente, esperar los resultados. Estos computadores no tenían interfaces tan desarrolladas como las de
            las pantallas actuales; en su lugar, la interfaz de salida eran papeles impresos con los resultados de cada
            operación. Si las instrucciones no se escribían correctamente en la tarjeta, el resultado arrojaba un error
            y debía repetirse todo el proceso (J. I. Peña Reyes, comunicación personal, 25 de agosto de 2023).
          </p>

          <p>
            La computación avanzaba a pasos de gigante. Para inicios de la década de 1980, los estudiantes tuvieron
            contacto con las computadoras a través de las perforadoras de tarjetas; pero al finalizarla, ya tendrían
            acercamientos a computadores de escritorio: las microcomputadoras. Uno de estos equipos primero llegó a la
            Facultad de Ciencias Económicas para tratar problemas de econometría. Paulatinamente, las facultades irían
            adquiriendo estos dispositivos y organizando sus sistemas de información y bases de datos de forma autónoma
            a lo largo y ancho de la universidad. El impacto de las microcomputadoras fue enorme, pues ya no solo los
            ingenieros manejaban los sistemas de información, sino también personas de diversas disciplinas que buscaban
            organizar y tomar decisiones en torno a ella. De esa manera, cambiaron la manera en que se administraba y
            funcionaba la educación universitaria (J. I. Peña Reyes, comunicación personal, 25 de agosto de 2023).
          </p>

          <p>
            Posteriormente, en la década de 1990, la Universidad Nacional de Colombia unificó en ciertas dependencias
            las ramas de la informática y las telecomunicaciones, influenciada por la irrupción de Internet en la
            sociedad y los centros educativos (recurso 2). Con la redefinición de la estructura a nivel nacional de la
            universidad en 1997, se crearon tres organismos esenciales en la consolidación de la cultura digital en la
            comunidad universitaria: la División de Informática y Comunicaciones, la Dirección Nacional de Informática y
            Comunicaciones y la Unidad de Medios de Comunicación —Unimedios (Resolución 863 de 1997). Un año después, se
            creó el Comité Nacional de Informática y Telecomunicaciones que cobijaría a la Dirección Nacional de
            Informática y Comunicaciones (Resolución 335 de 1998).
          </p>

          <p>
            El establecimiento de estos organismos plantearía una política en el uso de las tecnologías sin precedentes,
            permitiendo la definición de sistemas integrados para la ejecución de planes académicos y administrativos,
            la articulación y comunicación entre sedes, así como la formulación de proyectos para la adquisición, uso y
            desarrollo de software y hardware dentro de la universidad. Sumado a esto, Unimedios unificó en su dirección
            la oficina radial, de producción audiovisual y de comunicaciones e imágenes corporativas, de manera que se
            consolidó como la plataforma y medio de comunicación de la Universidad —recurso 3 (Resolución 863 de 1997).
          </p>
        </BloqueTexto>
        <Podcast
          title={`¿Cómo eran las clases de Ingeniería de Sistemas en la Sede Bogotá de la Universidad Nacional de Colombia en los años 1990?`}
          src={'./audio/recurso_4_inteligencia_artificial.mp3'}
        />
        <Subtitulo>Bitnet, Runcol e Internet</Subtitulo>
        <BloqueTexto>
          <p>
            El siglo <span className='caps'>XX</span> terminó con la construcción de la primera red de universidades e
            instituciones académicas que se comunicaban a grandes distancias y vertiginosas velocidades. Indudablemente,
            Internet cambió para siempre la forma como las instituciones educativas realizan sus labores. En la última
            década del siglo, funcionarios y docentes usaron las redes Bitnet y Runcol para comunicarse a largas
            distancias con otros centros académicos (J. M. Sánchez Torres, comunicación personal, 29 de junio de 2023).
          </p>

          <p>
            Bitnet fue una red informática norteamericana de telecomunicaciones que enlazó más de mil organizaciones a
            nivel internacional con fines educativos y de investigación. Cada organización creaba nodos a través de
            computadores, equipos, líneas de comunicación, personas y programas (Gamboa, 1994). En 1991, se logró
            enlazar un canal análogo entre Bogotá y Nueva York que permitió la conexión de Colombia a esta red. A medida
            que las universidades fueron acoplándose a la Bitnet, se creó una subred llamada Red de Universidades
            Colombianas (Runcol), en la que participaron más de treinta instituciones educativas (Redacción{' '}
            <em>El Tiempo</em>, 1997).
          </p>

          <p>
            La Universidad Nacional de Colombia fue uno de los nodos de dicha red, controlado en la Unidad de Servicios
            de Computación, donde un operador tenía el deber de mantener comunicación permanente con ambas redes
            (Acuerdo 12 de 1992). Los impactos de esta conexión entre comunidades académicas fueron muy significativos.
            Efectivamente, permitió un primer contacto antes del establecimiento de internet, cambiando incluso las
            condiciones materiales de cómo se relacionaban las personas, el ejemplo más evidente de este cambio el
            correo electrónico (J. M. Sánchez-Torres, comunicación personal, 29 de junio de 2023).
          </p>

          <p>
            Tras la experiencia con estas primeras redes, el uso de Internet se volvió cada vez más común, primero, para
            la institución y, después, para los estudiantes, convirtiéndose paulatinamente en una herramienta
            obligatoria para las labores académicas. Por esta razón, desempeñó un papel fundamental en las discusiones
            sobre la conectividad de las sedes de presencia nacional, donde los equipos y los medios materiales no
            permitían los mismos tipos de conexión que en las ciudades capitales.
          </p>

          <p>
            A pesar de estas limitaciones, desde los primeros años del siglo <span className='caps'>XXI</span> se
            llevaron a cabo iniciativas al respecto. Un ejemplo de ello se encuentra en la sede Arauca, que en el año
            2000 propuso un reglamento para el uso del Aula de Sistemas, donde los estudiantes tenían derecho a navegar
            por Internet durante una hora al día (Resolución 17 de 2000). Aunque no disponemos de información sobre si
            las condiciones eran idóneas o no para que estas actividades se efectuaran, es significativo que se
            plantearan estas posibilidades, lo que pone en evidencia la rapidez con la que las ciencias informáticas y
            las redes estaban avanzando (figuras 9-10).
          </p>
        </BloqueTexto>
        <ScrollMultipleImages
          images={[
            {
              img: './img/figura_9.jpg',
              caption: (
                <>
                  <p>
                    <strong>Figura 9.</strong> Universidad Nacional – Sede Arauca (2005).
                  </p>
                  <p>Fuente: Archivo Fotográfico Unimedios (Archivo de todos los años/2005/Arauca)</p>
                </>
              ),
              key: 'Universidad Nacional – Sede Arauca (2005).',
            },
            {
              img: './img/figura_10.jpg',
              caption: (
                <>
                  <p>
                    <strong>Figura 10.</strong> Aula de Sistemas de la Sede Arauca (2005).
                  </p>
                  <p>Fuente: Archivo Fotográfico Unimedios (Archivo de todos los años/2005/Arauca)</p>
                </>
              ),
              key: 'Aula de Sistemas de la Sede Arauca (2005)',
            },
          ]}
        />
        <Subtitulo>
          <>
            Siglo <span className='caps'>XXI</span>. Los softwares en la Universidad Nacional de Colombia
          </>
        </Subtitulo>
        <BloqueTexto>
          <p>
            Durante la década de 1990, varios de los softwares que se usaban en la Universidad Nacional de Colombia eran
            “hechos en casa”. Antes de la reestructuración de la institución en 1997, que representó cierto nivel de
            unificación de la universidad en términos administrativos, hubo varios intentos por crear herramientas que
            permitieran suplir necesidades organizativas propias de una institución de grandes dimensiones. Un ejemplo
            de ello fue el aporte de la ingeniera Liliana Piñeros, estudiante en 1988-1995 (Piñeros-Fernández, 2023).
          </p>

          <p>
            Ella se graduó con un sistema de información financiera, que se usó en la universidad durante más de siete
            años, gracias también a las iniciativas de profesores que intercedieron por la recuperación y el uso de
            estos programas, otros softwares para el manejo de bienes e inventarios, así como la administración del
            personal universitario, los cuales fueron desarrollados por funcionarios y estudiantes. Los aportes de la
            Facultad de Ingeniería en materia de innovación y adaptación de software a las necesidades particulares de
            la universidad fueron invaluables antes de finalizar el segundo milenio (J. I. Peña Reyes, comunicación
            personal, 25 de agosto de 2023).
          </p>

          <p>
            Con estos antecedentes, los primeros pasos de la universidad en el siglo <span className='caps'>XXI</span>{' '}
            estuvieron marcados por una fructífera relación con la programación y el desarrollo y uso de software
            computacional. Uno de los primeros y más importantes fue la implementación del Sistema de Gestión e
            Información Bibliográfica Aleph, que se convirtió en la columna vertebral del control bibliográfico de todos
            los materiales de la universidad y sus sedes. Aleph comenzó a usarse ampliamente en los años 1980 en varias
            redes de bibliotecas y archivos a nivel global, por lo que es un software poco usual, por su larga vida en
            el campo de las aplicaciones informáticas. Su uso como recurso electrónico ha permitido una revolución en
            las bibliotecas especializadas, por su amplia capacidad para la gestión de datos que tratan recursos con
            soportes físicos (“Sistema Aleph 500”, 2008; Olmedo Granados, 2017).
          </p>

          <p>
            ¿Qué puede ser más importante para una institución educativa que sus libros y documentos? La Universidad
            Nacional de Colombia comenzó a implementar el sistema Aleph, a finales de la década de 1990, el cual terminó
            convirtiéndose en el sistema que se usa hasta la actualidad para la gestión de bibliotecas. El sistema Aleph
            se implementó en todas las sedes y, posteriormente, se unificó en una única base de datos —figuras 11-12 (J.
            A. Sánchez Peña, comunicación personal, 14 de junio de 2023).
          </p>
        </BloqueTexto>
        <ScrollMultipleImages
          images={[
            {
              img: './img/figura_11.jpg',
              caption: (
                <>
                  <p>
                    <strong>Figura 11.</strong> Biblioteca Central años 60, Sede Bogotá (1968).
                  </p>
                  <p>Fuente: Archivo Fotográfico Unimedios (Históricas/60s)</p>
                </>
              ),
              key: 'Biblioteca Central años 60, Sede Bogotá (1968).',
            },
            {
              img: './img/figura_12.jpg',
              caption: (
                <>
                  <p>
                    <strong>Figura 12.</strong> Biblioteca Central (2022), Sede Bogotá.
                  </p>
                  <p>Fuente: Archivo Fotográfico Unimedios (Jeimi Villamizar/2022/Biblioteca Central).</p>/{' '}
                </>
              ),
              key: 'Biblioteca Central (2022), Sede Bogotá.',
            },
          ]}
        />
        <BloqueTexto>
          <p>
            De esta forma, comenzaron a usarse softwares preexistentes y sistemas propios, para la administración
            interna de la universidad. Es un hecho que, además de la estructura física que soportaba el funcionamiento
            de la institución –donde los estudiantes y profesores impartían clase, los espacios de sociabilidad, deporte
            y actividad política–, también se erigieron importantes edificios que soportaban esa otra cara que empezaba
            a ser comprendida por la comunidad, la dimensión virtual. Esta permite acciones como la admisión de
            estudiantes, la inscripción de asignaturas, el pago de empleados, el manejo de inventarios y la
            sistematización de proyectos académicos.
          </p>

          <p>
            Uno de los primeros softwares desarrollados autónomamente por la Universidad Nacional fue Hermes, un sistema
            nacido en 2005 como una herramienta para la recopilación de información sobre las actividades investigativas
            de los diferentes agentes de la universidad: profesores, estudiantes y funcionarios (Innovación Unal, 2014).
            Gracias a la sistematización y el registro de esta información, desde 2007, pudo construirse conocimiento
            más preciso sobre el campo de investigación y, por consiguiente, para el manejo y toma de decisiones en este
            ámbito. Para 2014, Hermes se convirtió en la única herramienta informática que reunía los datos relacionados
            a investigación y extensión, lo que permitió la unificación, regulación y seguimiento de todos los proyectos
            de este tipo dentro de la universidad (Resolución 9 de 2014). Los efectos de la unificación de estas bases
            de información en un solo sistema fueron variados: desde el mejor manejo de presupuestos y su apropiada
            distribución, pasando por el mejoramiento de las interfaces gráficos para el registro de los proyectos,
            hasta la comprensión más precisa de las dimensiones de producción investigativa.
          </p>

          <p>
            Por su parte, Quipu fue implementado en pleno año 2000 como el Sistema de Información Financiera de la
            universidad, utilizado para el desarrollo de las actividades financieras y administrativas con vista en los
            objetivos misionales. En sus inicios, Quipu pretendía facilitar la formulación de políticas para la
            elaboración, ejecución y control presupuestal por medio de la generación de informes (Zambrano-García{' '}
            <em>et al.</em>, 2009, p. 2). A pesar de que el sistema no funcionaría de formas óptimas en sus primeros
            años de vida, permitió la unificación del complejo entramado financiero y administrativo de la universidad,
            que no solo tenía que ver con un conocimiento técnico en programación, sino también con las diversas
            pericias económicas, administrativas y presupuestales que se comprendían desde otras disciplinas. En la
            actualidad, Quipu es concebido como un “sistema integrado de información que permite el registro,
            seguimiento y control detallado de las operaciones asociadas al macroproceso de gestión administrativa y
            financiera de la Universidad Nacional” (Almanza, 2017, p. 2).
          </p>

          <p>
            Paralelamente, en 2002, la universidad adquirió el Sistema de Información de Talento Humano Sara, como una
            herramienta para la gestión y planeación del talento humano, la selección y vinculación de personal, el
            registro de trayectorias y, en determinados casos, la desvinculación. Su funcionamiento inició en las sedes
            de Bogotá, Medellín, Palmira y Manizales a lo largo de 2002, experimentando en los años siguientes un
            paulatino proceso de enriquecimiento de sus funciones. En sus inicios fue adquirido como un software
            comercial con arquitectura cliente- servidor, con módulos de nómina y puntajes. Posteriormente, en 2007, se
            comienza a usar para la administración de nóminas pensionales, alcanzando a incluir a cerca de cuatro mil
            personas.
          </p>

          <p>
            Entre 2009 y 2015, se incluyeron módulos para registrar hojas de vida, salud ocupacional y puntaje web; y a
            partir de 2016, comenzó un proceso de unificación de sus bases de datos. El uso de Sara ayudó a solucionar
            el gran problema de manejo de las bases de datos generadas en cada uno de los centros de cómputo de las
            sedes de la universidad que debían ocuparse de la gestión de la planta docente, administrativa, ocasional y,
            en algunos casos, de estudiantes auxiliares (Salamanca Guerrero, comunicación personal, 15 de septiembre de
            2023).
          </p>

          <p>
            Ahora bien, con el fin de superar las dificultades en la administración y planeación académica se creó el
            Sistema de Información Académica (<span className='caps'>SIA</span>), entre 1999 y 2003; fruto de un
            esfuerzo conjunto entre la Universidad Nacional y la Oficina de Cooperación Universitaria (
            <span className='caps'>OCU</span>) en donde se incorporaron tres aplicaciones para el manejo y flujo de la
            información de la universidad. En conjunto con la <span className='caps'>OCU</span>, se implementó una
            solución informática a nivel corporativo llamada{' '}
            <em>
              Universidad <span className='caps'>XXI</span>
            </em>
            ; un sistema que automatizó todos los procesos de gestión académica, en lo concerniente a los integrantes de
            la universidad, la planificación y el seguimiento de recursos docentes. Esta aplicación es manejada solo por
            los usuarios de nivel administrativo, para gestionar procesos de organización e inscripción de estudiantes,
            gestión de títulos y solicitudes, matrículas, listas de calificaciones, etc. (Acuña-Garzón, 2016, pp. 15-
            18).
          </p>

          <p>
            Por otro lado, encontramos el portal Unal <span className='caps'>SIA</span>, el sitio web del Sistema de
            Información Académica desarrollado por la Universidad Nacional de Colombia. Este portal, además de ser la
            plataforma gráfica con la cual los usuarios interactúan directamente –los del ámbito académico (docentes,
            estudiantes y administrativos) y también los visitantes–, permitió optimizar los procesos de carácter
            académico, ampliando los mecanismos de comunicación por medio del uso de herramientas de la comunicación
            electrónica. A su vez, integró a la ciudadanía en los flujos de información actualizada y unificada de los
            programas académicos, las asignaturas y las actividades académicas (Universidad Nacional de Colombia, 2015).
          </p>

          <p>
            Por último, como componente final de este sistema de información, encontramos los Indicadores{' '}
            <span className='caps'>SIA</span>, una aplicación desarrollada por la <span className='caps'>OCU</span>,
            orientada al análisis de datos y la toma de decisiones. Esto se logra gracias a la conceptualización de la
            realidad universitaria por medio del análisis de información procedente de Universidad{' '}
            <span className='caps'>XXI</span> (Acuña-Garzón, 2016, p. 20).
          </p>

          <p>
            El <span className='caps'>SIA</span> se implementó en Manizales en 2002, como sede pionera de la Universidad
            Nacional de Colombia; y su portal entró en funcionamiento completo a partir de 2003, bajo la coordinación de
            las Oficinas de Registro y Matrícula y el Centro de Cómputo. Este sistema ha soportado las necesidades de
            las nueve sedes de la universidad y los cerca de 50 000 estudiantes (41 500 de pregrado y 8500 de posgrado),
            más los cerca de 3200 profesores y 3100 miembros del personal administrativo (
            <span className='caps'>DNINFOA</span>, 2019).
          </p>

          <p>
            En la primera etapa, el sistema soportó los módulos de admisión y registro, programación académica,
            administración de programas curriculares, planta física, matrícula financiera y hojas de vida de
            estudiantes. De 2005 a 2006, se actualizó el sistema y se desarrollaron los módulos de solicitudes y deudas
            estudiantiles. A partir de 2010, el sistema se adaptó a los cambios estatutarios de la universidad enfocados
            en los créditos académicos y la modificación del Estatuto Estudiantil. Por último, en 2015 se actualizó la
            plataforma tecnológica para aumentar la velocidad y el desempeño de los servicios, incluyendo la emisión de
            certificados de matrícula y calificaciones, haciendo uso, esta vez, de firmas digitales —figura 13 (Acuña-
            Garzón, 2016).
          </p>
        </BloqueTexto>
        <ScrollImage
          img={'./img/figura_13.jpg'}
          caption={
            <>
              <p>
                <strong>Figura 13.</strong> Computadores de la Sede Manizales (2005).
              </p>
              <p>Fuente: Archivo Fotográfico Unimedios (Archivo de todos los años/2005/Manizales).</p>
            </>
          }
        />
        <BloqueTexto>
          <p>
            Con el desarrollo e implementación de estos sistemas de información, la Universidad Nacional de Colombia se
            pudo entender, por primera vez en su historia, como una <em>universidad digital</em>, la misma que se
            encontraba en proceso de asimilación de la cultura de los <em>bits</em> (los dígitos binarios). La
            universidad digital puede ser entendida como una institución y una comunidad en la que existe la
            interoperabilidad entre los usuarios que, en este caso, incluye a la comunidad universitaria y la ciudadanía
            interesada, así como las interfaces tecnológicas, los canales de comunicación, los planes y normativas en
            torno a las <span className='caps'>TIC</span>, la gestión de estas, y la infraestructura material para el
            procesamiento y el manejo de los sistemas de información (García-Peñalvo, 2008).
          </p>

          <p>
            Esta universidad, que ya no se limita a la infraestructura física y a las personas que interactúan con ella,
            pasó a tener también una plataforma virtual en la que todos los miembros podían interactuar de diversas
            maneras. Lo que podía percibirse, entrado el siglo <span className='caps'>XXI</span>, era la comunicación
            constante entre un grupo especializado de personas conocedoras de las ciencias de la computación, la
            informática y las comunicaciones, y un grupo de personas aún en proceso de comprender y asimilar estas
            tecnologías.
          </p>

          <p>
            A pesar de que los sistemas de información permitieron el funcionamiento de la Universidad Nacional de
            Colombia dentro de la era digital, el reto no solo fue tecnológico, también el choque con el uso de las
            tecnologías por la comunidad universitaria representa una de las mayores limitaciones para el correcto
            funcionamiento y apropiación de las nuevas tecnologías. En otras palabras, una vez instaurados los sistemas{' '}
            <span className='caps'>TIC</span>, la universidad enfrentó el desafío de consolidar una cultura digital
            dentro de su comunidad, la comprensión de sus herramientas tecnológicas y sus interfaces, las que conectan
            el sistema con la realidad práctica.
          </p>

          <p>
            Este proceso de adaptación tuvo dos caras: por un lado, estaba el desarrollo y la implementación interna de
            estas tecnologías que, por lo complejo de sus necesidades técnicas y materiales, requirió la conformación de
            equipos interdisciplinarios. Para implementar sistemas como Sara, <span className='caps'>SIA</span> o
            Hermes, se requirió no solo la participación de ingenieros e ingenieras de sistemas, sino también
            contadores, matemáticos, administradoras y diseñadoras. Esto implicó una adaptación disciplinaria a las
            tecnologías computacionales, tanto en sus lógicas técnicas como en sus estructuras conceptuales.
          </p>

          <p>
            Por otro lado, estaba la comunidad que debía utilizar estos sistemas de información, incluyendo estudiantes,
            docentes y administrativos. A todos ellos les concernía aprender a manejar computadoras y sus distintos
            portales: interfaces gráficas con funcionalidades específicas, ya sea para inscribir materias, postular
            proyectos o vincularse laboralmente. Se trató de un proceso autónomo que ya no dependía de funcionarios
            especializados en el manejo de las máquinas, sino que, ahora, todos debían enfrentarse a un mundo
            desconocido lleno de posibilidades sin precedentes, así como a barreras culturales inevitables. La era
            digital había llegado a la universidad y todos sus miembros debían adaptarse a una nueva realidad marcada
            por la consolidación de un lenguaje común.
          </p>
        </BloqueTexto>
      </Capitulo>
    </>
  );
}
