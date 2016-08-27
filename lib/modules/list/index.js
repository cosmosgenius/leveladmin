import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import Tuple from '../tuple';
export { default as listitems } from './reducer.js';

const ListReact = ({ listitems }) => (
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

ListReact.propTypes = {
    listitems: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string.isRequired,
        value: PropTypes.any.isRequired
    }))
};

const mapStateToProps = (state) => {
    return {
        listitems: state.listitems
    };
};

export const ListView = connect(
    mapStateToProps
)(ListReact);
