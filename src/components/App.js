import React, {Component} from 'react';
import {Provider} from 'react-redux';
import PropTypes from 'prop-types';

import TextChatContainer from './TextChat/TextChatContainer';

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
                <TextChatContainer/>
            </Provider>
        );
    }
}
