import React, {Component} from 'react';
import './QuizList.css';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

class QuizList extends Component {
    renderQuizes() {
        return[1, 2, 3].map((quiz, index) => {
            return (
                <li key={index}>
                <NavLink 
                    to={'/quiz/' + quiz}
                >
                    Тест {quiz}
                </NavLink>
            </li>
            );
        });
    }

    componentDidMount() {
        axios.get('https://react-quiz-ee7d1.firebaseio.com/quiz.json').then(response => {
            console.log(response);
        });
    }

    render() {
        return (
            <div className="QuizList">
                <div>
                    <h1>Список тестов</h1>

                    <ul>
                        {this.renderQuizes()}
                    </ul>
                </div>
            </div>
        );
    }
}

export default QuizList;