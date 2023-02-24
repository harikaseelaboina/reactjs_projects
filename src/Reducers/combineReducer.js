import { combineReducers } from "@reduxjs/toolkit";
import filterReducer from "./filterreducer";
import orderReducer from "./orderreducer";
import tableReducer from "./tablereducer";

const reducer=combineReducers(
                              {
                               tableReducer:tableReducer,
                               filterReducer:filterReducer,
                               orderReducer:orderReducer
                              }
                               )
export default reducer;