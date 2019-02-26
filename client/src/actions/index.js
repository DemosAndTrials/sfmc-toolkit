import axios from 'axios';
import { FETCH_USER } from './types';

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
        const res = await axios.post('/api/custom_activity', values)
        dispatch({
            type: FETCH_USER,
            payload: res.data
        });
    };