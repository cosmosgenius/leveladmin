import './style.scss';
import React, { PropTypes } from 'react';

class Tuple extends React.Component {
    render() {
        return (
            <div className='tuple'>
                <span className='tuple__key'>{ this.props.keyValue }</span>
                <span className='tuple__value'>{ JSON.stringify(this.props.value,null, 2) }</span>
            </div>
        );
    }
}

Tuple.propTypes = {
    keyValue: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired
};

export default Tuple;
