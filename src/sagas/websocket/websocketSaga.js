import {socketConnected, socketDisconnected, socketSuccessResponse, socketErrorResponse} from 'reducers/websocket/websocketActions';
import {put, take} from 'redux-saga/effects';
import {eventChannel} from 'redux-saga';

import socketConnection, {disconnectSocket} from 'sources/api/websocket/socketConnection';

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

        socket
            .on('connect', () => emitEvent('connect'))
            .on('message', message => emitEvent('message', message))
            .on('disconnect', () => emitEvent('disconnect'));

        return () => socket.removeAllListeners();
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
