export const LOGIN = 'auth/LOGIN';

export function login(token) {
    return {
        type: LOGIN,
        token,
    };
}

