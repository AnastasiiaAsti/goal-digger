import sendRequest from './send-request';

const BASE_URL = '/api/lists'

export function getAll(goals) {
    return sendRequest(`${BASE_URL}/user`, 'POST', goals);
}