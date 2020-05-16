import React, {Component} from 'react';
import './Auth.css';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.SubmitHandler = this.SubmitHandler.bind(this);
        this.loginHandler = this.loginHandler.bind(this);
        this.registerHandler = this.registerHandler.bind(this);
    }

    SubmitHandler() {

    }

    loginHandler() {

    }

    registerHandler() {

    }

    render() {
        return (
            <div className="Auth">
                <div>
                    <h1>Авторизация</h1>

                    <form onSubmit={this.SubmitHandler} className="AuthForm">
                        <Input label="Email"/>
                        <Input label="Пароль"/>

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