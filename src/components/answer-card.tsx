import * as React from 'react';

export interface IProps {
    display: string;
    value: string
    clickedAnswer: (s: string) => boolean;
}

const AnswerCard = ({
    display,
    value,
    clickedAnswer

}: IProps) => {

    const clickHandler = () => {
        clickedAnswer(value);
    };

  return (
    <div className="answer-card-cmp">
      <button onClick={clickHandler}>
        <h3 className="ans-card-title">{display}</h3>
      </button>
    </div>
  );
}

export default AnswerCard;