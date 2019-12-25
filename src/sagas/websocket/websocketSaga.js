import {socketConnected, socketDisconnected, socketSuccessResponse, socketErrorResponse} from '../../reducers/websocket/websocketActions';
import {put, take} from 'redux-saga/effects';
import {eventChannel} from 'redux-saga';

import socketConnection, {disconnectSocket} from '../../sources/api/websocket/socketConnection';

export default function*() {
    const socket = socketConnection();
    const socketEventChannel = createSocketEventChannel(socket);

    try {
        while (true) {
            const {eventType, message} = yield take(socketEventChannel);

            switch (eventType) {
                case 'connect':
                case 'disconnect':
                    yield handleConnectionChange(eventType);
                    break;

                case 'message':
                    yield handleSocketMessage(message);
                    break;

                default:
            }
        }
    } finally {
        socketEventChannel.close();
        disconnectSocket();
        yield put(socketDisconnected());
    }
}

function createSocketEventChannel(socket) {
    return eventChannel(emitter => {
        const emitEvent = (eventType, message) => emitter({eventType, message});

        const listeners = [];
        const addSocketEventListener = (event, handler) => {
            listeners.push({event, handler});
            socket.addEventListener(event, handler);
        };

        addSocketEventListener('connect', () => emitEvent('connect'));
        addSocketEventListener('message', ({data}) => emitEvent('message', JSON.parse(data)));
        addSocketEventListener('disconnect', () => emitEvent('disconnect'));;

        return () => listeners.forEach(({event, handler}) => socket.removeEventListener(event, handler));
    });
}

function* handleConnectionChange(eventType) {
    if (eventType === 'connect') yield put(socketConnected());
    else yield put(socketDisconnected());
}

function* handleSocketMessage(message) {
    if (message.statuscode === 200) {
        yield put(socketSuccessResponse());
        return;
    }
    if (message.code === 400) {
        yield put(socketErrorResponse());
        return;
    }

    yield put({
        type: message.action,
        ...message,
    });
}
