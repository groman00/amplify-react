import React from 'react';

// import React, { Component } from 'react';
// import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Reboot from 'material-ui/Reboot';

// import foo
// import bar






// import { Provider } from 'react-redux';
// import configureStore from '../configureStore';
// import AsyncApp from './AsyncApp';
import HomePage from '../pages/Home';
// import CreateRanking from './CreateRanking';
// import RankingDetail from './RankingDetail';

// const store = configureStore();
const theme = createMuiTheme();



const App = () => (
    <MuiThemeProvider theme={theme}>
        <Reboot />
        <Router>
            <Route exact path="/" component={HomePage}/>
        </Router>
    </MuiThemeProvider>
)

export default App;



/*

export default class Root extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <Reboot />
                <Router>
                    <Route exact path="/" component={Home}/>
                </Router>
            </MuiThemeProvider>
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
*/