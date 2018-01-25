import React from 'react';
import PropTypes from 'prop-types';
import List from 'material-ui/List';
import Call from './Call';

const CallList = ({ calls }) => (
    <List>
    {calls.map((call, index) => (
      <Call key={index} {...call} />
    ))}
    </List>
);

CallList.propTypes = {
    calls: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
    //,
    //onTodoClick: PropTypes.func.isRequired
};

export default CallList;
