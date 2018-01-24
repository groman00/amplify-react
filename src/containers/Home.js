import React, { Component } from 'react';
// import { Link } from 'react-router';
// import { connect } from 'react-redux';
// import { selectRanking, selectedRankingReset } from '../actions';
// import RankingList from '../components/RankingList';

class Home extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        // this.props.dispatch(selectedRankingReset());
    }
    render() {
        return (
            <div className="default-view">
                <h1>hey dooooooo</h1>
            </div>
        );
    }
}

export default Home;


// function mapStateToProps(state) {
//     const { rankings } = state;
//     return {
//         rankings
//     }
// }

// export default connect(mapStateToProps)(Home);
