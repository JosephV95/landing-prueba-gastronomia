import { useDispatch, useSelector } from "react-redux";
import ComidaItem from "../components/MenuDelResto/ComidaItem";
import { useEffect, useState } from "react";
import comidasActions from "../store/actions/comidasActions";
import { arrayDeComidas } from "../service/comidasApiLocal";

export default function Catalogo() {
  const dispatch = useDispatch()
  const comidasStore = useSelector(store => store.comidasReducer.comidas)
  const comidasRespaldoStore = useSelector(store => store.comidasReducer.comidasRespaldo)

  const categoriasComidas = ['carnes', 'pastas', 'sopas', 'pizzas', 'hamburguesas', 'ensaladas'];
  const [categoriaElegida, setCategoriaElegida] = useState("all")

  const filtroParaComidas = (elArray, palabra)=>{
    if (palabra != "all") {
      setCategoriaElegida(palabra)
      dispatch(comidasActions.filtrar_comidas( {unArray: elArray, categoria: palabra} ))
    } else {
      setCategoriaElegida("all")
      dispatch(comidasActions.obtener_comidas(comidasRespaldoStore))
    }
  }

  useEffect(() => {
    dispatch(comidasActions.obtener_comidas(arrayDeComidas.comidas))
    filtroParaComidas(comidasRespaldoStore, "all")
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(()=>{
    const selectNav = document.getElementById('navMio');
      selectNav.classList.remove('bg-transparent')
      selectNav.classList.add('bg-black/80')
  }, [])

  return (
    <section className="bg-[url('../img/comidas-bg.jpg')] bg-center bg-cover bg-fixed w-full " >
      <div className="py-20 space-y-6 bg-white/80 min-h-[70vh]">
        <h1 className="text-3xl text-center font-bold text-[#5f5950]">Disfruta nuestro <span className="text-[#ffb03b]">menú Completo</span></h1>

        <div>
          <ul className="flex flex-wrap justify-center gap-2">
            <li className={`px-2.5 py-1.5 lg:px-4 lg:py-2 cursor-pointer border-2 border-solid border-[#ffb03b] rounded-3xl inline hover:bg-[#ffb03b] hover:text-white duration-300 ${categoriaElegida =="all"? "bg-[#ffb03b] text-white" :""}`} data-filter="all" 
              onClick={()=> {filtroParaComidas(comidasRespaldoStore, "all")}}>Todas</li>
            {categoriasComidas.map((categoria, index)=>(
              <li key={index} className={`px-2.5 py-1.5 lg:px-4 lg:py-2 cursor-pointer border-2 border-solid border-[#ffb03b] rounded-3xl inline hover:bg-[#ffb03b] hover:text-white duration-300 ${categoriaElegida == categoria ? "bg-[#ffb03b] text-white" :""}`} 
              onClick={()=> {filtroParaComidas(comidasRespaldoStore, categoria)}}>{categoria.charAt(0).toUpperCase() + categoria.slice(1)}</li>
            ))}
          </ul>
        </div>

        <article className="w-full flex flex-row justify-center flex-wrap gap-y-2 px-2 lg:px-12 ">
          {comidasStore.map((comida, index)=>(
            <ComidaItem key={index} nombre={comida.nombre} img={comida.imgUrl} descripcion={comida.descripcion} precio={comida.precio}></ComidaItem>
          ))}
        </article>
      </div>
    </section>
  );
}
