import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './Components/LayoutArea/Layout/Layout';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import HomePage01 from './Components/HomeArea/HomePage/HomePage01';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  {/* <Layout/> */}
  <HomePage01/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
