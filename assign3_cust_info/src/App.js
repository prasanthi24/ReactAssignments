import CustomerInfo from './CustomerInfo';
import './App.css';
import CustName from "./CustName"
import {Cust} from "./Cust";
import OrderInfo from './OrderInfo';
import {order_dtls} from "./order-dtls"
import ProductList from './ProductList';


function App() {
  return (
    <div className="App-Warpper">
      <CustName  class = "App-Wrap-Content" name = {Cust}/>   {/*style not worling for class */}
      <CustomerInfo class = "App-Wrap-Content" Cust = {Cust}/>
      <OrderInfo class = "App-Wrap-Content" order = {order_dtls}/>
      <ProductList class = "App-Wrap-Content" product = {Cust}/> 
    </div>
  );
}

export default App;
