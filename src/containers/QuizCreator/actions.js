import {CREATE_QUIZ_QUESTION, RESET_QUIZ_CREATION} from './constants';
import axios from 'axios';

export function createQuizQuestion(item) {
  return {
    type: CREATE_QUIZ_QUESTION,
    item
  };
}

export function resetQuizCreation() {
  return {
    type: RESET_QUIZ_CREATION
  };
}

export function finishCreateQuiz() {
  return async (dispatch, getState) => {
    await axios.post('https://react-quiz-ee7d1.firebaseio.com/quizes.json', getState().create.quiz);
    dispatch(resetQuizCreation());
  };
}
