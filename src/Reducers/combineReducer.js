import { combineReducers } from "@reduxjs/toolkit";

import PlayeroneReducer from "./playerone";
import PlayertwoReducer from "./playertwo";

const reducer=combineReducers({playerone:PlayeroneReducer,
                               playertwo:PlayertwoReducer})

export default reducer;