import React, { Component } from 'react';
// import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

// import { Provider } from 'react-redux';
// import configureStore from '../configureStore';
// import AsyncApp from './AsyncApp';
import Home from './Home';
// import CreateRanking from './CreateRanking';
// import RankingDetail from './RankingDetail';

// const store = configureStore();

export default class Root extends Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={Home}/>
            </Router>
            // <Provider store={store}>
            // <Router history={browserHistory}>
            //   <Route path="/" component={AsyncApp}>
            //        <IndexRoute component={Home}/>
            //    </Route>
            // </Router>
            // </Provider>
        )
    }
};
