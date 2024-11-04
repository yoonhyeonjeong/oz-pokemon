import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectPokemonById} from "../RTK/selector";
import {useState} from "react";
import styled from "styled-components";
import FavoriteButton from "../components/FavoriteButton";
import FlipCard from "../components/FlipCard";
import Modal from "../components/Modal";

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
    .genus {
        font-size: 20px;
        padding-bottom: 10px;
        color: #4285f4;
    }
    .description {
        white-space: pre-wrap;
        text-align: center;
    }
    img {
        width: 200px;
    }
    .detail-btn {
        padding-top: 15px;
    }
`;

const Detail = () => {
    const {pokemonId} = useParams(); //문자열로 들어옴
    const pokemon = useSelector(selectPokemonById(Number(pokemonId)));
    const [isModal, setIsModal] = useState(false);
    const ModalOpen = () => {
        setIsModal(prev => !prev);
    };
    return (
        <DetailContainer>
            {pokemon ? (
                <>
                    <div className="name">
                        {pokemon.name}
                        <FavoriteButton pokemonId={Number(pokemonId)} />
                    </div>
                    <p className="genus">{pokemon.genus}</p>
                    <div className="description">{pokemon.description}</div>
                    <FlipCard
                        front={pokemon.front}
                        back={pokemon.back}
                    />
                    <button
                        className="detail-btn"
                        onClick={() => {
                            ModalOpen();
                        }}
                    >
                        자세히 보기
                    </button>
                    {isModal && (
                        <Modal
                            pokemon={pokemon}
                            setIsModal={setIsModal}
                            isModal={isModal}
                        />
                    )}
                </>
            ) : (
                <p>포켓몬을 찾아올 수 없습니다</p>
            )}
        </DetailContainer>
    );
};

export default Detail;
