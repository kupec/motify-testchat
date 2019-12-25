import {takeLatest} from 'redux-saga/effects';

import {sendSocketMessage} from '../../sources/api/websocket/socketConnection';

export default function*(actionType, makeOptions) {
    yield takeLatest(actionType, function*(action) {
        sendSocketMessage(makeOptions(action));
    });
}
