import './style.scss';
import React, { PropTypes } from 'react';

class Tuple extends React.Component {
    render() {
        return (
            <div className='tuple'>
                <span className='tuple__key'>{ this.props.keyValue }</span>
                <span className='tuple__value'>
                    { this.props.value instanceof Object ? JSON.stringify(this.props.value,null, 2) : this.props.value }
                </span>
            </div>
        );
    }
}

Tuple.propTypes = {
    keyValue: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired
};

export default Tuple;
