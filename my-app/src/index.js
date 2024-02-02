import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import HelloWorld from './helloword/HelloWorld';
import TestFiled from './forms/TestFiled';
import Fruite from './Fruits/Fruite';
import Counter from './Counter/Counter';
import Event from './Eventss/Event';
import ToggleName from './toggle/toggleName';
import ProductList from './tp/store/ProductList';
//import reportWebVitals from './reportWebVitals';

import Form from './Counter/Form';

const root = ReactDOM.createRoot(document.getElementById('root'));


/*const a=<body>{Array.from({ length: 10 }, (_, i) => (
  <h1>{i}</h1>
))}</body>
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
  root.render(
    
    a
  );
  */

const fruitarray =['orange'
,'apple'
,'mange'
,'watermelon']
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
  root.render(
    
    <Form />
  );
  