import { useEffect } from "react";
import CarouselDelHeader from "../components/Carousel/CarouselDelHeader";
import Hero from "../components/Hero/Hero";
import SobreNosotros from "../components/SobreNosotros/SobreNosotros";
import { useDispatch } from "react-redux";
import comidasActions from "../store/actions/comidasActions";
import EventosPrivados from "../components/Eventos/EventosPrivados";
import {arrayDeComidas} from "../service/comidasApiLocal"

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(comidasActions.obtener_comidas(arrayDeComidas.comidas))
  }, []);

  return (
    <div className="container max-w-full ">
      <CarouselDelHeader />
      <SobreNosotros />
      <Hero />
      <EventosPrivados />
    </div>
  );
}
