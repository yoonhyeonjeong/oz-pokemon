import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectPokemonById} from "../RTK/selector";
import styled from "styled-components";
import FavoriteButton from "../components/FavoriteButton";
import FlipCard from "../components/FlipCard";

const DetailContainer = styled.div`
    display: flex;
    border: 1px solid gray;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 60px;
    border-radius: 10px;
    .name {
        font-size: 28px;
        margin-bottom: 10px;
    }
    .description {
        white-space: pre-wrap;
        text-align: center;
    }
    img {
        width: 200px;
    }
`;

const Detail = () => {
    const {pokemonId} = useParams(); //문자열로 들어옴
    const pokemon = useSelector(selectPokemonById(Number(pokemonId)));
    console.log(pokemon);
    return (
        <DetailContainer>
            {pokemon ? (
                <>
                    <div className="name">
                        {pokemon.name}
                        <FavoriteButton pokemonId={Number(pokemonId)} />
                    </div>
                    <div className="description">{pokemon.description}</div>
                    <FlipCard
                        front={pokemon.front}
                        back={pokemon.back}
                    />
                </>
            ) : (
                <p>포켓몬을 찾아올 수 없습니다</p>
            )}
        </DetailContainer>
    );
};

export default Detail;
