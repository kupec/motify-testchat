import {SEND_TEXT_MESSAGE, SOCKET_NEW_TEXT_MESSAGE} from '../../reducers/textchat/textchatActions';
import {all} from 'redux-saga/effects';
import websocketSendEffect from '../websocket/websocketSendEffect';

export default function*() {
    yield all([
        websocketSendEffect(SEND_TEXT_MESSAGE, ({text}) => ({
            action: 'incoming',
            text,
        })),
    ]);
}
