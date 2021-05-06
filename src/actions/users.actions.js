import {
  GET_USERS_FETCH,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
  ADD_USER_ACTION,
  ADD_USER_SUCCESS,
  ADD_USER_FAIL,
} from './../types/usersTypes';
import axios from 'axios';

export const getUsers = () => async (dispatch) => {
  try {
    const response = await axios.get(`https://reqres.in/api/users/`);
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
      `https://reqres.in/api/users`,
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
      payload: [response.data],
    });

    //return Promise.resolve(response.data);
  } catch (error) {
    dispatch({
      type: ADD_USER_FAIL,
      payload: error,
    });
  }
};
