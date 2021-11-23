import React, { Fragment } from 'react'

export default function transfer() {
    return (
        <Fragment>
        <section className="transfer">
            <div className="dart-overlay">
                <div className="transfer-inner">
                    <h1 className="large">Transfer Page </h1>
                    <div>
                        <form method="POST">
                            <table align="center" id="sender">    
                                <tr>
                                    <td>
                                        <label for="book_date">Calender Date</label>
                                    </td>
                                    <td>
                                        <input type="date" id="date" name="date" required/>
                                    </td>
                                </tr>
                                    
                                <tr>
                                    <td>
                                        <lable for="Customer Id">Customer Id</lable>
                                    </td>
                                    <td>
                                        <input type="number" id="cust_id" placeholder="Enter Customer ID" pattern="[0-9]{14}" required/>
                                    </td>
                                </tr>
                                            
                                <tr>
                                    <td>
                                        <lable for="acc_name">Account Holder Name</lable>
                                    </td>
                                    <td>
                                        <input type="text" id="acc_name" disabled/>
                                    </td>
                                </tr> 
                                <tr> 
                                    <td> 
                                        <lable for="Clear Balance">Clear Balance</lable>
                                    </td>
                                    <td>
                                        <input type="number" id="clear_bal" disabled/>
                                    </td>
                                </tr>



                                <tr> 
                                    <td>
                                        <lable for="bic">BIC</lable>
                                    </td>
                                    <td>
                                        <input type="text" id="bic" placeholder="Enter Receiver's BIC" required />
                                    </td>
                                </tr>
                                <tr> 
                                    <td>
                                        <lable for="institute_name">Institute Name</lable>
                                    </td>
                                    <td>
                                        <input type="text" id="institute_name" placeholder="Enter Institution Name" disabled/>
                                    </td>
                                </tr>
                                <tr> 
                                    <td>
                                        <lable for="account_holder_name">Account Holder Name</lable>
                                    </td>
                                    <td>
                                        <input type="text" id="account_holder_name" placeholder="Enter Receiver's Name " required />
                                    </td>
                                </tr>
                                <tr> 
                                    <td>
                                        <lable for="account_holder_id">Account Holder Number</lable>
                                    </td>
                                    <td>
                                        <input type="number" id="account_holder_id" placeholder="Receiver's Account Number" pattern="[0-9]{14}" required />
                                    </td>
                                </tr>



                                <tr> 
                                    <td>
                                        <lable for="transfer_type">Transfer Type</lable>
                                    </td>
                                    <td>
                                        <select id="transfer_type" class="select" required>
                                            <option value="customer type">Customer Type</option>
                                            <option value="bank_transfer">Bank Type</option>
                                        </select>
                                    </td>
                                </tr>

                                <tr> 
                                    <td>
                                        <lable for="message_code">Message Code</lable>
                                    </td>
                                    <td>
                                        <select id="message_code" class="select" required>
                                            
                                            <option value="CHQB">CHQB- Beneficiary customer must be paid by cheque only</option>
                                            <option value="CORT">CORT- Payment is made in settlement for a trade</option>
                                            <option value="HOLD">HOLD- Beneficiary customer or claimant will call upon identification</option>
                                            <option value="INTC">INTC- Payment between two companies that belongs to the same group</option>
                                            <option value="PHOB">PHOB- Please advise the intermediary institution by phone.</option>
                                            <option value="PHOI">PHOI- Please advise the intermediary by phone</option>
                                            <option value="PHON">PHON- Please advise the account with institution by phone</option>
                                            <option value="REPA">REPA- Payments has a related e-Payments reference</option>
                                            <option value="SDVA">SDVA- Payment must be executed with same day value to the</option>
            
                                        </select>
                                    </td>
                                </tr>
                                <tr> 
                                    <td>
                                        <lable for="amount">Amount</lable>
                                    </td>
                                    <td>
                                        <input type="number" id="amount" placeholder="Enter Amount" required />
                                    </td>
                                </tr>
                                <tr> 
                                    <td>
                                        <lable for="transfer_fee">Transfer Fee</lable>
                                    </td>
                                    <td>
                                        <input type="number" id="transfer_fee" disabled/>
                                    </td>
                                </tr>

                                <tr> 
                                    <td>
                                        <lable for="amount_update">Updated Clear Balance</lable>
                                    </td>
                                    <td>
                                        <input type="number" id="amount_update" disabled/>
                                    </td>
                                </tr>

                                <tr>
                                    <td colspan="2" align="center">
                                            
                                        <input type="submit" class="btn-success" value="Transfer"/>
                                    </td>
                                </tr> 
                            </table>
                        </form>
                    </div>
                </div>
            </div>              
        </section>
        </Fragment>
    )
}
