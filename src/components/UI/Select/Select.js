import React, {Component} from 'react';
import './Select.css';
import Input from '../Input/Input';

class Select extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            label: props.label,
            value: props.value,
            term: ''
        }

        this.onClickSelectHandler = this.onClickSelectHandler.bind(this);
        this.onClickItemHandler = this.onClickItemHandler.bind(this);
        this.reset = this.reset.bind(this);
    }

    onClickSelectHandler() {
        this.setState({
            isOpen : !this.state.isOpen
        });
    }

    onClickItemHandler(event) {
        this.props.onChange(event);
        
        this.setState({
            value : event.target.dataset.value,
            label: event.target.innerHTML,
            isOpen : !this.state.isOpen
        });
    }

    onChangeHandler(event) {
        this.setState({
            term : event.target.value,
        });
    }

    searchItems() {
        const visibleItems = this.props.items;
        if (this.state.term.length === 0) {
            return visibleItems;
        }
        return visibleItems.filter((item, index) => {
            return item.NAME.toLowerCase().indexOf(this.state.term.toLowerCase()) > -1;
        });
    }

    reset() {
        this.setState({
            isOpen: false,
            label: props.label,
            value: props.value,
            term: ''
        });
    }

    render() {
        const classes = ['Select'];

        if(this.state.isOpen) {
            classes.push('open');
        }

        return (
            <div className={classes.join(' ')}>
                <div className="Select__container">
                    <div className="Select__selection" onClick={this.onClickSelectHandler}>
                        <span className="Select__label">
                            {this.props.items.map((item) => {
                                if(this.state.value === item.ID) {
                                    return item.NAME;
                                }
                            })}
                            {this.state.value === '' ? this.state.label : null} 
                        </span>
                    </div>
                    <ul className="Select__dropdown-wrapper">
                        {this.props.view === 'has-search'
                        ? 
                        <Input 
                            value={this.state.term}
                            searchIcon="true"
                            onChange={event => this.onChangeHandler(event)}
                        />
                        : null}
                        {this.searchItems().map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    className={item.ID !== this.state.value ? 'Select__item' : 'Select__item selected'}
                                    data-value={item.ID}
                                    onClick={this.onClickItemHandler}
                                >
                                    {item.NAME}
                                </li>
                            );
                        })}
                        {this.searchItems().length === 0 ? <li className="Select__item">{this.props.notFoundmMsg}</li> : null}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Select;