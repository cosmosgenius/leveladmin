import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
export { default as listitems } from './reducer.js';

class ListReact extends React.Component {
    render() {
        return (
            <table>
                <thead>
                    <td>Key</td>
                    <td>Value</td>
                </thead>

                {
                    this.props.listitems.map(item =>
                        <tr>
                            <td> {item.key} </td>
                            <td> { item.value instanceof Object ? JSON.stringify(item.value) : item.value } </td>
                        </tr>
                    )
                }


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
