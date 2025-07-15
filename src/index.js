import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ContextApiProvider } from './contextAPI/ContextApi';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextApiProvider>
      <App />
    </ContextApiProvider>
  </React.StrictMode>
 
);
