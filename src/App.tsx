import * as React from 'react';
import './App.css';
import AnswerCard from './components/answer-card';
import QuestionCard from './components/question-card';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Flash Words!!!</h1>
        </header>
        <QuestionCard title='?' />
        <AnswerCard title='1'/>
        <AnswerCard title='2'/>
        <AnswerCard title='3'/>
      </div>
    );
  }
}

export default App;
