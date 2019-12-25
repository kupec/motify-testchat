export const SEND_TEXT_MESSAGE = 'textchat/SEND_TEXT_MESSAGE';
export const SOCKET_NEW_TEXT_MESSAGE = 'incoming';

export function sendTextMessage(text) {
    return {
        type: SEND_TEXT_MESSAGE,
        text,
    };
}
