import {useSelector, useDispatch} from "react-redux";
import {favoriteSlice} from "../RTK/slice";
const FavoriteButton = ({pokemonId}) => {
    // 배열의 각 아이템(item)이 pokemonId와 같은지 검사하여, 배열에 해당 포켓몬 ID가 존재하면 true를 반환하고, 없으면 false를 반환
    const isFavorite = useSelector(state => state.favorite.some(item => item === pokemonId));
    const dispatch = useDispatch();
    return (
        <button
            onClick={e => {
                e.stopPropagation();
                dispatch(isFavorite ? favoriteSlice.actions.removeFromFavorite({pokemonId}) : favoriteSlice.actions.addToFavorite({pokemonId}));
            }}
            className={isFavorite ? "text-[red]" : ""}
        >
            {isFavorite ? "♥️" : "♡"}
        </button>
    );
};

export default FavoriteButton;
