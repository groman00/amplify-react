import { connect } from 'react-redux';
import CallList from '../components/CallList';

const mapStateToProps = state => {
    return {
        calls: state.calls
    }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     onTodoClick: id => {
//       dispatch(toggleTodo(id))
//     }
//   }
// }

export default connect(
    mapStateToProps
    //,
    //mapDispatchToProps
)(CallList);
