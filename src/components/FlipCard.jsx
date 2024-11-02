import {useState} from "react";
import styled from "styled-components";

const FlipImageContainer = styled.div`
    width: 200px;
    height: 200px;
    position: relative;
    transition: 0.5s;
    transform-style: preserve-3d;
    transform: ${props => (props.flipped ? "rotateY(180deg)" : "rotateY(0deg)")};
`;
const FrontImage = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
`;
const BackImage = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    transform: rotateY(180deg);
`;
const FlipCard = ({front, back}) => {
    const [flipped, setFlipped] = useState(false);
    return (
        <>
            <FlipImageContainer flipped={flipped ? "flip" : ""}>
                <FrontImage src={front} />
                <BackImage src={back} />
            </FlipImageContainer>
            <button
                onClick={() => {
                    setFlipped(prev => !prev);
                }}
            >
                뒤집기
            </button>
        </>
    );
};

export default FlipCard;
