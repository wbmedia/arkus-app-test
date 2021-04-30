import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import usersReducer from './../reducers/users.reducers';

const middleware = [thunk];

const configureStore = () => {
  return createStore(
    combineReducers({
      users: usersReducer,
    }),
    composeWithDevTools(applyMiddleware(...middleware))
  );
};

export default configureStore;
