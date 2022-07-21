import React, { Component } from 'react';
class CustomerInfo extends Component {
    constructor(props)
    {
        super(props)
    }
    // state = {  } 
    render() { 
        return (
            
            <div className= "Customer-Info-Wrapper">
                {console.log(this.props.Cust[0].Name)}
                <form>
                   <label for = "apntmnt"> Appointment : </label>
                   <input id = "apntmnt" type = "text" value = {this.props.Cust[0].Appointment}/>
                   <br/><br/>
                   <label for = "email">Email : </label>
                   <input id = "email" type = "text" value = {this.props.Cust[0].Email}/> 
                   <br/><br/>
                   <label for = "phone">Phone : </label>
                   <input id = "phone" type = "text" value = {this.props.Cust[0].Phone}/>
                </form>
            </div>
        );
    }
}
 
export default CustomerInfo;