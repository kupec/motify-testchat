import {wsURL} from 'config/config';

let socket = null;

export default function() {
    if (!socket) socket = new WebSocket(wsURL);

    return socket;
}

export function sendSocketMessage(message) {
    return socket.send(JSON.stringify(message));
}

export function disconnectSocket() {
    socket.close();
    socket = null;
}
