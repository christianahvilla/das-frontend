import { combineReducers } from 'redux';
import authReducer from '../Components/Login/utils/reducer';

export default combineReducers({
    auth: authReducer,
});
