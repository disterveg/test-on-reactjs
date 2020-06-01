import {combineReducers} from 'redux'
import quizReducer from './containers/QuizList/reducer';

export default function createReducer(injectedReducers = {}) {
    const rootReducer = combineReducers({
        quiz: quizReducer,
        ...injectedReducers,
    });

    return rootReducer;
}