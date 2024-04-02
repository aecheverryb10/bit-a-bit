import Capitulo from '@/components/Capitulo';
import { TituloCapitulo } from '@/components/Elements';

const Epilogo = () => {
  return (
    <Capitulo>
      <TituloCapitulo>
        <div className='flex items-center py-16'>
          <div>
            <h1 className='text-6xl font-light'>Epílogo</h1>
            <p className='text-4xl font-extralight mt-2'>La transformación digital, un proceso inacabado</p>
          </div>
        </div>
      </TituloCapitulo>
    </Capitulo>
  );
};

export default Epilogo;
