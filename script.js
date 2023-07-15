import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
    //Simple test the 
    const hostUrl = __ENV.HOST_URL; // Retrieve host URL from command-line argument 

    const response = http.get(`${hostUrl}/api/form/render/?category=ticket&scenario=create&panel=agent`);
    console.log(`Response body: ${response.status}`);
    console.log(`Response body: ${response.body}`);
    sleep(1);
}
