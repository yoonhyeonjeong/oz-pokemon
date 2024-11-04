import {useSelector} from "react-redux";
import Card from "../components/Card";
import Toast from "../components/Toast";
const Main = () => {
    const {data} = useSelector(state => state.pokemon);
    const {isVisible} = useSelector(state => state.toast);
    return (
        <>
            {data && data.length > 0 ? (
                data.map(el => (
                    <Card
                        pokemon={el}
                        key={el.id}
                    />
                ))
            ) : (
                <div>로딩중입니다.</div>
            )}
            {isVisible && <Toast />}
        </>
    );
};

export default Main;
