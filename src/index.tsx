import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
//components
import App from './App';
//other
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter basename='films-class-components-practice'>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
