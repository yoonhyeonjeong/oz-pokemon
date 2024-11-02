import {createSelector} from "@reduxjs/toolkit";

export const selectPokemonById = pokemonId =>
    createSelector(
        state => state.pokemon.data,
        pokemon => pokemon.find(el => el.id === pokemonId)
    );

export const selectPokemonByRegExp = reg =>
    createSelector(
        state => state.pokemon.data,
        pokemon => pokemon.filter(el => el.name.match(reg))
    );

export const selectFavoritePokemons = createSelector(
    state => state.pokemon.data,
    state => state.favorite,
    (pokemon, favorite) => {
        return pokemon.filter(el => favorite.includes(el.id));
    }
);

// 중복된 포켓몬 종류 배열 제거
export const selectGenus = createSelector(
    state => state.pokemon.data,
    pokemon => [...new Set(pokemon.map(pokemon => pokemon.genus))]
);

// 선택한 포켓몬 종류 배열
export const filterdSelectGenus = genus =>
    createSelector(
        state => state.pokemon.data,
        pokemon => pokemon.filter(pokemon => pokemon.genus === genus)
    );
