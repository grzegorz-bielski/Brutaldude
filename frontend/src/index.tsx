import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import LoginComponent from './login/LoginForm';
import "bulma/css/bulma.css";

ReactDOM.render(
  <LoginComponent />,
  document.getElementById('root')
);
registerServiceWorker();
