import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import caConfigReducer from './CaConfigReducer';

export default combineReducers({
    auth: authReducer,
    form: reduxForm,
    caConfigs: caConfigReducer
});