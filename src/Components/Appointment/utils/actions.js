import actionsTypes from './actionsTypes';

const addAppointmentBegin = () => ({
    type: actionsTypes.ADD_APPOINTMENT_BEGIN,
});

const addAppointmentSuccess = ({ data }) => ({
    type: actionsTypes.ADD_APPOINTMENT_SUCCESS,
    payload: data,
});

const addAppointmentError = ({ message }) => ({
    type: actionsTypes.ADD_APPOINTMENT_ERROR,
    payload: message,
});

const updateAppointmentBegin = () => ({
    type: actionsTypes.UPDATE_APPOINTMENT_BEGIN,
});

const updateAppointmentSuccess = ({ data }) => ({
    type: actionsTypes.UPDATE_APPOINTMENT_SUCCESS,
    payload: data,
});

const updateAppointmentError = ({ message }) => ({
    type: actionsTypes.UPDATE_APPOINTMENT_ERROR,
    payload: message,
});

const fetchAppointmentBegin = () => ({
    type: actionsTypes.FETCH_APPOINTMENT_BEGIN,
});

const fetchAppointmentSuccess = ({ data }) => ({
    type: actionsTypes.FETCH_APPOINTMENT_SUCCESS,
    payload: data,
});

const fetchAppointmentError = ({ message }) => ({
    type: actionsTypes.FETCH_APPOINTMENT_ERROR,
    payload: message,
});

const clearAppointment = () => ({
    type: actionsTypes.CLEAR_APPOINTMENT,
});

const appointmentActions = {
    addAppointmentBegin,
    addAppointmentSuccess,
    addAppointmentError,
    updateAppointmentBegin,
    updateAppointmentSuccess,
    updateAppointmentError,
    fetchAppointmentBegin,
    fetchAppointmentSuccess,
    fetchAppointmentError,
    clearAppointment,
};

export default appointmentActions;
