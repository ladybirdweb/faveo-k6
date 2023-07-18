import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
    const hostUrl = __ENV.HOST_URL; // Retrieve host URL from command-line argument

    const response = http.get(`${hostUrl}/api/form/render/?category=ticket&scenario=create&panel=agent`, {
        timeout: '60s', // Set the timeout to 60 seconds
    });
    check(
        loginResponse,
        { "api/form/render Api response status code is 200": (r) => r.status == 200 }
    );
    console.log(`Response body: ${response.status}`);
    console.log(`Response body: ${response.body}`);

    sleep(2);
}