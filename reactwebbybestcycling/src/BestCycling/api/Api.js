
import axios from 'axios';
import { getEnvVariables } from '../helpers/getEnvVariables';

/***********PETICION API BESTCYCLING***********/

const apiCycling = axios.create({
    baseURL: 'https://bestcycling-public.s3.eu-west-1.amazonaws.com',
    timeout: 3000,
});

export function getData() {
    return apiCycling.get('/api-test/db.json')
        .then(res => {
            return res.data;
        });
};


/***************PETICION API BACKEND NODE****************** */

const { VITE_API_URL } = getEnvVariables();

export const backendNode = axios.create({
    baseURL: VITE_API_URL,
    timeout: 5000,
});

export function sendLogin(data) {
    return backendNode.post('/login', data)
        .then(res => {
            return res;
        });
};

export function saveSubscription(data) {
    return backendNode.put('/save', data)
        .then(res => {
            return res;
        });
};