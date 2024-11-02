import {useSelector} from "react-redux";
import {useState} from "react";
import {selectGenus} from "../RTK/selector";
import {useNavigate} from "react-router-dom";
const GenusSelect = () => {
    const uniqueGenus = useSelector(selectGenus);
    const [selectedGenus, setSelectedGenus] = useState("");
    const navigate = useNavigate();
    const handleGenusChange = event => {
        const genus = event.target.value;
        setSelectedGenus(genus);
        if (genus) {
            navigate(`select?genus=${genus}`);
        }
    };

    return (
        <>
            <select
                onChange={handleGenusChange}
                value={selectedGenus}
            >
                <option value="">종류 선택</option>
                {uniqueGenus.map((el, index) => (
                    <option
                        key={index}
                        value={el}
                    >
                        {el}
                    </option>
                ))}
            </select>
        </>
    );
};

export default GenusSelect;
