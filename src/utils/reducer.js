import { combineReducers } from 'redux';
import authReducer from '../Components/Login/utils/reducer';
import agendaReducer from '../Components/Calendar/utils/reducer';
import appointmentReducer from '../Components/Appointment/utils/reducer';

export default combineReducers({
    auth: authReducer,
    agenda: agendaReducer,
    appointment: appointmentReducer,
});
