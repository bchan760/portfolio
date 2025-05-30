import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '../../frontend/src/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
