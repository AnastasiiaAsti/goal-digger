import sendRequest from './send-request';
const BASE_URL = '/api/goals'

export function getAllGoals() {
    return sendRequest(`${BASE_URL}/index`);
}

export function addGoal(goalForm) {
    return sendRequest(`${BASE_URL}/create`, 'POST', goalForm);
}