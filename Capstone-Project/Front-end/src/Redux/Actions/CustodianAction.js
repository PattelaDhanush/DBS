import { actiontypes } from "../Constants/Action_types"

export const set_user_name=(custodian)=>{
    console.log("In Action");
    console.log(custodian);
    return{
        type: actiontypes.SET_USER_NAME,
        payload: custodian
    };
};