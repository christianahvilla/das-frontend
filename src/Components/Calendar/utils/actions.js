import actionsTypes from './actionsTypes';

const deleteEventBeding = () => ({
    type: actionsTypes.DELETE_APPOINTMENT_BEGIN,
});

const deleteEventSuccess = ({ data }) => ({
    type: actionsTypes.DELETE_APPOINTMENT_SUCCESS,
    payload: data,
});

const deleteEventError = ({ message }) => ({
    type: actionsTypes.DELETE_APPOINTMENT_ERROR,
    payload: message,
});

const fetchEventBegin = () => ({
    type: actionsTypes.FECTH_EVENTS_BEGIN,
});

const fetchEventSuccess = ({ data }) => ({
    type: actionsTypes.FECTH_EVENTS_SUCCESS,
    payload: data,
});

const fetchEventError = ({ message }) => ({
    type: actionsTypes.FECTH_EVENTS_ERROR,
    payload: message,
});

const clearError = () => ({
    type: actionsTypes.CLEAR_ERROR,
});

const eventActions = {
    deleteEventBeding,
    deleteEventSuccess,
    deleteEventError,
    fetchEventBegin,
    fetchEventSuccess,
    fetchEventError,
    clearError,
};

export default eventActions;
