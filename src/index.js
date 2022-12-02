import React from 'react';
import ReactDOMClient from 'react-dom/client';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
    <App/>
);

ReactDOM.createPortal(<App/>,document.getElementById('modal'))