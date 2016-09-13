import React, { PropTypes } from 'react';

class Tuple extends React.Component {
    render() {
        return (
            <li> key { this.props.keyValue }
                 value { JSON.stringify(this.props.value, 4) }
            </li>
        );
    }
}

Tuple.propTypes = {
    keyValue: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired
};

export default Tuple;
