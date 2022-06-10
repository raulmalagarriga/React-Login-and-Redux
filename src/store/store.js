import { configureStore } from '@reduxjs/toolkit';
import { combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// Reducers
import { authReducer } from '../reducers/authReducers';
import { editReducer } from '../reducers/editReducer';
import { uiReducer } from '../reducers/uiReducer';

// All reducers here 
const reducer = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  EditU: editReducer
});

// This thunk is for async actions 
const middlewareEnhancer = applyMiddleware(thunk);
 
// Set the store with the middleware and all the reducers
export const store = configureStore({
  reducer,
  undefined,
  middlewareEnhancer,
});