import * as React from 'react';

export interface IProps {
    title: string;
    success: boolean;
    show: boolean;
    handleClose: (b: boolean) => void;
}

const AnswerModal = ({
    title,
    success,
    show,
    handleClose

}: IProps) => {

    const clickClose = () => {
        handleClose(success);
    };

    const showModal: string = show ? 'show-modal' : 'hide-modal';
    return (
        <div className={`modal-cmp ${showModal}`}>
            <h1>{title}</h1>
            <button onClick={clickClose}>Close</button>
        </div>
    );
}

export default AnswerModal;