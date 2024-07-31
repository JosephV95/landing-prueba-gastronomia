// import { useState } from "react";
import ItemContacto from "./ItemContacto";

export default function Contacto() {

  //todo  Funciones necesarias para lograr el efecto hover en el color de los iconos antes de dividir en componentes (itemContacto)
  // const [hoverStates, setHoverStates] = useState({
  //   ubicacion: false,
  //   horarios: false,
  //   email: false,
  //   llamanos: false
  // });
  // const handleMouseEnter = (key) => {
  //   setHoverStates((prev) => ({
  //     ...prev,
  //     [key]: true
  //   }));
  // };
  // const handleMouseLeave = (key) => {
  //   setHoverStates((prev) => ({
  //     ...prev,
  //     [key]: false
  //   }));
  // };

  return (
    <section className="flex flex-col items-center px-2 pt-16 lg:px-5 gap-y-3" id="contacto">
      <h1 className="text-center text-3xl font-semibold text-[#5f5950]"><span className="text-[#ffb03b]">Contacta</span> con nosotros</h1>
      <p className="text-center text-lg text-[#68645e]"> 
        Encontranos en nuestro local o envianos tu mensaje
      </p>

      <div className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.3249616290364!2d-68.844271424675!3d-32.889575473616894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e091bcd1d08f5%3A0x3a927947c573062!2sMiraflores%20REST%C3%93!5e0!3m2!1ses-419!2sar!4v1712964718437!5m2!1ses-419!2sar"
          width="100%"  height="350" 
          style={{ border: '3px solid #ffb03b', boxShadow:'0 0 12px #ffb03b' }}
          allowFullScreen=""
          loading="lazy"
          title="Mapa del restaurante"
        ></iframe>
      </div>

      <article className=" md:w-[85%]  my-5 shadow-[0_0_19px_rgba(0,0,0,0.15)]">
        <div className="flex flex-wrap justify-evenly px-1 md:px-5 py-7 gap-y-2">
          <ItemContacto titulo={"Ubicación"} texto1={"Av. España 1159"} texto2={"Ciudad de Mendoza"} icono={"map"} />
          <ItemContacto titulo={"Horario"} texto1={"Lunes a Sabado:"} texto2={"10:00 hs. - 23:00 hs."} icono={"time-five"} />
          <ItemContacto titulo={"Email"} texto1={"info@gmail.com"} texto2={"contact@gmail.com"} icono={"envelope"} />
          <ItemContacto titulo={"Llamanos"} texto1={"+54 9 261 55488 51"} texto2={"+1 5589 55488 51"} icono={"phone"} />
          
          {/* //?  Antes de separar en componentes se uso esta forma para lograr que funcione el efecto hover en el color de los iconos
          <div
            className="w-[25%] group"
            onMouseEnter={() => handleMouseEnter("ubicacion")}
            onMouseLeave={() => handleMouseLeave("ubicacion")}
          >
            <i className="w-10 h-10 rounded-full flex justify-center items-center float-left bg-[#fff6e8] group-hover:bg-orange-300 transition-colors duration-500">
              <box-icon name="map"
                color={hoverStates["ubicacion"] ? "#ffffff" : "#ffb03b"} className="duration-700"
              ></box-icon>
            </i>
            <h4 className="ps-12 text-xl font-semibold text-gray-800">Ubicación: </h4>
            <p className="ps-12 text-[#68645e]">info@example.com
              <br />
              contacto@example.com
            </p>
          </div> */}
          
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
  );
}
