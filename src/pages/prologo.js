import Capitulo from '@/components/Capitulo';
import { BloqueTexto, ParrafoInicial } from '@/components/Elements';

const Prologo = () => {
  return (
    <Capitulo>
      <section className=' overflow-hidden'>
        <div className='text-white pt-24'>
          <div className='mb-12'>
            <div className='line-left flex w-[20%] items-center'>
              <span className={`block w-full border-t border-white`}></span>
              <span className='w-6 h-6 rounded-full border-white border block -mr-4' />
              <span className='w-2 h-2 rounded-full bg-white block ' />
            </div>
          </div>

          <div className='line-left flex w-[80%] items-center -mb-3'>
            <span className={`block w-full border-t border-white`}></span>
            <span className='w-6 h-6 rounded-full bg-green-light border block -mr-4' />
            <span className='w-2 h-2 rounded-full block bg-white' />
          </div>

          <div className='container container-title pl-36 overflow-hidden'>
            <div className='flex items-center py-20'>
              <div className=''>
                <h1 className='chapter-title text-6xl font-light'>Prólogo</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ParrafoInicial>
        <p className='first-letter:text-7xl first-letter:me-4 first-letter:tracking-n first-letter:float-start first-letter:font-sans first-letter:font-extralight'>
          En un mundo cada vez más interconectado y digital, las instituciones educativas enfrentan el desafío constante
          de adaptarse y evolucionar para seguir siendo relevantes y eficaces en su misión de formar a las futuras
          generaciones. Consciente de esta realidad, la Universidad Nacional de Colombia (Unal) ha emprendido un camino
          de transformación digital que no sólo busca integrar la tecnología en sus procesos académicos y
          administrativos, sino también fomentar una cultura de innovación y colaboración que trascienda a los
          territorios del país.
        </p>
      </ParrafoInicial>
      <BloqueTexto>
        <p>
          Este libro es un testimonio de ese esfuerzo colectivo, las historias que se expresan son el reflejo de un
          compromiso compartido por docentes, estudiantes, administrativos y directivos que nos muestran una crónica de
          la evolución digital de nuestra universidad contada a través de las voces de aquellos que han sido
          protagonistas y testigos de este cambio.
        </p>

        <p>
          A lo largo de este libro, exploramos cómo ha sido la transformación cultural y digital de la Universidad
          Nacional de Colombia, desde la implementación de sistemas de información y gestión académica hasta la creación
          de espacios de aprendizaje virtuales e híbridos, así como el fortalecimiento de la gestión de la investigación
          y la innovación tecnológica.
        </p>

        <p>
          Cada capítulo, enriquecido por las experiencias vivenciales de nuestros protagonistas, nos invita a descubrir
          cómo la transformación digital ha impactado no solo en la forma en que enseñamos y aprendemos, sino también en
          la manera en que nos relacionamos con nuestra comunidad y el mundo. Sobre lo último, es importante destacar el
          papel de la División Universidad Laboratorio (UNALab) en este proceso, pues ha sido el motor que ha impulsado
          el desarrollo de capacidades internas y la consolidación de equipos multidisciplinarios comprometidos con la
          innovación en cultura digital.
        </p>

        <p>
          Además, la inclusión de episodios de podcast en este recorrido es fundamental, ya que nos permite dar voz a
          quienes lideran la transformación digital de la Universidad Nacional de Colombia. Estos seis episodios, que
          conforman la serie <em>Historias Digitales Unal</em>, nos ofrecen una perspectiva más cercana y personal de
          los desafíos y logros alcanzados en este proceso. De modo que invitamos al lector a escuchar e interactuar con
          estos episodios, los cuales están disponibles en las plataformas de Radio Podcast Unal, Ivoox y Spotify.
        </p>

        <p>
          Este libro digital interactivo es más que un registro histórico, es una invitación a reflexionar sobre el
          papel de la educación en la era digital y a imaginar juntos el futuro de nuestra universidad. Agradecemos a
          todas las personas que han contribuido con sus relatos y experiencias a la construcción de esta obra, y
          esperamos que inspire a otros a sumarse a esta aventura de transformación y crecimiento.
        </p>

        <p>
          Extendemos nuestro agradecimiento a todas las personas que participaron en la construcción de estas historias.
        </p>
        <ul className='list-disc pl-5'>
          <li>
            José Alfonso Sánchez Peña – funcionario de la Dirección Nacional de Estrategia Digital (
            <span class='caps'>DNED</span>).
          </li>
          <li>
            Jenny Marcela Sánchez Torres – directora de la Dirección Nacional de Investigación y Laboratorios (
            <span class='caps'>DNIL</span>).
          </li>
          <li>
            Gustavo Adolfo Pérez Zapata – exdirector de la Dirección Nacional de Estrategia Digital (
            <span class='caps'>DNED</span>) (2018-2023).
          </li>
          <li>
            Javier Carreño Ortiz – funcionario Dirección Nacional de Estrategia Digital (<span class='caps'>DNED</span>)
            Sede Orinoquía.
          </li>
          <li>Juan Camilo Restrepo Gutiérrez – vicerrector de la Sede Medellín.</li>
          <li>Marcela Camacho – vicerrectora de la Sede de La Paz.</li>
          <li>José Ismael Peña Reyes – exvicerrector sede Bogotá.</li>
          <li>
            Henry Roberto Umaña Acosta – exdirector de la Dirección Nacional de Estrategia Digital{' '}
            <span class='caps'>DNED</span> (2012-2018).
          </li>
          <li>Mónica Forero Díaz – profesora asociada de la Escuela de Diseño Gráfico, Facultad de Artes.</li>
          <li>
            Johan Sebastián Eslava Garzón – director de la Dirección Nacional de Estrategia Digital (
            <span class='caps'>DNED</span>)
          </li>
          <li>Mónica María López – contratista de la División Universidad Laboratorio (UNALab)</li>
          <li>Elizabeth León Guzmán – profesora de Ingeniería de Sistemas, Facultad de Ingeniería Sede Bogotá.</li>
          <li>
            Carlos Andrés Salamanca – jefe División Nacional de Personal Académico, Dirección Nacional de Personal
            Académico y Administrativo.
          </li>
          <li>
            Kadir Obando – funcionario de la Dirección Nacional de Estrategia Digital (<span class='caps'>DNED</span>)
          </li>
          <li>
            Fabio Augusto González Osorio – profesor de Ingeniería de Sistemas, Facultad de Ingeniería Sede Bogotá.
          </li>
          <li>Colaboradores LAB101.</li>
        </ul>
        <p className='my-5'>
          Así mismo agradecemos a todos los colaboradores en el proceso de construcción de esta obra.
        </p>
        <ul className='list-disc pl-5 pb-5'>
          <li>Luz Helena Serrano, Edwin Cicery Vega, Jhon Alexander Sedano Delgado y demás colaboradores de UNALab.</li>
          <li>Nhora Paulina Parra, Joseph Ibañez, Jhon Prieto, Lina Paula Patiño y demás colaboradores de LAB101.</li>
          <li>Archivo Fotográfico de Unimedios</li>
          <li>
            Linda Acuña y Angélica Guerrero, estudiantes auxiliares de la <span class='caps'>DNED</span>.
          </li>
          <li>
            Diana Patricia Taborda Hoyos, Fabiola Fernanda Fonseca Betancourth, Claudia Liliana Camacho Tocora, Liliana
            Guaqueta Munar y demás colaboradores de la <span class='caps'>DNED</span>.
          </li>
          <li>Biblioteca de la Sede Bogotá.</li>
          <li>Archivo Central Histórico de la Universidad Nacional de Colombia.</li>
          <li>Podcast Radio Unal</li>
        </ul>
        <p>
          Invitamos a la comunidad universitaria y al público en general a apropiarse de este producto, compartirlo y
          comentarlo. Este libro es una herramienta valiosa para comprender los retos y oportunidades que presenta la
          era digital para la educación, y esperamos que sirva de inspiración para otras instituciones que buscan
          avanzar en su transformación digital.
        </p>
        <p>Liz Karen Herrera</p>
      </BloqueTexto>
    </Capitulo>
  );
};

export default Prologo;
