import { combineReducers } from "redux";
import { custodianReducer } from "./custodianReducer";

const reducers=combineReducers({
    custodian_log_info: custodianReducer
});

export default reducers;