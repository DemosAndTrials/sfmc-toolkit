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

export const createCaConfig = values =>
    async function (dispatch) {
        console.log("createCaConfig action");
        const res = await axios.post('/ca/create', values);
        dispatch({
            type: FETCH_USER,
            payload: res.data
        });
    };

    export const fetchCaConfigs = () => 
    async function (dispatch) {
        console.log("fetchCaConfigs action");
        const res = await axios.get('/ca/list');
      
        dispatch({ type: FETCH_CA_CONFIGS, payload: res.data });
      };