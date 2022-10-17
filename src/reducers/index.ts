import authReducer from "./auth";
import fileReducer from "./file";
import alertReducer from "./alerts";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    auth: authReducer,
    files: fileReducer,
    alerts: alertReducer,
});

export default rootReducer;