
import axios from 'axios';

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