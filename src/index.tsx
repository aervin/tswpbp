import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Zilch from './Zilch';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <Zilch />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
