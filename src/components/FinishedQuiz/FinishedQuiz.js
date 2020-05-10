import React from 'react';
import './FinishedQuiz.css';

const FinishedQuiz = props => {
    const countSuccess = Object.keys(props.results).reduce((total, key) => {
        if(props.results[key] === 'success') {
            total++;
        }
        return total;
    }, 0);

    return (
    <div className="FinishedQuiz">
        <ul>
            {props.quiz.map((quizItem, index) => {
                const classes = [
                    'fa',
                    props.results[quizItem.id] === 'success' ? 'fa-check' : 'fa-times',
                    props.results[quizItem.id]
                ];

                return (
                    <li
                        key={index}
                    >
                        <strong>{index + 1}</strong>.&nbsp;
                        {quizItem.question}
                        <i className={classes.join(' ')}></i>
                    </li>
                );
            })}
        </ul>
        <p>Правильно {countSuccess} из {props.quiz.length}</p>

        <div>
            <button onClick={props.onRetry}>Повторить</button>
        </div>
    </div>
);
}

export default FinishedQuiz;