import {useSearchParams} from "react-router-dom";
import {useSelector} from "react-redux";
import Card from "../components/Card";
import {filterdSelectGenus} from "../RTK/selector";
const Select = () => {
    const [searchParams] = useSearchParams();
    const selectedGenus = searchParams.get("genus");
    console.log(selectedGenus); // genus키의 밸류값
    const filteredPokemons = useSelector(filterdSelectGenus(selectedGenus));
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
