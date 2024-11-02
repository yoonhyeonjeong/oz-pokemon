import {createSlice} from "@reduxjs/toolkit";
import {fetchMultiplePokemonById} from "./thunk";

export const pokemonSlice = createSlice({
    name: "pokemon",
    initialState: {
        data: [],
        loading: true,
    },
    reducers: {}, // 동기적 상태 변경
    extraReducers: builder => {
        builder
            .addCase(fetchMultiplePokemonById.pending, state => {
                state.loading = true;
            })
            .addCase(fetchMultiplePokemonById.rejected, state => {
                state.loading = false;
            })
            .addCase(fetchMultiplePokemonById.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload; // 여기서 action.payload는 fetch된 포켓몬 데이터 배열
            });
    },
});

export const favoriteSlice = createSlice({
    name: "favorite",
    initialState: [1, 2, 3, 4],
    reducers: {
        addToFavorite(state, action) {
            state.push(action.payload.pokemonId);
        },
        removeFromFavorite(state, action) {
            const index = state.indexOf(action.payload.pokemonId);
            if (index !== -1) state.splice(index, 1);
        },
    },
});
