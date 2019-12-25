const reducers = {};

reducers.websocket = require('./websocket/websocketReducer').default;
reducers.textchat = require('./textchat/textchatReducer').default;

export default reducers;
