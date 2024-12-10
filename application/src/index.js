import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client' instead of 'react-dom'
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// Optional: report web vitals
reportWebVitals();
