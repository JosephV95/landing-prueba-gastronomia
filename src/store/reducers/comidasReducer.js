import { createReducer } from "@reduxjs/toolkit";
import comidasActions from "../actions/comidasActions";

const initialState = {
    comidas: [
        {nombre: "random"},
        {nombre: "second"}
    ],
    comidasRespaldo: [
    ]
}

const comidasReducer = createReducer( initialState, (builder)=>{
    builder
    .addCase(comidasActions.obtener_comidas, (state, action)=>{
        return {...state, comidas: action.payload, comidasRespaldo: action.payload}
    })
    .addCase(comidasActions.filtrar_comidas, (state, action)=>{
        return {...state, comidas: action.payload}
    })
})
export default comidasReducer;