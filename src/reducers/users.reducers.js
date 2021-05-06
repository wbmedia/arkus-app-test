import {
  GET_USERS_FETCH,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
  ADD_USER_ACTION,
  ADD_USER_SUCCESS,
  ADD_USER_FAIL,
} from './../types/usersTypes';

const initialState = {
  users: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  if (typeof state === undefined) {
    return initialState;
  }
  switch (action.type) {
    case GET_USERS_FETCH:
      return {
        ...state,
        loading: true,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    case GET_USERS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case ADD_USER_ACTION:
      return {
        ...state,
        loading: true,
      };

    case ADD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: [...state.users, action.payload],
      };

    case ADD_USER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
