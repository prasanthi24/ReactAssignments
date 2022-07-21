import React, { Component } from 'react';
class ProductList extends Component {
    constructor(props)
    {
        super(props)
    }
    // state = {  } 
    render() { 
        return (
                    <div class = "Product-Warpper">
                        <div class = "img-wrapper">
                        {/* <i class="fa fa-square-o" aria-hidden="true"></i> */}
                        <img src = {this.props.product[0].ProductImg} alt ="Tv"/>
                        </div>
                        <div class = "ProductDesc">
                            <p>{this.props.product[0].Product}</p>
                            <p>{this.props.product[0].ProductDesc}</p>
                        </div>
                    </div>
        );
    }
}
 
export default ProductList;