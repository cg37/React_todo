import React from 'react';
import { StrictMode } from 'react/cjs/react.production.min';
import ReactDOM from 'react-dom';
import { createRoot } from 'react'
import './index.css';
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)