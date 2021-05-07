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
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
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

    case UPDATE_USER_ACTION:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: [...state.users, action.payload],
      };

    case UPDATE_USER_FAIL:
      return state.users.flatMap((user) => {
        if (user.id === action.payload.id) {
          return {
            ...state,
            loading: false,
          };
        } else {
          return user;
        }
      });

    case DELETE_USER_ACTION:
      return {
        ...state,
        loading: true,
      };

    case DELETE_USER_SUCCESS:
      return {
        ...state,
        users: [...state.users.filter(({ id }) => id !== action.payload.id)],
        loading: false,
      };

    case DELETE_USER_FAIL:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
