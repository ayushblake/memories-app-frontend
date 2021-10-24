import { FETCH_ALL, CREATE, UPDATE, LIKEPOST, DELETE } from '../constants/actionTypes'

const initialState = [];
export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...state, action.payload];
        case UPDATE:
        case LIKEPOST:
            return state.map(post => post._id === action.payload._id ? action.payload : post);
        case DELETE:
            return state.filter(post => post._id !== action.payload)
        default:
            return state;
    }
}