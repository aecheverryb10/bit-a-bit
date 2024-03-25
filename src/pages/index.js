import Link from "next/link";


export default function Home() {
  return (
    <main className={`min-h-[100vh] bg-cover`} style={{backgroundImage: `url('/img/cubierta.png')`}}>
      <div className="w-full min-h-[100vh] bg-portada flex flex-col align-center justify-center relative">
        <div className="grow flex flex-col align-center justify-center relative">
          <div className="bg-blue-100 rounded-b-xl absolute right-32 top-0 px-8 py-7">
            <img
              src={'./img/escudo-unal.svg'}
              alt={'Escudo universidad nacional'}
            />
          </div>          
          <img
            src={'./img/cubierta-lineas-1.svg'}
            className="absolute top-0 w-72"
            alt={'Lineas portada'}
          />
          <img
            src={'./img/cubierta-lineas-2.svg'}
            className="absolute top-0 right-0 w-5/12"
            alt={'Lineas portada 2'}
          />
          <img
            src={'./img/cubierta-lineas-3.svg'}
            className="absolute bottom-0 right-0 w-72"
            alt={'Lineas portada 3'}
          />

          <img
            src={'./img/cubierta-lineas-4.svg'}
            className="absolute bottom-0 w-72"
            alt={'Lineas portada'}
          />

          <div className="container text-white px-36 min-h-[70vh] bg-blue-100 bg-opacity-30 bg-blend-multiply flex flex-col">
            <div className="grow pt-32">
              <h1 className="font-bold text-8xl mb-3">Bit a Bit</h1>
              <h2 className="font-light text-[1.9em] tracking-widest leading-snug">La evolución digital en la<br/> Universidad Nacional de Colombia</h2>

            </div>
            <div className="text-center pb-8">
              <button className="text-center block mx-auto"><img className="w-14 block mx-auto" src="./img/scroll-button.svg" /> <span className="uppercase inline-block mt-4 text-lg tracking-wider opacity-80">Scroll down</span></button>
            </div>
          </div>
        </div>

        <div className="bg-black text-white py-5 border-t-2 border-white">
          <div className="container flex justify-end">
            <Link className="font-light text-xl mr-12 uppercase tracking-widest flex align-center" href={'/creditos'}><img className="w-9 mr-2" src="./img/boton-siguiente.svg" alt="botón siguiente"/> <span>Créditos</span></Link>
            <Link className="font-light text-xl uppercase tracking-widest flex align-center" href={'/autores'}><img className="w-9 mr-2" src="./img/boton-siguiente.svg" alt="botón siguiente"/> <span>Autores</span></Link>
          </div>
        </div>

      </div>
    </main>
  );
}
