import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import reducers from './reducers';
import App from './components/App';
// import Root from './containers/Root';

// render(
//     <Root />,
//     document.getElementById('app')
// );

let store = createStore(reducers, applyMiddleware(logger));

console.log(store.getState());

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
