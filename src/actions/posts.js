import * as api from '../api'
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKEPOST } from '../constants/actionTypes'
//!Action Creators - these are the functions that return actions

//this is what a normal Action creator would look like
// const getPosts = () =>{
//     const action = {type: 'FETCH_ALL', payload:[]}
//     return action
// }

//Asynchronus Action Creator
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchUrl();
        dispatch({ type: FETCH_ALL, payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({ type: CREATE, payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);
        dispatch({ type: UPDATE, payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);
        dispatch({ type: DELETE, payload: id })
    } catch (error) {
        console.log(error);
    }
}


export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id);
        dispatch({ type: LIKEPOST, payload: data })
    } catch (error) {
        console.log(error);
    }
}