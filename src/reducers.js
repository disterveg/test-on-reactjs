import {combineReducers} from 'redux';
import quizesReducer from './containers/QuizList/reducer';
import quizeReducer from './containers/Quiz/reducer';
import createQuizReducer from './containers/QuizCreator/reducer';
import authReducer from './containers/Auth/reducer';

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    quizes: quizesReducer,
    quiz: quizeReducer,
    create: createQuizReducer,
    auth: authReducer,
    ...injectedReducers,
  });

  return rootReducer;
}
