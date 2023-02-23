import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import reducer from "./Reducer/reducer";

const middleware=[thunk]

const store=createStore(reducer,composeWithDevTools(applyMiddleware(...middleware)))


export default store;