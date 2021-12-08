import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react';
import LoginService from '../Services/LoginService';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { set_user_name } from '../Redux/Actions/CustodianAction';
import Footer from './Footer'

export default function Login() {

    //---------------- HOOKS FOR CUSTODIAN-------------------


    const [user_name, setuser_name] = useState("");
    const [error_user_name, seterror_user_name] = useState("Please Enter User ID");
    const [password, setpassword] = useState("");


    //------------------------- USER NAME CHANGE-------------------------

    const onchangeUser_name= async (e)=>{
        let user=e.target.value;
        setuser_name(user);
        if(user!==""){
            await LoginService.getUserId(user)
            .then((response)=>{
                setuser_name(user);
                seterror_user_name("");
                dispatch(set_user_name(response.data));
            }).catch((error)=>{
                seterror_user_name("Invalid User ID");
            })
        }else{
            seterror_user_name("Please Enter User ID");
        }
    }

    //------------------------ PASSWORD--------------------------

    const onchangePassword= async (e)=>{
        let password=e.target.value;        
        if(password!==""){
                setpassword(password);
        }else{
            setpassword("");
            window.alert("Please Enter Password");
        }
    }
 

    //------------------- FORM VALIDATION AND SUBMISSION -----------------------------

    const history=useHistory();

    const onLogin=async (e)=>{
        e.preventDefault();

        if(error_user_name!==""){
            window.alert(error_user_name);
        }    
        else if(password==="")
            window.alert("Please Enter Password");
        else{
           
                if(user_name==="ADMIN" && password==="ADMIN")
                    history.push("/Dashboard_admin");

                else if(user_name!=="ADMIN"){

                   await LoginService.getUserId(user_name)
                    .then((response)=>{
                        
                        if(response.data.custodian_id===password)
                            history.push('/Trade');
                        else
                            window.alert("Incorrect Password");
                    })

                }
                else
                    window.alert("Login Failed");
        }
    }

    //--------------------- REDUX ----------------------------------------

        useSelector((state) => state)

        const dispatch=useDispatch();


    //------------------ USER INTERFACE --------------------------------------------

    return (
        <div>
            <div className="Login">
                <div className="main-section">
                    <div className="content-section">
                        <div className="head-section">
                            <h3>Login</h3>
                        </div>
                    <div className="body-section">
                        <form>
                            <div className="form-input">
                                <input type="text" value={user_name} placeholder="Username" 
                                onChange={onchangeUser_name} required/>
                            </div>
                            <div className="error">{error_user_name}</div>
                            <div className="form-input">
                                <input type="password" value={password} placeholder="Password" 
                                onChange={onchangePassword} required/>
                            </div>
                            <div className="form-input">
                                <input type="checkbox" name=""/> 
                                <label>
                                    Remember me on this computer
                                </label>
                                <button type="submit" className="btn-submit" onClick={onLogin}>
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="footer-section">
                    <Link to="">
                        Forgot your password?
                    </Link> <span>Click here to reset it.</span>
                </div>
            </div>
        </div>
        
      </div>  
    )
}
