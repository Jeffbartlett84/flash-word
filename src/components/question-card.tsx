import * as React from 'react';

export interface IProps {
    title: string;
    display: string;
}

const QuestionCard = ({
    title,
    display
}: IProps) => {

  return (
    <div className="question-card-cmp">
      <h3 className="taskTitle">{title}</h3>
      <p>{display}</p>
    </div>
  );
}

export default QuestionCard;