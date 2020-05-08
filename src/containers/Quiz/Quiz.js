import React, {Component} from 'react';
import './Quiz.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';

class Quizz extends Component {
    constructor(props) {
        super(props);
        //this.state = [];
      }

    render() {
        return (
            <div className="Quiz">
                <div className="QuizWrapper">
                    <h1> Quiz</h1>
                    <ActiveQuiz />
                </div>
            </div>
        );
    };
}

export default Quizz;