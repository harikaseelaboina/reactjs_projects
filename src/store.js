// import { legacy_createStore as createStore} from "";
import { legacy_createStore as createStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware } from "@reduxjs/toolkit";
import reducer from "./Reducers/combineReducer";

const middleware=[thunk]

const store= createStore(reducer,composeWithDevTools(applyMiddleware(...middleware)));

export default store;


