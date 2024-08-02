/* eslint-disable react/prop-types */

export default function ComidaItem({nombre, img, descripcion, precio, categoria}) {
  return (
    <div className={`w-[100%] lg:w-1/2 flex flex-row justify-center pr-1 lg:px-2  filtr-item `} data-category={categoria} 
    data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="linear" data-aos-once="true"> 
        <div className=" flex flex-col items-center justify-center">
            <img src={img} alt={nombre} className="w-16 sm:w-[4.5rem]  object-cover rounded-full border-2 border-orange-500  hover:scale-125 sm:hover:scale-[1.4] hover:transition hover:duration-500" />
            <h3 className="text-gray-800 font-bold font-Satisfy tracking-widest sm:hidden ">${precio}</h3>
        </div>
        <div className="w-4/5 ps-1 sm:ps-3">
            <h3 className="text-[#ff9900] font-bold lg:font-extrabold border-dotted border-b-2 border-red-300">{nombre}</h3>
            <p className="text-xs italic">{descripcion}</p>
        </div>
        <div className="2/12 hidden sm:block">
            <h3 className="text-gray-800 font-extrabold text-lg font-Satisfy tracking-widest">${precio}</h3>
        </div>
    </div>
  )
}
