import sendRequest from './send-request';
const BASE_URL = '/api/pins';

export function getAll() {
    return sendRequest(BASE_URL);
}

export function addPin(pins) {
    return sendRequest(BASE_URL, 'POST', pins );
}