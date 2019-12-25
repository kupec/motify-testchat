import {wsURL} from '../../../config/config';

let socket = null;
let socketConnectionPromise = null;

export default function() {
    if (!socket) {
        socket = new WebSocket(wsURL);
        socketConnectionPromise = new Promise(resolve => socket.addEventListener('open', resolve));
    }

    return socket;
}

export async function sendSocketMessage(message) {
    await socketConnectionPromise;
    return socket.send(JSON.stringify(message));
}

export function disconnectSocket() {
    socket.close();
    socket = null;
    socketConnectionPromise = null;
}
