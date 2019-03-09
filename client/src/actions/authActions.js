import axios from 'axios'
import { FETCH_USER, USER_LOGOUT, GET_ERRORS } from './types'
import { loading, clearLoading } from './loadingActions'

export const fetchUser = () => async dispatch => {
  dispatch(loading())
  const res = await axios.get('/api/users/user')
  dispatch({
    type: FETCH_USER,
    payload: res.data,
  })
  dispatch(clearLoading())
}

export const handleCredit = (token) => async dispatch => {
  dispatch(loading())
  const res = await axios.post('/api/stripe', token)
  dispatch({
    type: FETCH_USER,
    payload: res.data,
  })
}

export const logOut = () => async dispatch => {
  dispatch(loading())
  await axios.get('/api/users/logout')
  dispatch({
    type: USER_LOGOUT,
  })
}

export const registerUser = (userData, history) => async dispatch => {
  try {
    const res = await axios.post('/api/users/register', userData)
    console.log('new user response: ' + JSON.stringify(res.data));
    history.push('/login');
  } catch (err) {
    console.log(err);
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    })
  }
}
