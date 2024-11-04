import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import styled, {keyframes} from "styled-components";
import {toastSlice} from "../RTK/slice";
import {useState} from "react";

const fadeIn = keyframes`
    0%{
        opacity: 0;
        transform: translate(-50%, 20px);
    }
    100%{
        opacity: 1;
        transform: translate(-50%, 0);
    }
`;

const ToastContainer = styled.div`
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 9999;
    background: rgba(0, 0, 0, 0.75);
    padding: 15px;
    border-radius: 8px;
    color: #fff;
    animation: fadeIn 0.3s ease-in-out;
`;

const Toast = () => {
    const dispatch = useDispatch();
    const {isVisible, delay, message} = useSelector(state => state.toast);
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                dispatch(toastSlice.actions.hideToast());
            }, delay);
            return () => clearTimeout(timer); // 타이머삭제
        }
    }, [isVisible]);
    return (
        <>
            <ToastContainer>
                <div>{message}</div>
            </ToastContainer>
        </>
    );
};

export default Toast;
