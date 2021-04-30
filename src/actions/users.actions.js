import { GET_USERS_SUCCESS, GET_USERS_FAIL } from './../types/usersTypes';
import axios from 'axios';

export const getUsers = () => async (dispatch) => {
  try {
    const response = await axios.get(`https://reqres.in/api/users/`);
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
