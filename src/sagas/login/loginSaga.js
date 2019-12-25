import {all, put, take} from 'redux-saga/effects';
import websocketSendEffect from 'sagas/websocket/websocketSendEffect';

import {LOGIN, login} from 'reducers/auth/authActions';
import {SOCKET_DISCONNECTED, SOCKET_CONNECTED} from 'reducers/websocket/websocketActions';

function* loginOnStartup() {
    yield loginByTokenSaga();
}

function* loginByTokenSaga() {
    const token = getAuthToken();
    yield put(login(token));
}

function getAuthToken() {
    return '-dXLN99P-bR4iUW3R1S48OMv8Z*Qu6BNNVwCl*c1E5bHgtx_e-((xq!cOHRpcGAMF8sA!*J5MeUNrpl2';
}

function* reloginOnServerReconnect() {
    while (true) {
        yield take(SOCKET_DISCONNECTED);
        yield take(SOCKET_CONNECTED);

        yield loginByTokenSaga();
    }
}

export default function*() {
    yield all([
        loginOnStartup(),
        reloginOnServerReconnect(),

        websocketSendEffect(LOGIN, ({token}) => ({
            action: 'auth',
            token,
            type: 'device',
        })),
    ]);
}
