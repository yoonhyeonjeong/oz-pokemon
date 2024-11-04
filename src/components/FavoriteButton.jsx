import {useSelector, useDispatch} from "react-redux";
import {favoriteSlice, toastSlice} from "../RTK/slice";

const FavoriteButton = ({pokemonId, pokemonName}) => {
    // 배열의 각 아이템(item)이 pokemonId와 같은지 검사하여, 배열에 해당 포켓몬 ID가 존재하면 true를 반환하고, 없으면 false를 반환
    const isFavorite = useSelector(state => state.favorite.some(item => item === pokemonId));
    const dispatch = useDispatch();

    // 찜 함수
    const handleClick = e => {
        e.stopPropagation();
        if (isFavorite) {
            dispatch(favoriteSlice.actions.removeFromFavorite({pokemonId}));
            dispatch(toastSlice.actions.showToast(`${pokemonName}이/가 찜목록에서 제거되었습니다.`));
        } else {
            dispatch(favoriteSlice.actions.addToFavorite({pokemonId}));
            dispatch(toastSlice.actions.showToast(`${pokemonName}이/가 찜목록에서 추가되었습니다.`));
        }
    };

    return (
        <>
            <button
                onClick={e => {
                    handleClick(e);
                }}
                className={isFavorite ? "text-[red]" : ""}
            >
                {isFavorite ? "♥️" : "♡"}
            </button>
        </>
    );
};

export default FavoriteButton;
