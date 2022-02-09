import actionsTypes from './actionsTypes';

const INITIAL_STATE = {
    error: '',
    loading: false,
    status: null,
    appointment: null,
};

// eslint-disable-next-line default-param-last
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case actionsTypes.FETCH_APPOINTMENT_BEGIN:
        return {
            ...state,
            loading: true,
            status: null,
            error: '',
        };

    case actionsTypes.FETCH_APPOINTMENT_SUCCESS: {
        return { ...state, appointment: action.payload, loading: false };
    }

    case actionsTypes.FETCH_APPOINTMENT_ERROR:
        return { ...state, error: action.payload, loading: false };

    case actionsTypes.ADD_APPOINTMENT_BEGIN:
        return {
            ...state,
            loading: true,
            status: false,
            error: null,
        };

    case actionsTypes.ADD_APPOINTMENT_SUCCESS: {
        return {
            ...state, appointment: action.payload, status: true, loading: false,
        };
    }

    case actionsTypes.ADD_APPOINTMENT_ERROR:
        return { ...state, error: action.payload, loading: false };

    case actionsTypes.UPDATE_APPOINTMENT_BEGIN:
        return {
            ...state,
            loading: true,
            status: null,
            error: '',
        };

    case actionsTypes.UPDATE_APPOINTMENT_SUCCESS: {
        return {
            ...state, appointment: action.payload, status: true, loading: false,
        };
    }

    case actionsTypes.UPDATE_APPOINTMENT_ERROR:
        return { ...state, error: action.payload, loading: false };

    case actionsTypes.CLEAR_APPOINTMENT:
        return {
            ...state,
            loading: false,
            status: null,
            error: null,
            appointment: null,
        };

    default:
        return state;
    }
};
