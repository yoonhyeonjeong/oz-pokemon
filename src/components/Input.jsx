import {useNavigate} from "react-router-dom";
const Input = () => {
    const navigate = useNavigate();
    return (
        <>
            <span>🔍</span>
            <input
                type="text"
                placeholder="포켓몬을 검색하세요"
                className="border-b border-[darkgray] px-2"
                onChange={e => {
                    navigate(`/search?pokemon=${e.target.value}`);
                }}
            />
        </>
    );
};

export default Input;
