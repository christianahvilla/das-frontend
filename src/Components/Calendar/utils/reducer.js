import actionsTypes from './actionsTypes';

const INITIAL_STATE = {
    events: [],
    error: null,
    loading: false,
    status: null,
};

// eslint-disable-next-line default-param-last
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case actionsTypes.FECTH_EVENTS_BEGIN:
        return {
            ...state,
            loading: true,
            status: null,
            error: null,
        };

    case actionsTypes.FECTH_EVENTS_SUCCESS: {
        return {
            ...state, events: action.payload, loading: false, error: null,
        };
    }

    case actionsTypes.FECTH_EVENTS_ERROR:
        return {
            ...state, error: action.payload, loading: false, events: [],
        };

    case actionsTypes.CLEAR_ERROR: return { ...state, error: null };

    default:
        return state;
    }
};
