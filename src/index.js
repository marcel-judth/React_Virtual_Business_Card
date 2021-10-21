import i18next from 'i18next';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './utils/i18n';

i18next.changeLanguage('en');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
