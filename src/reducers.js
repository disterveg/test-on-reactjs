import {combineReducers} from 'redux'
import quizesReducer from './containers/QuizList/reducer';
import quizeReducer from './containers/Quiz/reducer';
import createQuizReducer from './containers/QuizCreator/reducer';

export default function createReducer(injectedReducers = {}) {
    const rootReducer = combineReducers({
        quizes: quizesReducer, 
        quiz: quizeReducer,
        create: createQuizReducer,
        ...injectedReducers,
    });

    return rootReducer;
}