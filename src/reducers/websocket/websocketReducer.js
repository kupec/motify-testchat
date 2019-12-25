import createReducerByMap from '../createReducerByMap';

import {SOCKET_CONNECTED, SOCKET_DISCONNECTED} from './websocketActions';

const initialState = {
    connected: false,
};

const reducerMap = {
    [SOCKET_CONNECTED]: socketConnected,
    [SOCKET_DISCONNECTED]: socketDisconnected,
};

function socketConnected(state, action) {
    return {
        ...state,
        connected: true,
    };
}

function socketDisconnected(state, action) {
    return {
        ...state,
        connected: false,
    };
}

export default createReducerByMap(initialState, reducerMap);
