import { useDispatch, useSelector } from "react-redux";
import ComidaItem from "./ComidaItem";
import { useState } from "react";
import comidasActions from "../../store/actions/comidasActions";
import { useNavigate } from "react-router-dom";

export default function MenuDelResto() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const comidasStore = useSelector(store => store.comidasReducer.comidas)
  const comidasRespaldoStore = useSelector(store => store.comidasReducer.comidasRespaldo)

  const [categoriaElegida, setCategoriaElegida] = useState("carnes")

  //* funcion para filtrado, en caso de que se clickee 'todas' se pasa como parametro el backup con todas las comidas
  const filtroParaComidas = (elArray, palabra)=>{
    if (palabra != "all") {
      setCategoriaElegida(palabra)
      dispatch(comidasActions.filtrar_comidas( {unArray: elArray, categoria: palabra} ))
    } else {
      setCategoriaElegida("all")
      dispatch(comidasActions.obtener_comidas(comidasRespaldoStore))
    }
  }

  return (
    <section className="bg-[url('../img/comidas-bg.jpg')] bg-center bg-cover bg-fixed" id="menu">
      <div className="py-16 space-y-5 bg-white/80"> 
        <h1 className="text-center text-3xl font-bold text-[#5f5950]">Consulta nuestro <span className="text-[#ffb03b]">sabroso Menú</span></h1>

        <div>
          <ul className="flex flex-row flex-wrap justify-center gap-x-3 gap-y-2 ">
            <li className={`px-4 py-2 cursor-pointer border-2 border-solid border-[#ffb03b] rounded-3xl inline hover:bg-[#ffb03b] hover:text-white duration-300 ${categoriaElegida =="carnes"? "bg-[#ffb03b] text-white" :""}`} data-filter="carnes" 
              onClick={()=> {filtroParaComidas(comidasRespaldoStore, "carnes")}}>Carnes</li>
            <li className={`px-4 py-2 cursor-pointer border-2 border-solid border-[#ffb03b] rounded-3xl inline hover:bg-[#ffb03b] hover:text-white duration-300 ${categoriaElegida =="pastas"? "bg-[#ffb03b] text-white" :""}`} data-filter="pastas" 
              onClick={()=> {filtroParaComidas(comidasRespaldoStore, "pastas")}}>Pastas</li>
            <li className={`px-4 py-2 cursor-pointer border-2 border-solid border-[#ffb03b] rounded-3xl inline hover:bg-[#ffb03b] hover:text-white duration-300 ${categoriaElegida =="pizzas"? "bg-[#ffb03b] text-white" :""}`} data-filter="pizzas" 
              onClick={()=> {filtroParaComidas(comidasRespaldoStore, "pizzas")}}>Pizzas</li>
            <li className={`px-4 py-2 cursor-pointer border-2 border-solid border-[#ffb03b] rounded-3xl inline hover:bg-[#ffb03b] hover:text-white duration-300 ${categoriaElegida =="ensaladas"? "bg-[#ffb03b] text-white" :""}`} data-filter="ensaladas" 
              onClick={()=> {filtroParaComidas(comidasRespaldoStore, "ensaladas")}}>Ensaladas</li>
          </ul>
        </div>

        <div className="filter-container w-full">
          <div className="w-full flex flex-row flex-wrap gap-y-2 justify-center lg:justify-between px-2 lg:px-16 ">
            {comidasStore.slice(0, 6).map((comida, index) => (
              <ComidaItem key={index} nombre={comida.nombre} img={comida.imgUrl} descripcion={comida.descripcion} precio={comida.precio} categoria={comida.categoria}></ComidaItem>
            ))}
            
          </div>
          <div className="flex justify-center mt-5">
            <button className="px-7 py-2.5 text-white text-lg font-semibold italic hover:bg-orange-500 rounded-full z-10 relative before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:rounded-full before:bg-orange-500 hover:before:scale-x-125 hover:before:scale-y-150 hover:before:opacity-0 hover:before:transition hover:before:duration-500"
            onClick={()=>{navigate("/menu-completo"); window.scrollTo(0, 0)}} >Ver Menú Completo</button>
          </div>
        </div>
      </div>
    </section>
  )
}
