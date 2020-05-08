import React, {Component} from 'react';
import './Quiz.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';

class Quizz extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
    }

    onAnswerClickHandler(answerId) {
        if(this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0];
            if(this.state.answerState[key] === 'success') {
                return;
            }
        }
       const question = this.state.quiz[this.state.activeQuestion];
        if(question.rightAnserId === answerId) {
            this.setState({
                answerState: {[answerId]: 'success'}
            });
            const timeout = window.setTimeout(() => {
                if(this.isQuizFinished())  {
                    console.log('Finished');
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion +1,
                        answerState: null
                    });
                }
                window.clearTimeout(timeout);
            }, 1000);
        } else {
            this.setState({
                answerState: {[answerId]: 'error'}
            });
        }
    }

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    render() {
        return (
            <div className="Quiz">
                <div className="QuizWrapper">
                    <h1>Ответьте на все вопросы</h1>
                    <ActiveQuiz 
                        answers={this.state.quiz[this.state.activeQuestion].answers}
                        question={this.state.quiz[this.state.activeQuestion].question}
                        onAnwserClick={this.onAnswerClickHandler}
                        quizLength={this.state.quiz.length}
                        answerNumber={this.state.activeQuestion + 1}
                        state={this.state.answerState}
                    />
                </div>
            </div>
        );
    };
}

export default Quizz;