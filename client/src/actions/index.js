import axios from 'axios';
import { FETCH_USER, FETCH_CA_CONFIGS } from './types';

export const fetchUser = () =>
    async function (dispatch) {
        console.log("fetchUser action");
        const res = await axios.get('/api/current_user')
        dispatch({
            type: FETCH_USER,
            payload: res.data
        });
    };

export const createCaConfig = (values, history) => async dispatch => {
        console.log("createCaConfig values" + JSON.stringify(values));
        //console.log("createCaConfig history" + JSON.stringify(history));
        const res = await axios.post('/ca/create', values);
        console.log("createCaConfig res" + JSON.stringify(res));

        history.push('/ca/list');
        dispatch({
            type: FETCH_USER,
            payload: res.data
        });
    };

export const fetchCaConfigs = () =>
    async function (dispatch) {
        console.log("fetchCaConfigs action");
        const res = await axios.get('/ca/list');

        dispatch({
            type: FETCH_CA_CONFIGS,
            payload: res.data
        });
    };