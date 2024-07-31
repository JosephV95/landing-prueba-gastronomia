export default function Hero() {
  return (
    <section className="w-full py-16 text-center flex flex-col justify-center items-center gap-6">
      {/* <div className="flex flex-col justify-center items-center"> */}
      <h1 className="text-3xl font-bold text-[#5f5950]">¿Porque elegir <span className="text-[#ffb03b]">Delicious?</span></h1>
      <p className="w-11/12 lg:w-7/12 text-[#5f5950] ">
        Descubre porque somos la elección preferida de los amantes de la buena comida.
      </p>
      {/* </div> */}

      <div className="flex flex-row flex-wrap gap-6 justify-center">
        <div className="cardHero w-11/12 md:w-9/12 lg:w-3/12 space-y-5">
          <span className="text-3xl font-semibold text-[#fabf66]">01</span>
          <h2 className="text-2xl font-bold font-Indie tracking-wider">Experiencia gastronómica</h2>
          <p className="italic">
           Nuestros platos son cuidadosamente elaborado por chefs expertos y con ingredientes frescos y de la más alta calidad.
          </p>
        </div>
        <div className="cardHero w-11/12 md:w-9/12 lg:w-3/12 space-y-5">
          <span className="text-3xl font-semibold text-[#fabf66]">02</span>
          <h2 className="text-2xl font-bold font-Indie tracking-wider">Ambiente confortable</h2>
          <p className="italic">
            Sumérgete en un ambiente cálido y acogedor que te invita a relajarte y disfrutar de una comida inolvidable. 
          </p>
        </div>
        <div className="cardHero w-11/12 md:w-9/12 lg:w-3/12 space-y-5">
          <span className="text-3xl font-semibold text-[#fabf66]">03</span>
          <h2 className="text-2xl font-bold font-Indie tracking-wider">Servicio de Calidad</h2>
          <p className="italic">
            Desde el momento en que llegas, nuestro equipo te brindara la mejor atención para que tengas una experiencia impecable.
          </p>
        </div>
      </div>
    </section>
  );
}
