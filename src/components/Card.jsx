import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import FavoriteButton from "./FavoriteButton";
import {useState, memo} from "react";
const CardContainer = styled.section`
    width: 150px;
    display: flex;
    border: 1px solid gray;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding-bottom: 10px;
    border-radius: 10px;
    img {
        width: 120px;
    }
`;
const Card = memo(({pokemon}) => {
    const [isImageLoading, setIsImageLoading] = useState(true);
    const navigate = useNavigate();
    return (
        <CardContainer
            onClick={() => {
                navigate(`/detail/${pokemon.id}`);
            }}
        >
            {isImageLoading ? <div className="w-[120px] h-[120px] leading-[120px] text-center">로딩중...</div> : null}
            <img
                onLoad={() => {
                    setIsImageLoading(false);
                }}
                style={{display: isImageLoading ? "none" : "block"}}
                src={pokemon.front}
                alt={pokemon.name}
            />
            <div>
                <span>{pokemon.name}</span>
                <FavoriteButton pokemonId={pokemon.id} />
            </div>
        </CardContainer>
    );
});

export default Card;
