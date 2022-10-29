import React from 'react';
import ReactDom from 'react-dom';
import App from  './App';

const el = document.getElementById('root');

ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
, el);