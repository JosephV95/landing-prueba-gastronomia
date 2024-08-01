import ItemContacto from "../components/Contacto/ItemContacto";

export default function Contacto() {
  return (
    <section className="flex flex-col items-center px-2 pt-16 lg:px-5 gap-y-3" id="contacto">
      <h1 className="text-center text-3xl font-semibold text-[#5f5950]"><span className="text-[#ffb03b]">Contacta</span> con nosotros</h1>
      <p className="text-center text-lg text-[#68645e]"> 
        Encontranos en nuestro local o envianos tu mensaje
      </p>

      <article className=" md:w-[85%]  my-5 shadow-[0_0_19px_rgba(0,0,0,0.15)]">
        <div className="flex flex-wrap justify-evenly px-1 md:px-5 py-7 gap-y-2">
          <ItemContacto titulo={"Ubicación"} texto1={"Av. España 1159"} texto2={"Ciudad de Mendoza"} icono={"map"} />
          <ItemContacto titulo={"Horario"} texto1={"Lunes a Sabado:"} texto2={"10:00 hs. - 23:00 hs."} icono={"time-five"} />
          <ItemContacto titulo={"Email"} texto1={"info@gmail.com"} texto2={"contact@gmail.com"} icono={"envelope"} />
          <ItemContacto titulo={"Llamanos"} texto1={"+54 9 261 55488 51"} texto2={"+1 5589 55488 51"} icono={"phone"} />
          
        </div>

        <form action="" className="shadow-[0_-5px_10px_rgba(0,0,0,0.1)] mt-1 w-full px-4 md:px-16 py-7">
          <div className="space-y-5 ">
            <div className="md:columns-2 space-y-4 md:space-y-0">
              <div className="">
                <input type="text" name="nombre" id="nombre" placeholder="Ingresa tu Nombre" required
                className="w-full rounded-md border-2 border-orange-100/70 py-2 px-4 text-gray-700 shadow-sm  placeholder:text-gray-500 focus:ring-3 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6"/>
              </div>
              <div className="">
                <input type="email" name="email" id="email" placeholder="Email" required
                className="w-full rounded-md border-2 border-orange-100/70 py-2 px-4 text-gray-700 shadow-sm  placeholder:text-gray-500 focus:ring-3 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6"/>
              </div>
            </div>
            <div >
              <textarea name="mensaje" id="mensajeTexto" cols="30" rows="5" placeholder="Dejanos tu mensaje" required
              className="w-full rounded-md border-2 border-orange-100/70 py-2 px-4"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="px-6 py-2.5 bg-orange-300 hover:bg-orange-500 text-white rounded-3xl   relative after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:rounded-full after:bg-orange-500 hover:after:scale-x-125 hover:after:scale-y-150 hover:after:opacity-0 hover:after:transition hover:after:duration-500">Enviar Mensaje</button>
            </div>
          </div>
        </form>
      </article>
    </section>
  )
}
