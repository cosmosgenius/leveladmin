import './style.scss';
import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
export { default as listitems } from './reducer.js';

class ListReact extends React.Component {
    render() {
        return (
            <table className="list">
                <thead className="list__head">
                    <tr className="list__row list__row--head">
                        <th className="list__cell list__cell--head">Key</th>
                        <th className="list__cell list__cell--head">Value</th>
                    </tr>
                </thead>
                <tbody>

                {
                    this.props.listitems.map(item =>
                        <tr className="list__row" key={item.key}>
                            <td className="list__cell"> { item.key } </td>
                            <td className="list__cell"> { item.value instanceof Object ? JSON.stringify(item.value) : item.value } </td>
                        </tr>
                    )
                }
                </tbody>


            </table>
        );
    }
}

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
