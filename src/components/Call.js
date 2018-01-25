import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

const Call = () => (
    <ListItem button component="a">
        <ListItemText primary="Some Call" />
    </ListItem>
);

Call.propTypes = {
    // onClick: PropTypes.func.isRequired,
    // completed: PropTypes.bool.isRequired,
    // text: PropTypes.string.isRequired
};

export default Call;