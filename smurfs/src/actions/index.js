import axios from 'axios';

export const FETCH_SMURF_START = 'FETCH_SMURF_START'
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS'
export const FETCH_SMURF_FAILURE = 'FETCH_SMURF_FAILURE'

export const ADD_SMURF_START = 'ADD_SMURF_START'
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS'
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE'

export const DELETE_SMURF_START = 'DELETE_SMURF_START'
export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS'
export const DELETE_SMURF_FAILURE = 'DELETE_SMURF_FAILURE'



const baseURL = 'http://localhost:3333/smurfs'

export const getSmurfs = () => dispatch => {
    dispatch({ type: FETCH_SMURF_START })
    axios
        .get(baseURL)
        .then(res => dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: FETCH_SMURF_FAILURE, payload: err }))
}

export const addSmurfs = smurf => dispatch => {
    dispatch({ type: ADD_SMURF_START })
    axios
        .post(baseURL, smurf)
        .then(res => dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: ADD_SMURF_FAILURE, payload: err }))
}

export const deleteSmurf = id => dispatch => {
    dispatch({ type: DELETE_SMURF_START })
    axios
        .delete(`${baseURL}/${id}`)
        .then(res => dispatch({ type: DELETE_SMURF_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: DELETE_SMURF_FAILURE, payload: err }))
}