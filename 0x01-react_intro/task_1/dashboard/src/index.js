import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Notifications from './Notifications';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <App />
      <div id="root-notifications">
        <Notifications />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
