import React from 'react';
import './ActiveQuiz.css';
import AnswersList from './AnswersList/AnswersList';

const ActiveQuiz = props => (
  <div className="ActiveQuiz">
    <p className="Question">
      <span>
        <strong>{props.answerNumber}.</strong>&nbsp;
        {props.question}
      </span>

      <small>{props.answerNumber} из {props.quizLength}</small>
    </p>

    <AnswersList
      state={props.state}
      answers={props.answers}
      onAnwserClick={props.onAnwserClick}
    />
  </div>
);

export default ActiveQuiz;
