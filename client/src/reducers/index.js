import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import errorReducer from './errorReducer'
import authReducer from './authReducer';
import caConfigReducer from './CaConfigReducer';

export default combineReducers({
    errors: errorReducer,
    auth: authReducer,
    form: reduxForm,
    caConfigs: caConfigReducer
});