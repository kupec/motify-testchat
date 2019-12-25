import React from 'react';
import {Provider} from 'react-redux';
import PropTypes from 'prop-types';

export default class App extends Component {
    static propTypes = {
        store: PropTypes.object.isRequired,
    };

    shouldComponentUpdate() {
        return false;
    }

    render() {
        const {store} = this.props;

        return (
            <Provider store={store}>
                <TextChat/>
            </Provider>
        );
    }
}
