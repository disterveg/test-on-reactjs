import React, {Component} from 'react';
import './Quiz.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';

class Quizz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: {},
            isFinished: false,
            activeQuestion: 0,
            answerState: null,
            quiz: [
                {
                    id: 1,
                    question: 'Когда вымерли динозавры?',
                    rightAnserId: 2,
                    answers: [
                        {text: 'Сегодня', id: 1},
                        {text: 'В 1200 году', id: 2},
                        {text: 'В 1млн до н.э.', id: 3},
                        {text: 'Затрудняюсь ответить', id: 4}
                    ]
                },
                {
                    id: 2,
                    question: 'Болели ли динозавры раком?',
                    rightAnserId: 1,
                    answers: [
                        {text: 'Да', id: 1},
                        {text: 'Нет', id: 2},
                        {text: 'В 1млн до н.э.', id: 3},
                        {text: 'Затрудняюсь ответить', id: 4}
                    ]
                }
            ]
        }
        this.onAnswerClickHandler = this.onAnswerClickHandler.bind(this);
        this.retryHandler = this.retryHandler.bind(this);
    }

    onAnswerClickHandler(answerId) {
        if(this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0];
            if(this.state.answerState[key] === 'success') {
                return;
            }
        }
       const question = this.state.quiz[this.state.activeQuestion];
       const results = this.state.results;
        if(question.rightAnserId === answerId) {
            if(!results[question.id]) {
                results[question.id] = 'success';
            }

            this.setState({
                answerState: {[answerId]: 'success'},
                results
            });
            const timeout = window.setTimeout(() => {
                if(this.isQuizFinished())  {
                    this.setState({
                        isFinished: true
                    });
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion +1,
                        answerState: null
                    });
                }
                window.clearTimeout(timeout);
            }, 1000);
        } else {
            results[question.id] = 'error';
            this.setState({
                answerState: {[answerId]: 'error'},
                results
            });
        }
    }

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    retryHandler() {
        this.setState({
            activeQuestion: 0,
            answerState: null,
            isFinished: false,
            results: {}
        });
    }

    render() {
        return (
            <div className="Quiz">
                <div className="QuizWrapper">
                    <h1>Ответьте на все вопросы</h1>
                    {
                        this.state.isFinished
                        ? <FinishedQuiz 
                        results={this.state.results}
                        quiz={this.state.quiz}
                        onRetry={this.retryHandler}
                        />
                        : <ActiveQuiz 
                        answers={this.state.quiz[this.state.activeQuestion].answers}
                        question={this.state.quiz[this.state.activeQuestion].question}
                        onAnwserClick={this.onAnswerClickHandler}
                        quizLength={this.state.quiz.length}
                        answerNumber={this.state.activeQuestion + 1}
                        state={this.state.answerState}
                        />
                    }
                </div>
            </div>
        );
    };
}

export default Quizz;