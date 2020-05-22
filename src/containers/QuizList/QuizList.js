import React, {Component} from 'react';
import './QuizList.css';
import {NavLink} from 'react-router-dom';
import Loader from '../../components/UI/Loader/Loader';
import axios from 'axios';

class QuizList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quizes: [],
            loading: true,
        };
    };

    renderQuizes() {
        return this.state.quizes.map(quiz => {
            return (
                <li key={quiz.id}>
                <NavLink 
                    to={'/quiz/' + quiz.id}
                >
                    {quiz.name}
                </NavLink>
            </li>
            );
        });
    }

    async componentDidMount() {
        try {
            const response = await axios.get('https://react-quiz-ee7d1.firebaseio.com/quizes.json');

            const quizes = [];
            Object.keys(response.data).forEach((key, index) => {
                quizes.push({
                    id: key,
                    name: `Тест №${index + 1}`
                });
            });

            this.setState({
                quizes,
                loading: false
            });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <div className="QuizList">
                <div>
                    <h1>Список тестов</h1>

                    <ul>
                        {
                            this.state.loading
                                ? <Loader />
                                : this.renderQuizes()
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default QuizList;