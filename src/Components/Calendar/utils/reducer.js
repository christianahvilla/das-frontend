import actionsTypes from './actionsTypes';

const INITIAL_STATE = {
    authenticated: null,
    error: '',
    loading: false,
    status: null,
};

// eslint-disable-next-line default-param-last
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case actionsTypes.LOGIN_BEGIN:
        return {
            ...state,
            loading: true,
            status: null,
            error: '',
        };

    case actionsTypes.LOGIN_SUCCESS:
        return { ...state, authenticated: action.payload, loading: false };

    case actionsTypes.LOGIN_ERROR:
        return { ...state, error: action.payload, loading: false };

    case actionsTypes.LOGOUT_BEGIN:
        return {
            ...state,
            loading: true,
            status: null,
            error: '',
        };

    case actionsTypes.LOGOUT_SUCCESS:
        return {
            ...state,
            loading: false,
            authenticated: null,
        };

    case actionsTypes.LOGOUT_ERROR:
        return { ...state, loading: false, error: action.payload };

    default:
        return state;
    }
};
