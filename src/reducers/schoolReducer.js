import { GET_SCHOOL, SCHOOL_LOADING, GET_SCHOOLS } from '../actions/types';


const initialState = {
    school: null,
    schools: null,
    isLoading: false
}

export default function(state = initialState, action) {
    switch (action.type) {
        case SCHOOL_LOADING: 
            return {
                ...state,
                isLoading: true
            }
        case GET_SCHOOL: 
            return {
                ...state,
                school: action.payload,
                isLoading: false
            }
            case GET_SCHOOLS: 
            return {
                ...state,
                schools: action.payload,
                isLoading: false
            }
        default:
            return state
    }
}