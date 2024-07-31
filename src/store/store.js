import { configureStore } from "@reduxjs/toolkit";
import comidasReducer from "./reducers/comidasReducer";

export const storeRestaurant = configureStore({
    reducer: {
        comidasReducer: comidasReducer
    }
})