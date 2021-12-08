import { actiontypes } from "../Constants/Action_types";

const initialstate={
   custodian:{}
}
export const custodianReducer=(state=initialstate, {type, payload})=>{
    switch(type){
        case actiontypes.SET_USER_NAME:
            return {...state, custodian:payload};
        default:
            return state;
    }
}