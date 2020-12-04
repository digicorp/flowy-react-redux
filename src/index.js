import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux'
import{createStore} from 'redux'
// import App from './App';
import AppDragDropDemo from './AppDragDropDemo';
import reducers from './reducers'
// import AppDragDropDemo from './AppDragDropDemo_copy';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<Provider store={createStore(reducers)}>    
<AppDragDropDemo />
</Provider>, document.getElementById('root'));
registerServiceWorker();
