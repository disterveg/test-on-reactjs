import React, {Component} from 'react';
import './QuizList.css';
import {NavLink} from 'react-router-dom';
import Loader from '../../components/UI/Loader/Loader';
import { connect } from 'react-redux';
import { compose } from 'redux';
import fetchQuizes from './actions';

class QuizList extends Component {
    constructor(props) {
        super(props);
    };

    renderQuizes() {
        return this.props.quizes.map(quiz => {
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
        this.props.fetchQuizes();
    }

    render() {
        return (
            <div className="QuizList">
                <div>
                    <h1>Список тестов</h1>

                    <ul>
                        {
                            this.props.loading || !this.props.quizes.length != 0
                                ? <Loader />
                                : this.renderQuizes()
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        quizes: state.quizes.quizes,
        loading: state.quizes.loading
    }
};
  
function mapDispatchToProps(dispatch) {
    return {
        fetchQuizes: () => dispatch(fetchQuizes())
    };
}
  
const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);
  
export default compose(
    withConnect
)(QuizList);