import './style.scss';
import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
export { listReducer as listReducer } from './reducer';
export { loadList as loadList } from './action';

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
                    this.props.items.map(item =>
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
    items: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string.isRequired,
        value: PropTypes.any.isRequired
    }))
};

const mapStateToProps = (state) => {
    return {
        items: state.items
    };
};

export const ListView = connect(
    mapStateToProps
)(ListReact);
