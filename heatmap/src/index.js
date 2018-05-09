import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
