import { Carousel } from "@material-tailwind/react";
import './CarouselDelHeader.css'
import CallToAction from "../CallToAction/CallToAction";
 
export default function CarouselDelHeader() {
  return (
    <Carousel
      className=" h-[100vh] relative" id="miSlider" autoplay loop
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <div className="h-full w-full  bg-[url('../img/slide/slide-1.jpg')] bg-cover bg-top " id="inicio"> 
        <div className="h-full w-full absolute bg-black/60 backdrop-brightness-110 flex justify-center">
          <CallToAction 
          tituloEnHTML={<h2 data-aos="fade-down" data-aos-duration="500" data-aos-easing="linear" className="text-2xl sm:text-3xl md:text-4xl font-Kalam font-bold" ><span className="text-orange-500">Gastrono</span> Restaurante</h2>}  
          texto={'Descubre por qué somos la elección perfecta: una experiencia gastronómica excepcional, un ambiente acogedor y un servicio de calidad te esperan en nuestro restaurante. Bienvenido a una experiencia única en cada visita'}
          />
        </div>
      </div>
      
      <div className="h-full w-full  bg-[url('../img/slide/slide-2.jpg')] bg-cover bg-top "> 
        <div className="h-full w-full absolute bg-black/60 backdrop-brightness-110 flex justify-center">
          <CallToAction 
          tituloEnHTML={<h2 className="text-2xl sm:text-3xl md:text-4xl font-Kalam font-bold">La mejor comida</h2>}  
          texto={'Deléitate con nuestra exquisita cocina, ambiente acogedor y servicio excepcional. ¡Tu destino culinario perfecto te espera aquí!'}
          />
        </div>
      </div>
      <div className="h-full w-full  bg-[url('../img/slide/slide-3.jpg')] bg-cover bg-top "> 
        <div className="h-full w-full absolute bg-black/60 backdrop-brightness-110 flex justify-center">
          <CallToAction 
          tituloEnHTML={<h2 className="text-2xl sm:text-3xl md:text-4xl font-Kalam font-bold">Excelente atención</h2>}  
          texto={'Disfruta del ambiente reconfortante y déjate consentir con un servicio que superará tus expectativas. ¡Te esperamos para crear juntos momentos memorables!'}
          />
        </div>
      </div>
      
    </Carousel>
  );
}
