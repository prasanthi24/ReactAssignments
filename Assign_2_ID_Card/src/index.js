import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import avtr from "./Images/Yello_girl.webp";

/* Images to import:
In css- direct path can be given
For React - import as file which should be in src folder
or give direct file path from public

*/

var employee = {
  name: 'Luna',
  location: 'New York',
  bloodGroup: 'B+',
  age: 28,
  profileImg: avtr    // in js code no need curly braces
  //"src/Images/Avtr.png"
  }
  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App profile = {employee}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
