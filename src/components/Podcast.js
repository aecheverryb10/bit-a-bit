import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Podcast = (props) => {
  const {
    title = '¿Puede la Inteligencia Artificial hacer que l@s profesor@s desaparezcan?',
    subtitle,
    src = './audio/recurso_4_inteligencia_artificial.mp3',
  } = props;

  return (
    <div className='pl-32 max-w-[1440px]'>
      <div className='rounded-l-[30px] text-white relative overflow-hidden'>
        <div
          className='absolute w-full h-full'
          style={{
            background: `radial-gradient(62.07% 180.09% at 100% -13.31%, rgba(45, 244, 198, 0.26) 0%, #171C30 56.39%)`,
          }}
        />
        <img className='absolute w-full opacity-20' src='./img/Texture 34.png' alt='textura' />
        <div className='pl-48 pr-16 py-16 relative z-10 bg-blue-dark bg-opacity-30'>
          <div className='max-w-[700px] font-ancizar leading-none'>
            <p className='text-xl'>Le invitamos a escuchar el podcast </p>
            <p className='font-bold text-3xl my-4'>{title}</p>
            {subtitle && <p className='text-xl'>{subtitle}</p>}
          </div>
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
        </div>
      </div>
    </div>
  );
};

export default Podcast;
