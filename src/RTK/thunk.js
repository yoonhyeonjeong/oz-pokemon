import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchMultiplePokemonById = createAsyncThunk(
    "pokemon/fetchMultiplePokemonById", // 액션 타입 이름
    async maxPokemonId => {
        const numberArray = Array.from({length: maxPokemonId}, (_, i) => i + 1);

        // 개별 포켓몬 데이터를 가져오는 함수
        const fetchApi = async pokemonId => {
            const response1 = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`);
            const data1 = await response1.json();
            // 포켓몬 스탯 데이터
            const response2 = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
            const data2 = await response2.json();

            const pokemonData = {
                id: pokemonId,
                name: data1.names.find(el => el.language.name === "ko")?.name || "Unknown",
                description: data1.flavor_text_entries.find(el => el.language.name === "ko")?.flavor_text || "No description",
                genus: data1.genera[1].genus,
                baseStat: data2.stats.map(el => el.base_stat),
                statName: data2.stats.map(el => el.stat.name),
                front: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`,
                back: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemonId}.png`,
            };
            console.log(pokemonData);
            return pokemonData;
        };

        // 모든 포켓몬 데이터를 병렬로 가져오기
        return await Promise.all(numberArray.map(pokemonId => fetchApi(pokemonId)));
    }
);
