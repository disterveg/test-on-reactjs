import axios from 'axios';
import { AUTH_SUCCESS } from './constants';
import { logout } from '../../components/Logout/actions';

export default function auth(email, password, isLogin) {
    return async dispatch => {
        const authData = {
            email,
            password,
            returnSecureToken: true
        };

        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDeSimt1B27uHjsYkgc1cYvYBsOBa-0MbU';
        if(!isLogin) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDeSimt1B27uHjsYkgc1cYvYBsOBa-0MbU';
        }

        const response = await axios.post(url, authData);
        
        const data = response.data;

        const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000);
        
        localStorage.setItem('token', data.idToken);
        localStorage.setItem('userId', data.localId);
        localStorage.setItem('expirationDate', expirationDate);

        dispatch(authSuccess(data.idToken));
        dispatch(autoLogout(data.expiresIn));
    }
}

export function autoLogout(time) {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, time * 1000);
    }
}

export function autoLogin() {
    return dispatch => {
        const token = localStorage.getItem('token');
        if(!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if(expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                dispatch(authSuccess(token));
                dispatch(autoLogout((expirationDate.getTime() - new Date().getTime()) / 1000));
            }
        }
    }
}
 
export function authSuccess(token) {
    return {
        type: AUTH_SUCCESS,
        token
    }
}