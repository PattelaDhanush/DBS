import React from 'react'
import Navbar1 from './Navbar1'
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ClientSevices from '../Services/ClientSevices';
import Footer from './Footer'

export default function Dashboard_admin() {

    const [custodials, setcustodials]=useState([]);
    useEffect(()=>{
        getAmount();
    },[]);
    const custodian = useSelector((state) => state.custodian_log_info.custodian)

    const getAmount=()=>{
        ClientSevices.getAmountByCustodian()
        .then(response => {
            setcustodials(response.data);
            console.log(custodials);
        }).catch(error=>{
            window.alert("Network Error");
        })

    }

    return (
        <div>
            <Navbar1/>

            <div className="dash-board1">
                <h1 className="dash-head">Custodial Trade Analysis</h1>
                <div className="table-div">
                    <table class="table">
                        <thead class="thead-dark">
                            
                            <tr>
                            <th scope="col">Custodial Id wise / Net Cash</th>
                            {   
                            
                                custodials.map( (custodial)=>(
                                    <th scope="col">{custodial[0]}</th>
                                    )
                                )    
                            }
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">Total Buy Value</th>
                            
                            {   
                            
                            custodials.map( (custodial)=>(
                                <td>{custodial[1]}</td>
                                )
                            )    
                        }
                            
                            </tr>
                            <tr>
                            <th scope="row">Total Sell Value</th>
                            {   
                            
                            custodials.map( (custodial)=>(
                                <td>{custodial[2]}</td>
                                    )
                                )    
                            }
                            </tr>
                            <tr>
                            <th scope="row">Net OutStanding</th>
                            {   
                            
                            custodials.map( (custodial)=>(
                                <td>{custodial[2]-custodial[1]}</td>
                                    )
                                )    
                            }
                            </tr>
                            
                        </tbody>
                    </table>         
                </div>
            </div>
            <Footer/>            
        </div>
    )

}
