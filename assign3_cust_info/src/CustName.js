import React, { Component } from 'react';
class CustName extends Component {
    constructor(props)
    {
        super(props)
    }
    // state = {  } 
    render() { 
        return (
            <div class = "Name-Warpper">
                <div class = "Name-Title-Wrapper">
                    <h4>{this.props.name[0].Name}</h4>
                    <h5>{this.props.name[0].Id}</h5>
                </div>
                <div class = "Button-Wrapper">
                    <button> Print</button>
                </div>

            </div>
        );
    }
}
 
export default CustName;