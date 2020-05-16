import React, {Component} from 'react';
import './QuizCreator.css';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';

class QuizCreator extends Component {
    constructor(props) {
        super(props);
        this.state = {}

        this.submitHandler = this.submitHandler.bind(this);
    };

    submitHandler(event) {
        event.preventDefault();
    };

    onAddQuestionHandler() {

    }

    createQuizHandler() {
        
    }

    render() {
        return (
            <div className="QuizCreator">
                <div>
                    <h1>Создание теста</h1>

                    <form onSubmit={this.submitHandler}>
                        <select></select>

                        <Button
                            type="primary"
                            onClick={this.onAddQuestionHandler}
                        >
                            Добавить вопрос
                        </Button>

                        <Button
                            type="success"
                            onClick={this.createQuizHandler}
                        >
                            Создать тест
                        </Button>

                    </form>
                </div>
            </div>
        );
    }
}

export default QuizCreator;