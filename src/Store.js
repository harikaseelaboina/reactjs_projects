// import React from 'react'
import { applyMiddleware,legacy_createStore as createStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk";
import reducer from './Reducers/combineReducer';


const middleware=[thunk];
 const store=createStore(reducer,composeWithDevTools(applyMiddleware(...middleware)));



export default store
