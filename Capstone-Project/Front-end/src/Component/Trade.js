import React, {Fragment} from 'react'
import Navbar2 from './Navbar2'
import { Button} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ClientSevices from '../Services/ClientSevices';
import InstrumentServices from '../Services/InstrumentServices';
import Buyer_sellerService from '../Services/Buyer_sellerService';
import { useHistory } from 'react-router-dom';
import Footer from './Footer';

export default function Trade() {

    const custodian = useSelector((state) => state.custodian_log_info.custodian)
    const id = custodian.custodian_id;
    const name = custodian.custodian_name;

    //------------------------ Client INFo----------------------------

    const [clients, setclients] = useState([])

    const getAllClientsByCostodian=async ()=>{
        await ClientSevices.getClientListByCustodianId(id)
        .then(response=>{
            setclients(response.data);
            console.log(clients);
            getAllInstruments();
        }).catch(error=>{
            window.alert("Unable to get Client Information");
        })
    }

    useEffect(() => {
        getAllClientsByCostodian();
    }, []);
    
const [client, setclient] = useState("");

const onchangeClient=async (e)=>{
    await ClientSevices.getClientById(e.target.value)
    .then(response=>{
        setclient(response.data);
    }).catch(error=>{

    });
}

    //--------------------- INSTRUMENTS-----------------------------

    const [instruments, setinstruments] = useState([])
    const getAllInstruments=async ()=>{
        await InstrumentServices.getAllInstruments()
        .then(response=>{
            setinstruments(response.data);
        }).catch(error=>{
            window.alert("Unable to get Instrument Information");
        })
    }

    const [instrument, setinstrument] = useState("")

    const onchangeInstrument=async (e)=>{
       await InstrumentServices.getInstrumentsById(e.target.value)
    .then(response=>{
        setinstrument(response.data);
    }).catch(error=>{

    });
    }

       
      var temp;
      if(instrument.face>0){
        temp= '<label >Face Value</label><br/><input type="number" className="form-control-plaintext" id="face_value" value='+instrument.face+' disabled/>';
        document.getElementById('face_value1').innerHTML=temp;
    }
    
    if(instrument.expiry!=null){
        var temp1= '<label >Expiry Date</label><br/><input type="text" className="form-control-plaintext" id="expiry_date" value='+instrument.expiry+' disabled/>';
        document.getElementById('expiry_date').innerHTML=temp1;
      }

      //-------------------------------------- PRICE ---------------------------------------------

     //const [price, setprice] = useState("");
      const [error_price, seterror_price] = useState("");

     
      var price;
      const priceChange= (e)=>{
         price=e.target.value;
          //setprice(e);
         console.log(price);
        console.log(instrument.face*1.12);
          
         if(instrument.face>0){
              if(price > instrument.face*1.12)
                    seterror_price("Price cannot be more than 12% of "+instrument.face);
                else if(price < instrument.face*0.88)
                    seterror_price("Price cannot be less than 12% of "+instrument.face);
               else
                    seterror_price(" ");
          }
          else{
              seterror_price(" ");
          }
      }

      //--------------------------------------- TYPE-----------------------------------------------

      const [type, settype] = useState("sell")

      const onchangeType=async (e)=>{
          settype(e.target.value);
          console.log(type);
      }

      //------------------------------ QUANTITY-----------------------------------

      //const [qty, setqty] = useState(0);
      const [error_qty, seterror_qty] = useState("")
     var qty;
      const changeqty=(e)=>{
            qty=e.target.value;
            //setqty(e.target.value);
            console.log("qty"+qty);
            if(qty%25!==0)
                seterror_qty("Quantity sholud be multiple of 25");
            else
                seterror_qty("");
      }


      //---------------------- FORM HANDLING ----------------------------------

      const history=useHistory();

      const handleform=(e)=>{
          e.preventDefault();

          const error= (error_price==="")?(error_qty==="")?"":error_qty:error_price;
          if(error===""){
              window.alert(error);
          }
          else{
              if(client.client_id==="" || instrument.instrument_id===""){
                    if(client.client_id==="")
                        window.alert("Please Select Client ID");
                    else if(instrument.instrument_id==="")
                        window.alert("Please Select Instrument ID");
              }
              else{
                  const client_id=client.client_id;
                  const instrument_id=instrument.instrument_id;
                  let quantity=document.getElementById('qty').value;
                  console.log("qty "+qty);
                  price=document.getElementById('price').value;
                  console.log("price"+price);
                  const buyer_seller={ client_id, instrument_id, quantity, price, type};

                  console.log(buyer_seller);
                  Buyer_sellerService.createOrder(buyer_seller)
                  .then(response=>{
                        window.alert("Order Placed Successfully");
                        history.push("/Dashboard");
                  }).catch(error=>{
                    window.alert("Failed to Place Order");
                  })
              }
          }
      }


    return (
        <div>
            <Navbar2/>
            <Fragment>
                <section className="transfer">
                <div className="dark-overlay1">
                    <div className="transfer-inner">
                        <h1 className="large">PLACE ORDER </h1>
                        <div className="box">
                            <form >
                                <label >Client ID</label><span style={{ color: "red" }} >*</span>
                                
                                <select id="client_id" className="form-select" 
                                            value={client.client_id}
                                             onChange={onchangeClient}
                                             required >
                                                 <option disabled="disabled" selected="selected">Select an option.</option>
                                                {   
                                                   clients.map((mem)=>(
                                                        <option key={mem.client_id} value={mem.client_id}>
                                                            {mem.client_id}
                                                        </option>
                                                        ) 
                                                    )    
                                                }                
                                            </select>
                                                
                                <label >Client Name</label>


                                    <input 
                                        type="text" 
                                        className="form-control-plaintext"
                                        id="client_name"  
                                        value={client.client_name}
                                    disabled/>


                                <label >Instrument ID</label><span style={{ color: "red" }} >*</span>
                                
                                <select id="instrument_id" className="form-select" 
                                            value={instrument.instrument_id}
                                            onChange={onchangeInstrument}
                                             required >

                                                    <option disabled="disabled" selected="selected">Select an option.</option>
                                               
                                                {
                                                    instruments.map((instrument)=>(
                                                        <option key={instrument.instrument_id} value={instrument.instrument_id}>
                                                            {instrument.instrument_id}
                                                        </option>
                                                        ) 
                                                    )    
                                                }                
                                            </select>
                                                
                                <label >Instrument Name</label>

                                <input 
                                    type="text" 
                                    className="form-control-plaintext"
                                    id="Instrument_name"  
                                    value={instrument.instrument_name}
                                    disabled/>

                                
                            <div id="face_value1">
                               
                            </div>

                            <div id="expiry_date">
                               
                            </div>                           

                            
                                
                                <label >Price</label><span style={{ color: "red" }} >*</span>
                                
                                <input 
                                    className="form-control"
                                    type="number" 
                                    id="price" min="1" value={price}
                                    onChange={priceChange} />

                                    <div className="error">{error_price}</div>
                                                
                                
                                <label >Quantity</label><span style={{ color: "red" }} >*</span>
                                
                                <input 
                                    className="form-control"
                                    type="number" 
                                    id="qty" min="25" value={qty} onChange={changeqty} />

                                    <div className="error">{error_qty}</div>
                                        
                                <label >Order Type</label><span style={{ color: "red" }} >*</span>
                                
                                <select id="transfer_type" 
                                    className="form-select" 
                                    value={type}
                                    onChange={onchangeType}
                                    required>
                                                <option value="sell">Buy</option>
                                                <option value="buy">Sell</option>
                                    </select>
 
                                    <div  id="button">       
                                        <Button onClick={handleform}>
                                            Place Order
                                        </Button>
                                    </div>
                            </form>
                        </div>
                    </div>
                </div>              
            </section>
        </Fragment>
       <Footer/>
        </div>
    )
}
