import {
  GET_USERS_FETCH,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
  ADD_USER_ACTION,
  ADD_USER_SUCCESS,
  ADD_USER_FAIL,
  UPDATE_USER_ACTION,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  DELETE_USER_ACTION,
  DELETE_USER_FAIL,
  DELETE_USER_SUCCESS,
} from './../types/usersTypes';
import axios from 'axios';

let endPointUrl = `https://reqres.in/api/users/`;

export const getUsers = () => async (dispatch) => {
  try {
    const response = await axios.get(`${endPointUrl}`);
    dispatch({
      type: GET_USERS_FETCH,
      payload: response,
    });
    dispatch({
      type: GET_USERS_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: GET_USERS_FAIL,
      payload: error,
    });
  }
};

export const postUser = (first_name, last_name, avatar, email) => async (
  dispatch
) => {
  try {
    const response = await axios.post(
      `${endPointUrl}`,
      first_name,
      last_name,
      avatar,
      email
    );

    dispatch({
      type: ADD_USER_ACTION,
      payload: response.data,
    });

    console.log(response.data);
    dispatch({
      type: ADD_USER_SUCCESS,
      payload: response.data,
    });

    //return Promise.resolve(response.data);
  } catch (error) {
    dispatch({
      type: ADD_USER_FAIL,
      payload: error,
    });
  }
};

export const editUser = (first_name, last_name, avatar, email, id) => async (
  dispatch
) => {
  try {
    const response = await axios.put(
      `${endPointUrl}${id}`,
      first_name,
      last_name,
      avatar,
      email
    );
    dispatch({
      type: UPDATE_USER_ACTION,
      payload: response.data,
    });
    dispatch({
      type: UPDATE_USER_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_USER_FAIL,
      payload: error,
    });
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    const response = await axios.delete(`${endPointUrl}${id}`);
    dispatch({
      type: DELETE_USER_ACTION,
      payload: response.data,
    });
    dispatch({
      type: DELETE_USER_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_USER_FAIL,
      payload: error,
    });
  }
};
