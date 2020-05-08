import React, {Component} from 'react';
import './Quiz.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';

class Quizz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeQuestion: 0,
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
        console.log('По кнопке кликнули' + answerId);
        this.setState({
            activeQuestion: this.state.activeQuestion +1
        });
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
                    />
                </div>
            </div>
        );
    };
}

export default Quizz;