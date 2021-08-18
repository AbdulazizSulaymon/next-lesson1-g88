import { combineReducers } from "redux";
import global from "./globalReducer";
import users from "./usersReducer";

const reducers = combineReducers({
    global,
    users
})

export default reducers;