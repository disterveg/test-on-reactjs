import axios from 'axios';

export default axios.create({
    baseURL: 'https://react-quiz-ee7d1.firebaseio.com/'
});