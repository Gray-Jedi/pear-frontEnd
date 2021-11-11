import axios from 'axios'
import * as actions from '../constants/userConstants'
import { ORDER_LIST_MY_RESET } from '../constants/orderConstants'
import * as helper from './helperFunctions'

export const login = (email, password) => async (dispatch) => {
    try {

        dispatch(helper.description(actions.USER_LOGIN_REQUEST))

        const config = {
            headers:{
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.post(
            '/api/users/login/',
            { 'username': email, 'password': password },
            config

        )

        dispatch(helper.description(actions.USER_LOGIN_SUCCESS, data))

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch(error){

        dispatch(helper.description(actions.USER_LOGIN_FAIL, error.response.data.detail))


        // dispatch({

        //     type: actions.USER_LOGIN_FAIL,
        //     payload: error.response && error.response.data.detail
        //         ? error.response.data.detail
        //         : error.message
        // })
    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({ type: actions.USER_LOGOUT })
    dispatch({ type: actions.USER_DETAILS_RESET })
    dispatch({ type: ORDER_LIST_MY_RESET })
    dispatch({ type: actions.USER_LIST_RESET })
}

export const register = (name, email, password) => async (dispatch) => {
    try {
        dispatch(helper.description(actions.USER_REGISTER_REQUEST))
        const config = {
            headers:{
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.post(
            '/api/users/register/',
            { 'name': name, 'email': email, 'password': password },
            config
        )

        dispatch(helper.description(actions.USER_REGISTER_SUCCESS, data))
        dispatch(helper.description(actions.USER_LOGIN_REQUEST, data))
        dispatch(helper.description(actions.USER_LOGIN_SUCCESS, data))
        
        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch(error){

        // Have not tested the helper.registerFail so left the original dispatch code commented out below
        dispatch(helper.description(actions.USER_REGISTER_FAIL, error.response.data.detail))
        
        // dispatch({
        //     type: actions.USER_REGISTER_FAIL,
        //     payload: error.response && error.response.data.detail
        //         ? error.response.data.detail
        //         : error.message
        // })
    }
}

export const getUserDetails = (id) => async (dispatch, getState) => {
    try {

        dispatch(helper.description(actions.USER_DETAILS_REQUEST))

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers:{
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get(
            `/api/users/${id}`,
            config 
        )

        dispatch(helper.description(actions.USER_DETAILS_SUCCESS, data))

    } catch(error){

        // Have not tested the helper.registerFail so left the original dispatch code commented out below
        dispatch(helper.description(actions.USER_REGISTER_FAIL, error.response.data.detail))

        // dispatch({
        //     type: actions.USER_DETAILS_FAIL,
        //     payload: error.response && error.response.data.detail
        //         ? error.response.data.detail
        //         : error.message
        // })
    }
}

export const updateUserProfile = (user) => async (dispatch, getState) => {
    try {
        // dispatch(helper.description(actions.USER_UPDATE_PROFILE_REQUEST))
        dispatch({
            type: actions.USER_UPDATE_PROFILE_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.put(
            `/api/users/profile/update/`,
            user,
            config  
        )

        dispatch({
            type: actions.USER_UPDATE_PROFILE_SUCCESS,
            payload: data
        })

        dispatch({
            type: actions.USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch(error){
        dispatch({
            type: actions.USER_UPDATE_PROFILE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}

export const listUsers = (user) => async (dispatch, getState) => {
    try {
        dispatch({
            type: actions.USER_LIST_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get(
            `/api/users/`,
            config  
        )

        dispatch({
            type: actions.USER_LIST_SUCCESS,
            payload: data
        })

    } catch(error){
        dispatch({
            type: actions.USER_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}

export const deleteUser = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: actions.USER_DELETE_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.delete(
            `/api/users/delete/${id}/`,
            config  
        )

        dispatch({
            type: actions.USER_DELETE_SUCCESS,
            payload: data
        })

    } catch(error){
        dispatch({
            type: actions.USER_DELETE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}
