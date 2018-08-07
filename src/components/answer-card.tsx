import * as React from 'react';

export interface IProps {
    title: string;
}

const AnswerCard = ({
    title
}: IProps) => {

  return (
    <div className="answer-card-cmp">
      <h3 className="ans-card-title">{title}</h3>
    </div>
  );
}

export default AnswerCard;