import {useSearchParams} from "react-router-dom";
import {selectPokemonByRegExp} from "../RTK/selector";
import {getRegExp} from "korean-regexp";
import {useSelector} from "react-redux";
import Card from "../components/Card";

const Search = () => {
    const [searchParams] = useSearchParams();
    const param = searchParams.get("pokemon");
    const reg = getRegExp(param);
    const pokemon = useSelector(selectPokemonByRegExp(reg));
    console.log(pokemon);
    return (
        <>
            {pokemon.map(el => (
                <Card
                    pokemon={el}
                    key={el.id}
                />
            ))}
        </>
    );
};

export default Search;
