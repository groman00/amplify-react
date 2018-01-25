import React, { Component } from 'react';
// import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Calls from '../containers/Calls';


const Home = () => (
    <div className="home-page">
        <AppBar position="static">
            <Toolbar>
                <IconButton color="inherit">
                    <AccountCircle />
                </IconButton>
                <Typography type="title" color="inherit">
                    Conversations
                </Typography>
            </Toolbar>
            <Calls />
        </AppBar>
    </div>
)

export default Home;


// import { Link } from 'react-router';
// import { connect } from 'react-redux';
// import { selectRanking, selectedRankingReset } from '../actions';
// import RankingList from '../components/RankingList';
/*
class Home extends Component {
    render() {
        return (
            <div className="home-page">
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                          // aria-owns={open ? 'menu-appbar' : null}
                          // aria-haspopup="true"
                          // onClick={this.handleMenu}
                          color="inherit">
                            <AccountCircle />
                        </IconButton>
                        <Typography type="title" color="inherit">
                            Conversations
                        </Typography>
                    </Toolbar>
                    <CallsList />
                </AppBar>
            </div>
        );
    }
}

export default Home;*/


// function mapStateToProps(state) {
//     const { rankings } = state;
//     return {
//         rankings
//     }
// }

// export default connect(mapStateToProps)(Home);
