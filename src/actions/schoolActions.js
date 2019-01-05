import axios from 'axios';

import { GET_SCHOOL, SCHOOL_LOADING, GET_ERRORS } from './types';

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