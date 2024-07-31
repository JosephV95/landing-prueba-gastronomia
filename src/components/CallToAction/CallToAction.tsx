import React from 'react'

export default function CallToAction({tituloEnHTML, texto }) {
  return (
    <div className='w-[90%] md:w-3/5 mx-auto absolute h-full flex flex-col gap-6 justify-center items-center text-white text-center px-4' >
        {tituloEnHTML}
        <p className='text-sm sm:text-base' data-aos="fade-right" data-aos-duration="500" data-aos-easing="linear" data-aos-delay="200">{texto}</p>
        <div className='flex flex-col sm:block' data-aos="zoom-in-up" data-aos-duration="500" data-aos-easing="linear" data-aos-delay="700">
          <a href='#menu' className='btnCall border-[3px] border-orange-400 rounded-full px-4 py-2 sm:px-6 sm:py-2.5 bg-black/30 mx-4 hover:bg-orange-400 transition duration-300 uppercase font-semibold text-sm mb-2'>Ir al Menú</a>
          <a className='btnCall border-[3px] border-orange-400 rounded-full px-4 py-2 sm:px-6 sm:py-2.5 bg-black/30 mx-4 hover:bg-orange-400 transition duration-300 uppercase font-semibold text-sm'>Reservar Mesa </a>
        </div>
        
    </div>
  )
}
