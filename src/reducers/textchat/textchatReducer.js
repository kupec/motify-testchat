import createReducerByMap from '../createReducerByMap';

import {SEND_TEXT_MESSAGE, SOCKET_NEW_TEXT_MESSAGE} from './textchatActions';

const initialState = {
    textMessageList: [],
};

const reducerMap = {
    [SEND_TEXT_MESSAGE]: sendTextMessage,
    [SOCKET_NEW_TEXT_MESSAGE]: receiveTextMessage,
};

function sendTextMessage(state, action) {
    const newMessage = {
        author: 'user',
        text: action.text,
    };

    return addTextMessage(state, newMessage);
}

function addTextMessage(state, messageEntry) {
    return {
        ...state,
        textMessageList: [...state.textMessageList, messageEntry],
    };
}

function receiveTextMessage(state, action) {
    const newMessage = {
        author: 'customer',
        text: action.text,
    };

    return addTextMessage(state, newMessage);
}

export default createReducerByMap(initialState, reducerMap);
