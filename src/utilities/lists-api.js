import sendRequest from './send-request';

const BASE_URL = '/api/lists'

export function getAllForUser() {
    return sendRequest(`${BASE_URL}/user`);
}