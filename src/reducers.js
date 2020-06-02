import {combineReducers} from 'redux'
import quizesReducer from './containers/QuizList/reducer';
import quizeReducer from './containers/Quiz/reducer';

export default function createReducer(injectedReducers = {}) {
    const rootReducer = combineReducers({
        quizes: quizesReducer, 
        quiz: quizeReducer,
        ...injectedReducers,
    });

    return rootReducer;
}