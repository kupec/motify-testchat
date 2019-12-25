import {spawn} from 'redux-saga/effects';

const sagas = [
    require('./login/loginSaga').default,
    require('./websocket/websocketSaga').default,
    require('./textchat/textchatSaga').default,
];

export default function* rootSaga() {
    for (const saga of sagas) {
        yield spawn(saga);
    }
}
