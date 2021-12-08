import React from 'react'
import Navbar2 from './Navbar2'
import { useEffect } from 'react'; 
import { useState } from 'react';
import ClientSevices from '../Services/ClientSevices';
import { useSelector } from 'react-redux';
import Footer from './Footer'

export default function Dashboard() {

    const [clients, setclient]=useState([]);
    useEffect(()=>{
        getClient();
    },[]);
    const custodian = useSelector((state) => state.custodian_log_info.custodian)

    const getClient=()=>{
        ClientSevices.getClientListByCustodianId(custodian.custodian_id)
        .then(response => {
            setclient(response.data);
        }).catch(error=>{
            window.alert("Network Error");
        })

    }

    var buy_value=0;
    var sell_value=0;
    
    
    clients.map((client)=>(
        buy_value+=client.buy_amount
    )
    );

    clients.map((client)=>(
    sell_value+=client.sell_amount
    )
);


    return (
        <div>
            <Navbar2/>
            <div className="dash-board1">
                <h1 className="dash-head">Client Trade Analysis</h1>
                <div className="table-div">
                <table class="table">
                    <thead class="thead-dark">
                        
                        <tr>
                        <th scope="col">Client Id wise / Net Cash</th>
                        {   
                        
                            clients.map( (client)=>(
                                <th scope="col">{client.client_id}</th>
                                )
                            )    
                        }
                       </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">Total Buy Value</th>
                        
                        {   
                        
                        clients.map( (client)=>(
                            <td>{client.buy_amount}</td>
                            )
                        )    
                    }
                        
                        </tr>
                        <tr>
                        <th scope="row">Total Sell Value</th>
                        {   
                        
                        clients.map( (client)=>(
                            <td>{client.sell_amount}</td>
                                )
                            )    
                        }
                        </tr>
                        <tr>
                        <th scope="row">Net OutStanding</th>
                        {   
                        
                        clients.map( (client)=>(
                            <td>{client.sell_amount-client.buy_amount}</td>
                                )
                            )    
                        }
                        </tr>
                        <tr>
                            <th colSpan={clients.length}>
                                The Total Buy Value of {custodian.custodian_name} is: {buy_value}
                            </th>
                        </tr>
                        <tr>
                            <th colSpan={clients.length}>
                                The Total Sell Value of {custodian.custodian_name} is: {sell_value}
                            </th>
                        </tr>
                        <tr>
                            <th colSpan={clients.length}>
                                The Net OutCome of {custodian.custodian_name} is: {sell_value-buy_value}
                            </th>
                        </tr>
                    </tbody>
                    </table>
                    <br/>
                    
                    
            </div>
            </div>
            <Footer/>
            </div>
      
    )
}
