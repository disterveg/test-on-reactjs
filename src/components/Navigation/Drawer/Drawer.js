import React, {Component} from 'react';
import './Drawer.css';
import {NavLink} from 'react-router-dom';
import Backdrop from '../../UI/Backdrop/Backdrop';

const links = [
    {to: '/', label: 'Список', exact: true},
    {to: '/auth', label: 'Авторизация', exact: false},
    {to: '/quiz-creator', label: 'Создать тест', exact: false}
];

class Drawer extends Component {
    renderLinks() {
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <NavLink
                        to={link.to}
                        exact={link.exact}
                        onClick={this.props.onClose}
                    >
                        {link.label}
                    </NavLink>
                </li>
            );
        });
    };

    render() {
        const classes = ['Drawer'];

        if(!this.props.isOpen) {
            classes.push('close');
        }

        return (
            <React.Fragment>
            <nav className={classes.join(' ')}>
                <ul>
                    {this.renderLinks()}
                </ul>
            </nav>
            {this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null}
            </React.Fragment>
        );
    };
}

export default Drawer;