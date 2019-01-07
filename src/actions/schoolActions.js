import axios from 'axios';

import { GET_SCHOOL, SCHOOL_LOADING, GET_ERRORS, GET_SCHOOLS, DELETE_SCHOOL } from './types';

export const getCurrentSchool = (id) => dispatch => {
    dispatch(setSchoolLoading())
    axios.get('http://localhost:3001/read/school' + id)
        .then(school => 
            dispatch({
                type: GET_SCHOOL,
                payload: school.data
            }))
            .catch(err => 
                dispatch({
                    type: GET_SCHOOL,
                    payload: {}
                }) )
}

export const setSchoolLoading = () => dispatch => {
    return {
        type: SCHOOL_LOADING
    }
}

export const getSchools = () => dispatch => {
    // dispatch(setSchoolLoading())
    axios.get('http://localhost:3001/read/schools')
        .then(schools => 
            dispatch({
                type: GET_SCHOOLS,
                payload: schools.data
            }))
            .catch(err => 
                dispatch({
                    type: GET_SCHOOLS,
                    payload: {}
                }) )
}

export const addSchool = (schoolData, history) => dispatch => {
    
    axios.post('http://localhost:3001/create/school', schoolData)
        .then(res => history.push('/dashboard'))
            .catch(err => 
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                })
                )
}

export const deleteSchool = (id, history) => dispatch => {
    
    axios.delete(`http://localhost:3001/delete/school/${id}`)
        .then(res => dispatch({
            type: GET_SCHOOLS,
            payload: res.data
        }))
            .catch(err => 
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                })
                )
} 

export const updateSchool = (id, schoolData) => dispatch => {
    
    axios.put(`http://localhost:3001/update/school/${id}`, schoolData)
        .then(res => dispatch({
            type: GET_SCHOOLS,
            payload: res.data
        }))
            .catch(err => 
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                })
                )
}  