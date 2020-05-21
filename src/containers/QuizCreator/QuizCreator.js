import React, {Component} from 'react';
import './QuizCreator.css';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import Select from '../../components/UI/Select/Select';
import {createControl, validate, validateForm} from '../../form/formFramework';

function createOptionControl(number) {
    return createControl({
        label: `Вариант${number}`,
        isFormValid: false,
        errorMessage: 'Значение не может быть пустым',
        id: number
    }, {required: true});
}

function createFormControls() {
    return {
        question: createControl({
            label: 'Введите вопрос',
            errorMessage: 'Вопрос не может быть пустым'
        }, {required: true}),
        option1: createOptionControl(1),
        option2: createOptionControl(2),
        option3: createOptionControl(3),
        option4: createOptionControl(4),
    }
}

class QuizCreator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quiz: [],
            isFormValid: false,
            rightAnswerId: '',
            formControls: createFormControls()
        };

        this.submitHandler = this.submitHandler.bind(this);
        this.selectChangeHandler = this.selectChangeHandler.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.onAddQuestionHandler = this.onAddQuestionHandler.bind(this);
        this.createQuizHandler = this.createQuizHandler.bind(this);
    };

    submitHandler(event) {
        event.preventDefault();
    };

    onAddQuestionHandler(event) {
        event.preventDefault();

        const quiz = this.state.quiz.concat();
        const index = quiz.length + 1;

        const {question, option1, option2, option3, option4} = this.state.formControls;

        const questionItem = {
            question: question.value,
            id: index,
            rightAnswerId: this.state.rightAnswerId,
            answers: [
                {text: option1.value, id: option1.id},
                {text: option2.value, id: option2.id},
                {text: option3.value, id: option3.id},
                {text: option4.value, id: option4.id}
            ]
        };

        quiz.push(questionItem);
        this.setState({
            quiz,
            isFormValid: false,
            rightAnswerId: '',
            formControls: createFormControls()
        });
    }

    createQuizHandler(event) {
        event.preventDefault();

        console.log(this.state.quiz);
    }

    changeHandler(value, controleName) {
        const formControls = {...this.state.formControls};
        const control = {...formControls[controleName]};

        control.touched = true;
        control.value = value;
        control.valid = validate(control.value, control.validation);
        formControls[controleName] = control;

        this.setState({
            formControls,
            isFormValid: validateForm(formControls)
        });
    }

    renderControls() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName];

            return (
                <React.Fragment key={index}>
                <Input
                    label={control.label}
                    value={control.value}
                    valid={control.valid}
                    shouldValidate={!!control.validation}
                    touched={control.touched}
                    errorMessage={control.errorMessage}
                    onChange={event => this.changeHandler(event.target.value, controlName)}
                />
                {index === 0 ? <hr /> : null}
                </React.Fragment>
            );
        });
    }

    selectChangeHandler(event) {
        this.setState({
            rightAnswerId: event.target.dataset.value,
            label: event.target.innerHTML
        });
    }

    render() {
        return (
            <div className="QuizCreator">
                <div>
                    <h1>Создание теста</h1>

                    <form onSubmit={this.submitHandler}>
                        {this.renderControls()}

                        <Select
                            key={'1'}
                            value={this.state.rightAnswerId}
                            label="Выберите правильный ответ"
                            onChange={event => this.selectChangeHandler(event)}
                            items={[
                                {ID: "1", NAME: "1"},
                                {ID: "2", NAME: "2"},
                                {ID: "3", NAME: "3"},
                                {ID: "4", NAME: "4"},
                                {ID: "3", NAME: "3"},
                                {ID: "3", NAME: "3"},
                                {ID: "3", NAME: "3"},
                                {ID: "3", NAME: "3"},
                                {ID: "3", NAME: "3"},
                                {ID: "3", NAME: "3"},
                                {ID: "3", NAME: "3"},
                                {ID: "3", NAME: "3"},
                                {ID: "3", NAME: "3"},
                                {ID: "3", NAME: "3"},
                                {ID: "3", NAME: "3"},
                                {ID: "3", NAME: "3"},
                                {ID: "3", NAME: "3"},
                                {ID: "3", NAME: "3"},
                                {ID: "3", NAME: "3"},
                                {ID: "3", NAME: "3"},
                                {ID: "3", NAME: "3"},
                                {ID: "3", NAME: "3"},
                                {ID: "3", NAME: "3"},
                                {ID: "3", NAME: "3"},
                                {ID: "3", NAME: "3"},
                                {ID: "3", NAME: "3"},
                                {ID: "3", NAME: "3"},
                                {ID: "3", NAME: "3"},
                                {ID: "3", NAME: "3"},
                                {ID: "3", NAME: "3"},
                                {ID: "3", NAME: "3"},
                                {ID: "3", NAME: "3"},
                                {ID: "3", NAME: "3"},
                                {ID: "3", NAME: "3"},
                                {ID: "3", NAME: "3"},
                                {ID: "3", NAME: "3"},
                                {ID: "3", NAME: "3"},
                                {ID: "3", NAME: "3"},
                                {ID: "3", NAME: "3"},
                                {ID: "3", NAME: "3"},
                                {ID: "3", NAME: "3"},
                                {ID: "3", NAME: "3"},
                                {ID: "3", NAME: "3"},
                                {ID: "3", NAME: "3"},
                                {ID: "3", NAME: "3"}
                            ]}
                        />
                        <Button
                            type="primary"
                            onClick={this.onAddQuestionHandler}
                            disabled={!this.state.isFormValid}
                        >
                            Добавить вопрос
                        </Button>

                        <Button
                            type="success"
                            onClick={this.createQuizHandler}
                            disabled={this.state.quiz.length === 0}
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