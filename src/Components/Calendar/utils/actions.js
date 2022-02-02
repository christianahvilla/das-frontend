import actionsTypes from './actionsTypes';

const deleteAppointmentBegin = () => ({
    type: actionsTypes.DELETE_APPOINTMENT_BEGIN,
});

const deleteAppointmentSuccess = ({ data }) => ({
    type: actionsTypes.DELETE_APPOINTMENT_SUCCESS,
    payload: data,
});

const deleteAppointmentError = ({ message }) => ({
    type: actionsTypes.DELETE_APPOINTMENT_ERROR,
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

const appointmentActions = {
    deleteAppointmentBegin,
    deleteAppointmentSuccess,
    deleteAppointmentError,
    fetchAppointmentBegin,
    fetchAppointmentSuccess,
    fetchAppointmentError,
};

export default appointmentActions;
