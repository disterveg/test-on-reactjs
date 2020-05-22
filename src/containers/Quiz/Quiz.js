import React, {Component} from 'react';
import './Quiz.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';
import axios from 'axios';
import Loader from '../../components/UI/Loader/Loader';

class Quizz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            results: {},
            isFinished: false,
            activeQuestion: 0,
            answerState: null,
            quiz: []
        }
        this.onAnswerClickHandler = this.onAnswerClickHandler.bind(this);
        this.retryHandler = this.retryHandler.bind(this);
    }

    onAnswerClickHandler(answerId) {
        answerId = String(answerId);
        if(this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0];
            if(this.state.answerState[key] === 'success') {
                return;
            }
        }
       const question = this.state.quiz[this.state.activeQuestion];
       const results = this.state.results;
        if(question.rightAnswerId === answerId) {
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

    async componentDidMount() {
        try {
            const response = await axios.get(`https://react-quiz-ee7d1.firebaseio.com/quizes/${this.props.match.params.id}.json`);
            const quiz = response.data;
            //console.log(quiz);

            this.setState({
                quiz,
                loading: false
            });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <div className="Quiz">
                <div className="QuizWrapper">
                    <h1>Ответьте на все вопросы</h1>
                    {
                        this.state.loading
                            ? <Loader />
                            : this.state.isFinished
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