import React, {Component} from 'react';
import './Auth.css';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fomrControls: {
                email: {
                    value: '',
                    type: 'email',
                    label: 'Email',
                    errorMessage: 'Некорректный Email',
                    valid: false,
                    tocuhed: false,
                    validation: {
                        required: true,
                        email: true
                    }
                },
                password: {
                    value: '',
                    type: 'password',
                    label: 'Пароль',
                    errorMessage: 'Некорректный пароль',
                    valid: false,
                    tocuhed: false,
                    validation: {
                        required: true,
                        minLength: 6
                    }
                }
            }
        };

        this.SubmitHandler = this.SubmitHandler.bind(this);
        this.loginHandler = this.loginHandler.bind(this);
        this.registerHandler = this.registerHandler.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.validateControl = this.validateControl.bind(this);
    }

    SubmitHandler(event) {
        event.preventDefault();
    }

    loginHandler() {

    }

    registerHandler() {

    }

    validateControl(value, validation) {
        if(!validation) {
            return true;
        }

        let isValid = true;

        if(validation.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if(validation.email) {
            const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            isValid = reg.test(String(value).toLowerCase()) && isValid;
        }

        if(validation.minLength) {
            isValid = value.length >= validation.minLength && isValid;
        }
        
        return isValid;
    }

    onChangeHandler(event, controleName) {
        const fomrControls = {...this.state.fomrControls};
        const control = {...fomrControls[controleName]};

        control.value = event.target.value;
        control.touched = true;
        control.valid = this.validateControl(control.value, control.validation);

        fomrControls[controleName] = control;

        this.setState({
            fomrControls
        });
    }

    renderInputs() {
        return Object.keys(this.state.fomrControls).map((controleName, index) => {
            const control = this.state.fomrControls[controleName];
            return (
                <Input 
                    key={index}
                    type={control.type}
                    value={control.value}
                    valid={control.valid}
                    touched={control.touched}
                    label={control.label}
                    shouldValidate={!!control.validation}
                    errorMessage={control.errorMessage}
                    onChange={event => this.onChangeHandler(event, controleName)}
                />
            );
        });
    }

    render() {
        return (
            <div className="Auth">
                <div>
                    <h1>Авторизация</h1>

                    <form onSubmit={this.SubmitHandler} className="AuthForm">
                        {this.renderInputs()}
                        <Button
                            type="success"
                            onClick={this.loginHandler}
                        >
                            Войти
                        </Button>

                        <Button
                            type="primary"
                            onClick={this.registerHandler}
                        >
                            Зарегистрироваться
                        </Button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Auth;