import React, { PropTypes } from 'react';
import Tuple from './tuple';

const List = ({ listitems }) => (
    <ul>
        {
            listitems.map(item =>
                <Tuple
                    key={item.key}
                    keyValue={item.key}
                    {...item}
                >
                </Tuple>
            )
        }

    </ul>
);

List.propTypes = {
    listitems: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string.isRequired,
        value: PropTypes.any.isRequired
    }))
};

export default List;
