
import { authorization_reducer } from "./authorization_reucer";
import { loader_reducer } from "./loader_reducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    authorization_reducer,
    loader_reducer
   
})

export default rootReducer