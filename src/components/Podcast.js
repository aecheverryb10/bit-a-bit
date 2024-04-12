import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Podcast = (props) => {
  const {
    title = 'Recurso 4. ¿Puede la Inteligencia Artificial hacer que las profesoras y los profesores desaparezcan?',
    subtitle,
    src = './audio/recurso_4_inteligencia_artificial.mp3',
    linkSpotify,
    linkWeb,
    linkIvoox,
  } = props;

  return (
    <div className='lg:pl-32 max-w-[1440px]'>
      <div className='rounded-l-[30px] text-white relative overflow-hidden shadow-xl'>
        <div
          className='absolute w-full h-full'
          style={{
            background: `radial-gradient(62.07% 180.09% at 100% -13.31%, rgba(45, 244, 198, 0.26) 0%, #171C30 56.39%)`,
          }}
        />
        <img className='absolute w-full opacity-20 h-full' src='./img/texture_34.png' alt='textura' />
        <div className='px-10 lg:pl-48 lg:pr-16 pt-12 pb-16 relative z-10 bg-blue-dark bg-opacity-30'>
          <div className='max-w-[700px] font-ancizar leading-none pb-5'>
            <p className='font-bold text-3xl mt-4 mb-2'>{title}</p>
            {subtitle && <p className='text-xl'>{subtitle}</p>}
          </div>
          {linkSpotify ? (
            <>
              <iframe
                style={{ borderRadius: '12px' }}
                src={`https://open.spotify.com/embed/episode/${linkSpotify}?utm_source=generator&theme=0`}
                width='100%'
                height='152'
                frameBorder='0'
                allowfullscreen=''
                allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
                loading='lazy'
              ></iframe>
              {(linkWeb || linkIvoox) && (
                <div className='flex font-ancizar items-center pt-10 justify-end'>
                  <p className='mr-6 text-lg opacity-50'>Escuchar en:</p>
                  {linkWeb && (
                    <a className='pr-5 mr-5 border-r border-white py-2' href={linkWeb} target='_blank'>
                      <img src='./img/radio_unal_logo_blanco.png' />
                    </a>
                  )}
                  {linkIvoox && (
                    <a href={linkIvoox} target='_blank'>
                      <img src='./img/logo_ivoox_blanco.png' />
                    </a>
                  )}
                </div>
              )}
            </>
          ) : (
            <>
              <div className='font-ancizar mt-5'>
                <AudioPlayer
                  showJumpControls={false}
                  showDownloadProgress={false}
                  showFilledProgress={false}
                  src={src}
                  layout={'horizontal-reverse'}
                  customAdditionalControls={[]}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Podcast;
