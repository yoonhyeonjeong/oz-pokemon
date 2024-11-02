import {selectFavoritePokemons} from "../RTK/selector";
import {useSelector} from "react-redux";
import Card from "../components/Card";
const Favorite = () => {
    const pokemon = useSelector(selectFavoritePokemons);
    console.log(pokemon);
    return (
        <>
            {pokemon && pokemon.length > 0 ? (
                pokemon.map(el => (
                    <Card
                        pokemon={el}
                        key={el.id}
                    />
                ))
            ) : (
                <div>찜 목록이 없습니다.</div>
            )}
        </>
    );
};

export default Favorite;
