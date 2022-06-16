import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App';
import './global.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { StateContextProvider } from './context/StateContextProvider';
const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateContextProvider>
      <Router>
        <App />
      </Router>
    </StateContextProvider>
  </React.StrictMode>
);