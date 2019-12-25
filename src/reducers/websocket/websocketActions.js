export const SOCKET_CONNECTED = 'websocket/SOCKET_CONNECTED';
export const SOCKET_DISCONNECTED = 'websocket/SOCKET_DISCONNECTED';
export const SOCKET_SUCCESS_RESPONSE = 'websocket/SOCKET_SUCCESS_RESPONSE';
export const SOCKET_ERROR_RESPONSE = 'websocket/SOCKET_ERROR_RESPONSE';

export function socketConnected() {
    return {
        type: SOCKET_CONNECTED,
    };
}

export function socketDisconnected() {
    return {
        type: SOCKET_DISCONNECTED,
    };
}

export function socketSuccessResponse() {
    return {
        type: SOCKET_SUCCESS_RESPONSE,
    };
}

export function socketErrorResponse() {
    return {
        type: SOCKET_ERROR_RESPONSE,
    };
}
