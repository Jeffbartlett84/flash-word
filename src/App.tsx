import * as React from 'react';
import './App.css';
import AnswerCardWrapper from './components/answer-card-wrapper';
import AnswerModal from './components/answer-modal';
import QuestionCard from './components/question-card';

class App extends React.Component {
  public state = {
    answerArr: [
      {display: '1', value: 'one'},
      {display: '2', value: 'two'},
      {display: '3', value: 'three'},
      {display: '4', value: 'four'},
      {display: '5', value: 'five'},
      {display: '6', value: 'six'},
      {display: '7', value: 'seven'},
      {display: '8', value: 'eight'},
      {display: '9', value: 'nine'},
      {display: '10', value: 'ten'}
    ],
    answerCardWrapperOptions: [
      {display: '1', value: 'one'},
      {display: '2', value: 'two'},
      {display: '3', value: 'three'},
    ],
    modalProps: {
      show: false,
      success: false,
      title: '',
    },
    questionArr: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'],
    questionProps: {
      title: '?',
      value: 'one',
    },
  };

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Flash Words!!!</h1>
        </header>
        <AnswerModal show={this.state.modalProps.show} success={this.state.modalProps.success} title={this.state.modalProps.title} handleClose={this.handleCloseModal} />
        <QuestionCard title={this.state.questionProps.title} display={this.state.questionProps.value}/>
        <AnswerCardWrapper answerCardList={this.state.answerCardWrapperOptions} clickedAnswer={this.handleClickedAnswer}/>
      </div>
    );
  };
  private generateNewQuestionCard = () => {
    const currentQuestion = this.state.questionProps.value
    const questionArr = this.state.questionArr.filter((q) => q !== currentQuestion);
    const randomizedQuestionIndex:number = this.getRandomArrayIndex(questionArr);
    const newRandomQuestion: string = questionArr[randomizedQuestionIndex];

    this.generateNewAnswerCards(newRandomQuestion);
  };

  private generateNewAnswerCards = (newQuestion: string) => {
    const correctAnswerIndex = this.state.answerArr.map((a:any) => a.value).indexOf(newQuestion);
    const correctAnswerCard = this.state.answerArr[correctAnswerIndex];
    const allWrongAnswersArr = this.state.answerArr.filter((v, i) => i !== correctAnswerIndex);
    const twoRandomWrongAnswers = this.shuffleArray(allWrongAnswersArr).filter((v, i) => i < 2)
    const newAnswerCards = this.shuffleArray([correctAnswerCard, ...twoRandomWrongAnswers]);

    this.setNewCardState(newQuestion, newAnswerCards);
  };

  private setNewCardState = (newQuestion: string, newanswerCards: any[]) => {
    this.setState({
      answerCardWrapperOptions: newanswerCards,
      questionProps: {
        value: newQuestion
      }
    })
  };

  private shuffleArray = (array: any[]) => {
    let i = 0;
    let j = 0;
    let temp = null;

    for (i = array.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }

    return array;
  }

  private getRandomArrayIndex = (array: any[]) => {
    const numquestions: number = array.length;
    return Math.floor(Math.random() * Math.floor(numquestions));
  };

 

  private handleCloseModal = (isSuccess: boolean) => {
    if (isSuccess) {
      this.setState({modalProps: {show: false}})
      this.generateNewQuestionCard();
    } else {
      this.setState({modalProps: {show: false}})
    }
  };

  private handleCorrectAnswer = (answerValue: string) => {
    this.setState({
      modalProps: {
        show: true,
        success: true,
        title: `That's the correct Answer!!! Good Job!!!`,
      }
    })
  };

  private handleIncorrectAnswer = (answerValue: string) => {
    this.setState({
      modalProps: {
        show: true,
        success: false,
        title: `Sorry... That's incorrect.`,
      }
    })
  };

  private handleClickedAnswer = (clickedAnswerValue: string) => {
    if (this.state.questionProps.value === clickedAnswerValue) {
      this.handleCorrectAnswer(clickedAnswerValue);

    } else {
      this.handleIncorrectAnswer(clickedAnswerValue)
    }
    return this.state.questionProps.value === clickedAnswerValue
  };
}

export default App;
