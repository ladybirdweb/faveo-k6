import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
    const hostUrl = __ENV.HOST_URL; // Retrieve host URL from command-line argument 
    const email = __ENV.EMAIL; // Retrieve email from command-line argument
    const password = __ENV.PASSWORD; // Retrieve password from command-line argument

    const loginPageUrl = `${hostUrl}/auth/login`;
    const loginApiUrl = `${hostUrl}/api/login`;

    // Step 1: Get the login page
    const loginPageResponse = http.get(loginPageUrl);
    const loginPageContent = loginPageResponse.body;

    console.log('Login Page Content: ', loginPageContent);

    // Extract CSRF token from the login page response using regular expressions
    const csrfTokenMatch = /meta name="csrf-token" content="(.+?)"/.exec(loginPageContent);
    if (csrfTokenMatch) {
        const csrfToken = csrfTokenMatch[1];
        console.log('CSRF Token: ', csrfToken);

        // Step 2: Perform the login request
        const loginPayload = {
            email: email,
            password: password,
            _token: csrfToken
        };

        const loginHeaders = {
            'Content-Type': 'application/x-www-form-urlencoded'
        };

        const loginResponse = http.post(loginApiUrl, loginPayload, { headers: loginHeaders });

        console.log('Login Response Status Code: ', loginResponse.status);
        console.log('Login Response Body: ', loginResponse.body);
    } else {
        console.log('CSRF token not found in the login page response.');
    }

    sleep(1);
}
