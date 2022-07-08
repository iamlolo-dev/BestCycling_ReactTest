
import axios from 'axios';


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
const backendNode = axios.create({
    baseURL: 'http://localhost:4000',
    timeout: 3000,
});

export function getNewSubscription(data) {
    return backendNode.post('/suscription/new', data)
        .then(res => {
            return res;
        });
};