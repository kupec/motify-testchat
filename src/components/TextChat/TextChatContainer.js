import {connect} from 'react-redux';

import {
    sendTextMessage,
} from '../../reducers/textchat/textchatActions';

import TextChat from './TextChat';

const mapStateToProps = state => {
    return {
        ...state.textchat,
    };
};

const mapDispatchToProps = {
    onSendTextMessage: sendTextMessage,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TextChat);
