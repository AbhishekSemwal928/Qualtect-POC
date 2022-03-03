
import { authorization_reducer } from "./authorization_reucer";
import { name_reducer } from "./name_reducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    authorization_reducer,
    name_reducer
})

export default rootReducer