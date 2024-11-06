import {useRef} from "react";
import {styled} from "styled-components";
import {useEffect} from "react";
import RadarChart from "./RadarChart";
const ModalContainer = styled.dialog`
    border: none;
    border-radius: 8px;
    padding: 20px;
    max-width: 500px;
    width: 100%;
    position: relative;
    padding: 30px;
    .close-btn {
        position: absolute;
        top: 10px;
        right: 15px;
        border: none;
        background: transparent;
        font-size: 20px;
        cursor: pointer;
    }
    .modal-body {
        margin-top: 30px;
        p {
            margin-bottom: 30px;
            color: #1062e9;
            font-size: 26px;
            text-align: center;
            font-weight: bold;
        }
        ul li {
            font-size: 20px;
        }
    }
    &::backdrop {
        background-color: rgba(0, 0, 0, 0.7);
    }
    canvas {
        width: 400px !important;
        height: 400px !important;
        margin-left: 10px;
    }
`;

const Modal = ({pokemon, setIsModal, isModal}) => {
    const dialogRef = useRef(null);
    const showModal = () => {
        setIsModal(true);
    };
    const closeModal = () => {
        setIsModal(false);
    };

    useEffect(() => {
        if (isModal && dialogRef.current) {
            dialogRef.current.showModal();
        } else if (dialogRef.current) {
            dialogRef.current.close();
        }
    }, [isModal]); // isModal 상태가 변경될 때마다 실행

    const stats = pokemon.baseStat; // 스탯 배열
    const statNames = pokemon.statName; // 스탯 이름 배열
    return (
        <ModalContainer ref={dialogRef}>
            <button
                className="close-btn"
                onClick={closeModal}
            >
                닫기
            </button>
            <div className="modal-body">
                <p>{pokemon.name} 스탯</p>
                <RadarChart
                    stats={stats}
                    statNames={statNames}
                />
                <ul>
                    {stats.map((stat, index) => (
                        <li key={index}>
                            {statNames[index]} : {stat}
                        </li>
                    ))}
                </ul>
            </div>
        </ModalContainer>
    );
};

export default Modal;
