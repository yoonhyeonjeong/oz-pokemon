import {configureStore} from "@reduxjs/toolkit";
import {favoriteSlice, pokemonSlice, toastSlice} from "./slice";

export const store = configureStore({
    reducer: {
        pokemon: pokemonSlice.reducer,
        favorite: favoriteSlice.reducer,
        toast: toastSlice.reducer,
    },
});
