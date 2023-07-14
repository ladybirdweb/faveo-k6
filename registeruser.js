import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
    const hostUrl = __ENV.HOST_URL; // Retrieve host URL from command-line argument 
    const email = __ENV.EMAIL; // Retrieve email from command-line argument
    const password = __ENV.PASSWORD; // Retrieve password from command-line argument

    const loginPageUrl = `${hostUrl}/auth/login`;
    const loginApiUrl = `${hostUrl}/api/login`;
    const createUserApiUrl = `${hostUrl}/user/create/api`;

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

        if (loginResponse.status === 200 && loginResponse.json('success')) {
            // Step 3: Create random users
            // for (let i = 200; i <= 220; i++) {
            const randomFirstName = `UserFirstName`;
            const randomLastName = `Lastname`;
            const randomEmail = `user${Math.floor(Math.random() * 10000)}@example.com`;

            const createUserPayload = {
                panel: 'agent',
                'g-recaptcha-response': 'undefined',
                scenario: 'create',
                first_name: randomFirstName,
                last_name: randomLastName,
                user_name: '',
                phone_number: '',
                email: randomEmail,
                mobile: '',
                address: '',
                organisation: ''
            };

            const createUserHeaders = {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': csrfToken,
                'Cache-Control': 'no-cache, private',
                'Connection': 'Keep-Alive',
                'Content-Security-Policy': 'font-src \'self\' https://fonts.gstatic.com',
                'Date': new Date().toUTCString(),
                'Keep-Alive': 'timeout=5, max=100',
                'Server': 'Apache/2.4.57 (Ubuntu)',
                'Strict-Transport-Security': 'max-age=31536000; includeSubdomains',
                'X-Content-Type-Options': 'nosniff',
                'X-Frame-Options': 'SAMEORIGIN',
                'X-Xss-Protection': '1; mode=block'
            };

            const createUserResponse = http.post(createUserApiUrl, JSON.stringify(createUserPayload), { headers: createUserHeaders });

            console.log(`Create User Response Status Code: `, createUserResponse.status);
            console.log(`Create User  Response Body: `, createUserResponse.body);

            sleep(1);
            // }
        } else {
            console.log('Login failed or returned a non-success response.');
        }
    } else {
        console.log('CSRF token not found in the login page response.');
    }

    sleep(1);
}
