import {useNavigate} from "react-router-dom";
const Input = () => {
    const navigate = useNavigate();
    return (
        <>
            <span>🔍</span>
            <input
                type="text"
                className="border-b border-[darkgray] px-2"
                onChange={e => {
                    navigate(`/search?pokemon=${e.target.value}`);
                }}
            />
        </>
    );
};

export default Input;
