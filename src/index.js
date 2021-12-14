// 1 - necesito la variable react en scope
import React from 'react';

// 2 - necesito la variable react-dom en scope 
import ReactDOM from 'react-dom';
import './index.css';

// 3 - necesito una app de react
import App from './App';
import reportWebVitals from './reportWebVitals';

// 4 - necesito dibujar la app en el dom
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

