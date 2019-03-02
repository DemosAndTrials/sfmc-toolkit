import axios from 'axios';
import { FETCH_USER, FETCH_CA_CONFIGS, CA_CONFIGS } from './types';

export const fetchUser = () =>
    async function (dispatch) {
        //console.log("fetchUser action");
        const res = await axios.get('/auth/current_user')
        dispatch({
            type: FETCH_USER,
            payload: res.data
        });
    };

export const createCaConfig = (values, history) => async dispatch => {
        const res = await axios.post('/ca/create', values);

        history.push('/ca/list');
        dispatch({
            type: FETCH_USER,
            payload: res.data
        });
    };

export const fetchCaConfigs = () => async dispatch => {
        const res = await axios.get('/ca/list');
        dispatch({
            type: FETCH_CA_CONFIGS,
            payload: res.data
        });
    };

    export const deleteCaConfig = (id) => async dispatch => {
        const res = await axios.post('/ca/delete/' + id);
        dispatch({
            type: CA_CONFIGS,
            payload: res.data
        });
    };