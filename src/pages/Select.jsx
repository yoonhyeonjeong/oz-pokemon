import {useSearchParams} from "react-router-dom";
import {useSelector} from "react-redux";
import Card from "../components/Card";
const Select = () => {
    const [searchParams] = useSearchParams();
    const selectedGenus = searchParams.get("genus");
    console.log(selectedGenus); // genus키의 밸류값
    const pokemonData = useSelector(state => state.pokemon.data);
    const filteredPokemons = pokemonData.filter(pokemon => pokemon.genus === selectedGenus);
    return (
        <>
            {filteredPokemons && filteredPokemons.length > 0 ? (
                filteredPokemons.map(el => (
                    <Card
                        pokemon={el}
                        key={el.id}
                    />
                ))
            ) : (
                <div>로딩중입니다.</div>
            )}
        </>
    );
};

export default Select;
