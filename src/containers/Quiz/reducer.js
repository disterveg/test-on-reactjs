import { 
  FETCH_QUIZ_SUCCESS, 
  QUIZ_SET_STATE, 
  FINISH_QUIZ, 
  QUIZ_NEXT_QUESTION, 
  QUIZ_RETRY,
  FETCH_QUIZ_START,
  FETCH_QUIZ_ERROR
} from './constants';

const initialState = {
  results: {},
  isFinished: false,
  activeQuestion: 0,
  answerState: null,
  quiz: null,
  error: null,
  loading: true
}

export default function quizReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_QUIZ_ERROR:
      return {
        ...state, 
        loading: false, 
        error: action.error
      }
    case FETCH_QUIZ_START:
      return {
        ...state, 
        loading: true
      }
    case FETCH_QUIZ_SUCCESS:
      return {
        ...state, 
        loading: false, 
        quiz: action.quiz
      }
    case QUIZ_SET_STATE:
        return {
          ...state,
          answerState: action.answerState,
          results: action.results
        }
    case FINISH_QUIZ:
        return {
            ...state,
            isFinished: true
        }
    case QUIZ_NEXT_QUESTION:
        return {
            ...state,
            answerState: null,
            activeQuestion: action.number
        }
    case QUIZ_RETRY:
        return {
            ...state,
            activeQuestion: 0,
            answerState: null,
            isFinished: false,
            results: {}
        }
    default:
      return state;
  }
}