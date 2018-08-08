import * as React from 'react';
import AnswerCard from './answer-card';

export interface IProps {
    answerCardList: any[];
    clickedAnswer: (s: string) => boolean;
}

const AnswerModal = ({
    answerCardList,
    clickedAnswer


}: IProps) => {
    
    const answerCards = answerCardList.map((a) => {
        return (
          <li key={a.id}>
            <AnswerCard
                display={a.display}
                value={a.value} 
                clickedAnswer={clickedAnswer}
            />
          </li>
        )
      });

    return (
        <div className={`answer-card-wrapper-cmp`}>
            <h1>Choose One</h1>
            <ul>{answerCards}</ul>
        </div>
    );
}

export default AnswerModal;

