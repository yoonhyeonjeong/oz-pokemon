import {useRef} from "react";
import {styled} from "styled-components";
import {useEffect} from "react";
const ModalContainer = styled.dialog`
    border: none;
    border-radius: 8px;
    padding: 20px;
    max-width: 500px;
    width: 100%;
    height: 400px;
    position: relative;
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
            font-size: 20px;
        }
        ul li {
            font-size: 20px;
        }
    }
    &::backdrop {
        background-color: rgba(0, 0, 0, 0.7);
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
    console.log(pokemon, "pokemon");
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
                <ul>
                    {pokemon.baseStat.map((stat, index) => (
                        <li key={index}>
                            {pokemon.statName[index]} : {stat}
                        </li>
                    ))}
                </ul>
            </div>
        </ModalContainer>
    );
};

export default Modal;
