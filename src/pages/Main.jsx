import {useSelector} from "react-redux";
import Card from "../components/Card";

const Main = () => {
    const pokemonData = useSelector(state => state.pokemon);
    return (
        <>
            {pokemonData.data && pokemonData.data.length > 0 ? (
                pokemonData.data.map(el => (
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

export default Main;
