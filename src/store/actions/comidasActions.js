import { createAction } from "@reduxjs/toolkit";

const obtener_comidas = createAction("obtenerComidas", (payload) => {
  return {payload};
});

const filtrar_comidas = createAction("filtrar_comidas", ({unArray, categoria}) => {
  let payload = unArray.filter(com => com.categoria == categoria)
  return {payload}
})

const comidasActions = {obtener_comidas, filtrar_comidas}

export default comidasActions
