/* eslint-disable react/no-unescaped-entities */
const timeline_data = [
  {
    name: 'Tecnologías mecánicas',
    periods: [
      {
        title: 'Inicios del Siglo XVIII',
        description: 'Nacen las tarjetas perforadas',
        image: './img/timeline/tecnologias_mecanicas/siglo_xviii.jpg',
        caption: (
          <>
            Museo de Ciencias de Londres / Biblioteca de imágenes de ciencia y sociedad,{' '}
            <a href='https://creativecommons.org/licenses/by-sa/2.0/' target='_blank'>
              CC BY-SA 2.0
            </a>
            , via Wikimedia Commons
          </>
        ),
      },
      {
        title: '1763',
        description: 'Se inventa la primera máquina a vapor.',
        image: './img/timeline/tecnologias_mecanicas/1763.jpg',
        caption: (
          <>
            DigbyDalton,{' '}
            <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>
              CC BY-SA 3.0
            </a>
            , via Wikimedia Commons
          </>
        ),
      },
      {
        title: 'Inicios del Siglo XIX',
        description: 'Se inventa la máquina de tejer basada en las tarjetas perforadas en Francia.',
        image: './img/timeline/tecnologias_mecanicas/siglo_xix.jpg',
        caption: <>User Ghw on en.wikipedia, Public domain, via Wikimedia Commons</>,
      },
      {
        title: '1804',
        description: 'Primera locomotora a vapor',
        image: './img/timeline/tecnologias_mecanicas/1804.jpg',
        caption: <>Science Museum, Public domain, via Wikimedia Commons</>,
      },
      {
        title: '1855',
        description: 'Primer automóvil de gasolina',
        image: './img/timeline/tecnologias_mecanicas/1855.jpg',
        caption: <>Public domain, via Wikimedia Commons</>,
      },
    ],
  },
  {
    name: 'Tecnologías electrónicas',
    periods: [
      {
        title: '1876-1879',
        description: 'Teléfonos y bombillas eléctricas',
        image: './img/timeline/tecnologias_electronicas/1876.jpg',
        children: [
          {
            title: '1876',
            description: 'Patente del primer teléfono que funciona con electricidad',
            image: './img/timeline/tecnologias_electronicas/1876.jpg',
            caption: <>Public domain, via Wikimedia Commons</>,
          },
          {
            title: '1879',
            description: 'Patente de la bombilla eléctrica',
            image: './img/timeline/tecnologias_electronicas/1879.jpg',
            caption: <>William J. Hammer, Public domain, via Wikimedia Commons</>,
          },
        ],
      },
      {
        title: '1890',
        description: 'Se inventa la máquina electromecánica para tabular información en tarjetas perforadas',
        image: './img/timeline/tecnologias_electronicas/1890.jpg',
        caption: (
          <>
            Adam Schuster,{' '}
            <a href='https://creativecommons.org/licenses/by/2.0/' target='_blank'>
              CC BY 2.0
            </a>
            , via Wikimedia Commons
          </>
        ),
      },
      {
        title: '1895-1906',
        description: 'El Cinematógrafo y el primer avión',
        image: './img/timeline/tecnologias_electronicas/1895.jpg',
        children: [
          {
            title: '1895',
            description: 'Invención del cinematógrafo y primeras proyecciones de cine.',
            image: './img/timeline/tecnologias_electronicas/1895.jpg',
            caption: (
              <>
                Modificado por Mcapdevila -{' '}
                <a href='https://commons.wikimedia.org/wiki/File:Cinematograf-Camera2.jpg' target='_blank'>
                  proceso de modificación
                </a>
                ,{' '}
                <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>
                  CC BY-SA 3.0
                </a>
                , via Wikimedia Commons
              </>
            ),
          },
          {
            title: '1903',
            description: 'Fabrican el primer avión con motor',
            image: './img/timeline/tecnologias_electronicas/1903.jpg',
            caption: <>John T. Daniels, Public domain, via Wikimedia Commons</>,
          },
        ],
      },
      {
        title: '1914-1918',
        description: '1era Guerra Mundial ',
        image: './img/timeline/tecnologias_electronicas/1914_1918.jpg',
        caption: 'Ernest Brooks, Public domain, via Wikimedia Commons',
      },
    ],
  },
  {
    name: 'Tecnologías computacionales',
    periods: [
      {
        title: '1922 - 1926',
        description: 'Cine sonoro y la televisión',
        image: './img/timeline/tecnologias_computacionales/1922.jpg',
        children: [
          {
            title: '1922',
            description: 'Producción de la primera película sonora',
            image: './img/timeline/tecnologias_computacionales/1922.jpg',
            caption: (
              <>
                William Dickson (director);{' '}
                <a href='https://commons.wikimedia.org/wiki/File:Cinematograf-Camera2.jpg' target='_blank'>
                  William Heise (cinematographer)
                </a>
                ,{' '}
                <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>
                  Public domain
                </a>
                , via Wikimedia Commons
              </>
            ),
          },
          {
            title: '1926',
            description: 'Primeras demostraciones de la televisión mecánica',
            image: './img/timeline/tecnologias_computacionales/1926.jpg',
            caption: <>Orrin Dunlap, Jr., Public domain, via Wikimedia Commons</>,
          },
        ],
      },
      {
        title: '1930-1941',
        description: 'Primeras computadoras',
        image: './img/timeline/tecnologias_computacionales/1930.jpg',
        children: [
          {
            title: '1930',
            description: 'En Alemania se crea la computadora Z1',
            image: './img/timeline/tecnologias_computacionales/1930.jpg',
            caption: (
              <>
                Stahlkocher,{' '}
                <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>
                  CC BY-SA 3.0
                </a>
                , via Wikimedia Commons
              </>
            ),
          },
          {
            title: '1934',
            description:
              'Creación de la Oficina de Computación Thomas J. Watson con la ayuda de IBM en la Universidad de Columbia',
            image: './img/timeline/tecnologias_computacionales/1934.jpg',
            caption: <>CUCCA Newsletter, via Columbia.edu</>,
          },
          {
            title: '1941',
            description: 'La Computadora Z3 usa el sistema de numeración binario.',
            image: './img/timeline/tecnologias_computacionales/1941.jpg',
            caption: (
              <>
                Venusianer,{' '}
                <a href='https://creativecommons.org/licenses/by-sa/3.0/' target='_blank'>
                  CC BY-SA 3.0
                </a>
                , via Wikimedia Commons
              </>
            ),
          },
        ],
      },
      {
        title: '1939-1945',
        description: '2da Guerra Mundial',
        image: './img/timeline/tecnologias_computacionales/1930_2.jpg',
        children: [
          {
            title: '1930',
            description: 'Invención de la bomba atómica.',
            image: './img/timeline/tecnologias_computacionales/1930_2.jpg',
            caption: <>Courtesy of US Govt. Defense Threat Reduction Agency, Public domain, via Wikimedia Commons</>,
          },
          {
            title: '1939',
            description: 'Desarrollo del análisis criptográfico con la Máquina Enigma.',
            image: './img/timeline/tecnologias_computacionales/1939.jpg',
            caption: (
              <>
                Museo della Scienza e della Tecnologia "Leonardo da Vinci",{' '}
                <a href='https://creativecommons.org/licenses/by-sa/4.0' target='_blank'>
                  CC BY-SA 4.0
                </a>
                , via Wikimedia Commons
              </>
            ),
          },
          {
            title: '1942',
            description:
              'Patente de la primera versión del espectro ensanchado que permitiría las comunicaciones inalámbricas de largas distancias (wifi).',
            image: './img/timeline/tecnologias_computacionales/1942.jpg',
            caption: <>Public domain, via Wikimedia Commons</>,
          },
        ],
      },
      {
        title: '1946-1952',
        description: 'Inicia la computación digital comercial',
        image: './img/timeline/tecnologias_computacionales/1946.jpg',
        children: [
          {
            title: '1946',
            description:
              'Se crea «ENIAC», la calculadora electrónica que inauguró la era de la computación digital norteamericana',
            image: './img/timeline/tecnologias_computacionales/1946.jpg',
            caption: <>U.S. Army Photo, Public domain, via Wikimedia Commons</>,
          },
          {
            title: '1950',
            description: 'UNIVAC 1, la primera computadora de uso.comercial.',
            image: './img/timeline/tecnologias_computacionales/1950.jpg',
            caption: <>Daderot, Public domain, via Wikimedia Commons</>,
          },
          {
            title: '1952',
            description: 'Nought and crosses u “OXO”, el primer videojuego de la historia.',
            image: './img/timeline/tecnologias_computacionales/1952.jpg',
            caption: <>Public domain, via Wikimedia Commons</>,
          },
        ],
      },
      {
        title: '1957-1960',
        description: 'Primeras computadoras en América Latina y el Caribe',
        image: './img/timeline/tecnologias_computacionales/1957.jpg',
        children: [
          {
            title: '1957',
            description: 'Se instala la primera computadora en Colombia: una IBM 650 traída por Bavaria.',
            image: './img/timeline/tecnologias_computacionales/1957.jpg',
            caption: <>Mahlum, Public domain, via Wikimedia Commons</>,
          },
          {
            title: '1958-59',
            description: 'Se desarrolla COBOL, uno de los primeros lenguajes de programación de alto nivel.',
            image: './img/timeline/tecnologias_computacionales/1958_59.jpg',
            caption: (
              <>
                Eric Peacock,{' '}
                <a href='https://creativecommons.org/licenses/by-sa/4.0/' target='_blank'>
                  CC BY-SA 4.0
                </a>
                , via Wikimedia Commons
              </>
            ),
          },
          {
            title: '1960',
            description:
              'Se instala la primera computadora en Brasil en la Pontificia Universidad Católica de Río de Janeiro, la Datatron Burroughs B-205.',
            image: './img/timeline/tecnologias_computacionales/1960.jpg',
            caption: <>Via Tjsawyer.com</>,
          },
        ],
      },
    ],
  },
  {
    name: 'Tecnologías de la información y comunicaciones',
    periods: [
      {
        title: '1967-1976',
        description: 'Los primeros pasos del Internet ',
        image: './img/timeline/tecnologias_de_la_informacion_y_comunicaciones/1967.jpg',
        children: [
          {
            title: '1967',
            description: 'Desarrollo de ARPANET',
            image: './img/timeline/tecnologias_de_la_informacion_y_comunicaciones/1967.jpg',
            caption: <>ARPANET, Public domain, via Wikimedia Commons</>,
          },
          {
            title: '1969',
            description: 'En Cuba se fabrica una microcomputadora, la CID 201-A.',
            image: './img/timeline/tecnologias_de_la_informacion_y_comunicaciones/1969.jpg',
            caption: <>Via Cubamaterial.com</>,
          },
          {
            title: '1970',
            description: 'Nace la Asociación Colombiana de Ingenieros de Sistemas (ACIS) en Colombia.',
            image: './img/timeline/tecnologias_de_la_informacion_y_comunicaciones/1970.jpg',
            caption: <>Via acis.org.co</>,
          },
          {
            title: '1975-1976',
            description: 'Fundación de Microsoft y Apple',
            image: './img/timeline/tecnologias_de_la_informacion_y_comunicaciones/1975_1976.jpg',
            caption: <>Via News.microsoft.com</>,
          },
        ],
      },
      {
        title: '1980-1987',
        description: 'HTML, URL y los teléfonos móviles',
        image: './img/timeline/tecnologias_de_la_informacion_y_comunicaciones/1980.png',
        children: [
          {
            title: '1980',
            description: 'Se desarrolla el lenguaje HTML, las URL y el HTTP.',
            image: './img/timeline/tecnologias_de_la_informacion_y_comunicaciones/1980.png',
            caption: <>Html-source-code3.png: Reisioderivative work: Rehua, Public domain, via Wikimedia Commons</>,
          },
          {
            title: '1981',
            description: 'La primera computadora personal creada por IBM',
            image: './img/timeline/tecnologias_de_la_informacion_y_comunicaciones/1969.jpg',
            caption: (
              <>
                Modificado por Reseletti -{' '}
                <a href='https://commons.wikimedia.org/wiki/File:IBM_PC_5150.jpg' target='_blank'>
                  proceso de modificación
                </a>
                ,{' '}
                <a href='https://creativecommons.org/licenses/by-sa/3.0/deed.en' target='_blank'>
                  CC BY-SA 3.0
                </a>
                , via Wikimedia Commons
              </>
            ),
          },
          {
            title: '1984',
            description: 'Motorola lanza el primer teléfono móvil comercial, Dynatac 8000x.',
            image: './img/timeline/tecnologias_de_la_informacion_y_comunicaciones/1984.jpg',
            image_className: '!w-auto',
            caption: (
              <>
                Redrum0486,{' '}
                <a href='https://creativecommons.org/licenses/by-sa/3.0/deed.en' target='_blank'>
                  CC BY-SA 3.0
                </a>
                , via Wikimedia Commons
              </>
            ),
          },
        ],
        additionalData: {
          title: '1987',
          description: 'Jaron Lanier acuña el término de «realidad virtual»',
        },
      },
      {
        title: '1991-1998',
        description: 'Páginas web y Google',
        image: './img/timeline/tecnologias_de_la_informacion_y_comunicaciones/1991.jpg',
        children: [
          {
            title: '1991',
            description: 'Tim Berners-Lee publica la primera página web.',
            image: './img/timeline/tecnologias_de_la_informacion_y_comunicaciones/1991.jpg',
            caption: <>Via Home.cern</>,
          },
          {
            title: '1993',
            description: 'Se inventa el MP3 y los sistemas de compresión digital.',
            image: './img/timeline/tecnologias_de_la_informacion_y_comunicaciones/1993.png',
            caption: <>Public domain, via Wikimedia Commons</>,
          },
          {
            title: '1998',
            description: 'Lanzamiento de Google',
            image: './img/timeline/tecnologias_de_la_informacion_y_comunicaciones/1998.png',
            caption: <>Google, Public domain, via Wikimedia Commons</>,
          },
        ],
      },
    ],
  },
  {
    name: 'Redes sociales',
    periods: [
      {
        title: '2003-2010',
        description: 'Primeras apps',
        image: './img/timeline/redes_sociales/facebook_popularity.jpg',
        children: [
          {
            title: '2003',
            description: 'Nace Skype y Second Life, un mundo virtual 3D',
          },
          {
            title: '2004',
            description: 'Nace Facebook y Gmail',
          },
          {
            title: '2005',
            description: 'Nace YouTube',
          },
          {
            title: '2006',
            description: 'Nace Spotify',
          },
          {
            title: '2008',
            description: 'Nace Airbnb y el primer diseño de blockchain',
          },
          {
            title: '2009',
            description: 'Nacen Whatsapp, Uber y el Bitcoin',
          },
          {
            title: '2010',
            description: 'Nace Instagram',
          },
          {
            image: './img/timeline/redes_sociales/facebook_popularity.jpg',
            className: 'w-2/5',
            caption: (
              <>
                Tatiraju.rishabh -{' '}
                <a href='https://commons.wikimedia.org/wiki/File:Facebook_popularity.PNG' target='_blank'>
                  modification process
                </a>
                ,{' '}
                <a href='https://creativecommons.org/licenses/by-sa/3.0/deed.en' target='_blank'>
                  CC BY-SA 3.0
                </a>
                , via Wikimedia Commons
              </>
            ),
          },
        ],
      },
      {
        title: '2011-2016',
        description: 'Redes 4G y 5G',
        image: './img/timeline/redes_sociales/2011.png',
        children: [
          {
            title: '2011',
            description: 'Anuncian lanzamientos de las redes 4G en América Latina y el Caribe',
            image: './img/timeline/redes_sociales/2011.png',
            caption: (
              <>
                Foto de Iyke Ibeh de Pexels:
                https://www.pexels.com/es-es/foto/escritorio-ordenador-portatil-nina-sentado-17731675/
              </>
            ),
          },
          {
            title: '2015',
            description: 'La máquina de inteligencia artificial AlphaGo vence a un jugador profesional de Go',
            image: './img/timeline/redes_sociales/2015.png',
            caption: <>Via commons.wikimedia.org</>,
          },
          {
            title: '2016',
            description:
              'Nace TikTok. También la compañía Tesla anuncia novedades en su proyecto de vehículos autónomos.',
            image: './img/timeline/redes_sociales/2016.png',
            caption: (
              <>
                Foto de cottonbro studio de Pexels:
                https://www.pexels.com/es-es/foto/manos-iphone-tecnologia-monitor-5081930/
              </>
            ),
          },
          {
            title: '2017',
            description:
              'La Unión Internacional de Telecomunicaciones (UIT) presenta algunas especificaciones de las redes 5G aún en desarrollo en ciertos países.',
            image: './img/timeline/redes_sociales/2017.png',
            caption: (
              <>
                Foto de Ivan Samkov de Pexels:
                https://www.pexels.com/es-es/foto/hombre-persona-gafas-de-sol-telefono-inteligente-7902344/
              </>
            ),
          },
        ],
      },
      {
        title: '2018-2020',
        description: 'Asistentes virtuales y la Pandemia',
        image: './img/timeline/redes_sociales/2018.jpg',
        children: [
          {
            title: '2018',
            description:
              'Se popularizan los asistentes virtuales como Alexa (Amazon), Google Assistant y Siri (Apple).',
            image: './img/timeline/redes_sociales/2018.jpg',
            caption: <>Maurizio Pesce from Milan, Italia, CC BY 2.0, via Wikimedia Commons</>,
          },
          {
            title: '2019',
            description: 'Lanzan los primeros teléfonos con pantallas flexibles.',
            image: './img/timeline/redes_sociales/2019.jpg',
            caption: <>Foto de Onur Binay en Unsplash</>,
          },
          {
            title: '2020',
            description:
              ' Desarrollo de tecnologías médicas y de contención sanitaria (robots, drones, apps de rastreo, plataformas de videollamadas, trabajo remoto, entre otros.) ',
            image: './img/timeline/redes_sociales/2020.jpg',
            caption: <>Foto de Surface en Unsplash</>,
          },
        ],
      },
      {
        title: '2021-2023',
        description: 'La Inteligencia artificial y la realidad virtual en su esplendor',
        image: './img/timeline/redes_sociales/2021.png',
        children: [
          {
            title: '2021',
            description: ' Facebook anuncia el cambio de nombre de la compañía a Meta y el desarrollo de un metaverso.',
            image: './img/timeline/redes_sociales/2021.png',
            caption: <>Meta Platforms, Public domain, via Wikimedia Commons</>,
          },
          {
            title: '2022',
            description: 'Se lanza ChatGPT, prototipo de chatbot de inteligencia artificial.',
            image: './img/timeline/redes_sociales/2022.png',
            caption: <>OpenAI, Public domain, via Wikimedia Commons</>,
          },
          {
            title: '2023',
            description:
              ' Avances en la computación cuántica, la ciberseguridad, la web 3.0 y la realidad virtual, aumentada y mixta, entre otros.',
            image: './img/timeline/redes_sociales/2023.jpg',
            caption: <>Foto de stephan sorkin en Unsplash</>,
          },
        ],
      },
    ],
  },
];

export default timeline_data;
