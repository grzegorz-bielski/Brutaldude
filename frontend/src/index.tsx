import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import "bulma/css/bulma.css";

import {render} from './App'

ReactDOM.render(
  render(),
  document.getElementById('root')
);
registerServiceWorker();
