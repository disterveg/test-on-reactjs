import axios from 'axios';
import { 
    FETCH_QUIZ_SUCCESS, 
    QUIZ_SET_STATE, 
    FINISH_QUIZ, 
    QUIZ_NEXT_QUESTION, 
    QUIZ_RETRY, 
    FETCH_QUIZ_START, 
    FETCH_QUIZ_ERROR 
} from "./constants";

export function fetchQuizById(quizId) {
    return async dispatch => {
        dispatch(fetchQuizStart());

        try {
            const response = await axios.get(`https://react-quiz-ee7d1.firebaseio.com/quizes/${quizId}.json`);
            const quiz = response.data;

            dispatch(fetchQuizSuccess(quiz));
        } catch (error) {
            dispatch(fetchQuizError(error));
        }
    }
}

export function fetchQuizStart() {
    return {
        type: FETCH_QUIZ_START
    }
}

export function fetchQuizSuccess(quiz) {
    return {
        type: FETCH_QUIZ_SUCCESS,
        quiz
    }
}

export function quizSetState(answerState, results) {
    return {
        type: QUIZ_SET_STATE,
        answerState,
        results
    };
}

export function finishQuiz() {
    return {
        type: FINISH_QUIZ
    };
}

export function quizNextQuestion(number) {
    return {
        type: QUIZ_NEXT_QUESTION,
        number
    };
}

export function retryQuiz() {
    return {
        type: QUIZ_RETRY
    }
}

export function fetchQuizError(error) {
    return {
        type: FETCH_QUIZ_ERROR,
        error
    }
}

export function quizAnswerClick(answerId) {
    return (dispatch, getState) => {
        const state = getState().quiz;
        answerId = String(answerId);
        if(state.answerState) {
            const key = Object.keys(state.answerState)[0];
            if(state.answerState[key] === 'success') {
                return;
            }
        }
       const question = state.quiz[state.activeQuestion];
       const results = state.results;
        if(question.rightAnswerId === answerId) {
            if(!results[question.id]) {
                results[question.id] = 'success';
            }

            dispatch(quizSetState({[answerId]: 'success'}, results));
            const timeout = window.setTimeout(() => {
                if(isQuizFinished(state))  {
                    dispatch(finishQuiz());
                } else {
                    dispatch(quizNextQuestion(state.activeQuestion +1));
                }
                window.clearTimeout(timeout);
            }, 1000);
        } else {
            results[question.id] = 'error';
            dispatch(quizSetState({[answerId]: 'error'}, results));
        }
    }
}

function isQuizFinished(state) {
    return state.activeQuestion + 1 === state.quiz.length
}