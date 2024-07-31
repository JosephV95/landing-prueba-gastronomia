import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function ItemContacto({ titulo, texto1, texto2, icono }) {
  const [efectoHover, setEfectoHover] = useState(false);

  return (
    <div
      className="w-[71%] sm:w-1/2 md:w-1/2 lg:w-1/4 group"
      onMouseEnter={() => {
        setEfectoHover(true);
      }}
      onMouseLeave={() => {
        setEfectoHover(false);
      }}
    >
      <i className="w-10 h-10 rounded-full flex justify-center items-center float-left bg-[#fff6e8] group-hover:bg-orange-300 transition-colors duration-500">
        <box-icon
          name={icono}
          color={efectoHover ? "#ffffff" : "#ffb03b"}
          className="duration-700"
        ></box-icon>
      </i>
      <h4 className="ps-12 text-xl font-semibold text-gray-800">{titulo}:</h4>
      <p className="ps-12 text-[#68645e]">
        {texto1}
        <br />
        {texto2}
      </p>
    </div>
  );
}
