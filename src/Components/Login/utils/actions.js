import actionsTypes from './actionsTypes';

const fetchAuthBegin = () => ({
    type: actionsTypes.LOGIN_BEGIN,
});

const fetchAuthSuccess = ({ data }) => ({
    type: actionsTypes.LOGIN_SUCCESS,
    payload: data,
});

const fetchAuthError = ({ message }) => ({
    type: actionsTypes.LOGIN_ERROR,
    payload: message,
});

const fetchLogOutBegin = () => ({
    type: actionsTypes.LOGOUT_BEGIN,
});

const fetchLogOutSuccess = ({ data }) => ({
    type: actionsTypes.LOGOUT_SUCCESS,
    payload: data,
});

const fetchLogOutError = ({ message }) => ({
    type: actionsTypes.LOGOUT_ERROR,
    payload: message,
});

const authActions = {
    fetchAuthBegin,
    fetchAuthSuccess,
    fetchAuthError,
    fetchLogOutBegin,
    fetchLogOutSuccess,
    fetchLogOutError,
};

export default authActions;
