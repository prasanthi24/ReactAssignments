import React, { Component } from 'react';
class OrderInfo extends Component {
    constructor(props)
    {
        super(props)
    }
    // state = {  } 
    render() { 
        return (
            <div class = "Order-Wrapper">
                {console.log(this.props)}
                <div class = "order-dtls">
                    <p class = "title">Status</p>
                    <p>{this.props.order[0].Status}</p>
                </div>
                <div class = "order-dtls"> 
                    <p class = "title">Door</p>
                    <p>{this.props.order[0].Door}</p>
                </div>
                <div class = "order-dtls">
                    <p class = "title">Time</p>
                    <p>{this.props.order[0].Time}</p>
                </div>
            </div>
        );
    }
}
 
export default OrderInfo;