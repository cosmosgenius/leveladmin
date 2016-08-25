import React, { PropTypes } from 'react';

const Tuple = ({keyValue, value}) =>  (
    <li> key { keyValue }
         value { JSON.stringify(value, 4) }
    </li>
);

Tuple.propTypes = {
    keyValue: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired
};

export default Tuple;
