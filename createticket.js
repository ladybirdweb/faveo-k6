// Creator: k6 Browser Recorder 0.6.2

import { sleep, group } from 'k6'
import http from 'k6/http'

import { FormData } from 'https://jslib.k6.io/formdata/0.0.2/index.js'

export const options = { vus: 100, duration: '5m' }

export default function main() {
    let formData, response;
    let csrfToken;
    const hostUrl = __ENV.HOST_URL; // Retrieve host URL from command-line argument 
    const email = __ENV.EMAIL; // Retrieve email from command-line argument
    const password = __ENV.PASSWORD; // Retrieve password from command-line argument

    group(`page_1 - ${hostUrl}`, function () {
        // response = http.get('https://developers.productdemourl.com/amzadfaveo/public/auth/login')
        // console.log(`Response : ${response.body}`);
        const loginPageUrl = `${hostUrl}/auth/login`;
        // const loginApiUrl = 'https://developers.productdemourl.com/amzadfaveo/public/api/login';

        // Step 1: Get the login page
        const loginPageResponse = http.get(loginPageUrl);
        const loginPageContent = loginPageResponse.body;

        // console.log('Login Page Content: ', loginPageContent);

        // Extract CSRF token from the login page response using regular expressions
        const csrfTokenMatch = /meta name="csrf-token" content="(.+?)"/.exec(loginPageContent);
        csrfToken = csrfTokenMatch[1];
        console.log('Login Token: ', csrfToken);
        const loginPayload = {
            email: 'amzadchoudhary36@gmail.com',
            password: 'Password@1',
            _token: csrfToken
        };

        response = http.post(
            `${hostUrl}/login`, loginPayload,
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            }
        )
        // console.log(`Response Login: ${response.body}`);

    })

    group(
        `page_2 - ${hostUrl}/panel/dashboard`,
        function () {

            response = http.get(`${hostUrl}/panel/dashboard`)
            console.log('Dashboard Response Status Code: ', response.status);

            // console.log(`Response body: ${response.body}`);

            response = http.get(
                `${hostUrl}/api/get-auth-info`)
            console.log('api/get-auth-info Response Status Code: ', response.status);
            sleep(1)

            response = http.get(
                `${hostUrl}/custom-js/get-list-of-scripts`)
            console.log('custom-js/get-list-of-scripts Response Status Code: ', response.status);
            // console.log(`Response body: ${response.body}`);

            response = http.get(
                `${hostUrl}/auto-update/notification`)
            // console.log(`Response body: ${response.body}`);

            response = http.get(
                `${hostUrl}/api/in-app/auth/notifications?page=1`)
            console.log('api/get-auth-info Response Status Code: ', response.status);

            // console.log(`Response body: ${response.body}`);

            response = http.get(
                `${hostUrl}/api/dependency/languages?meta=true`)
            console.log('api/dependency/languages Response Status Code: ', response.status);

            // console.log(`Response body: ${response.body}`);

            response = http.get(
                `${hostUrl}/api/agent/navigation`)
            console.log('api/agent/navigation Response Status Code: ', response.status);

            // console.log(`Response body: ${response.body}`);

            response = http.get(
                `${hostUrl}/api/agent/dashboard-data/dashboard`)
            console.log('api/agent/dashboard-data/dashboard Response Status Code: ', response.status);

            // console.log(`Response body: ${response.body}`);

            response = http.get(
                `${hostUrl}/health/system/alerts`)
            console.log('health/system/alerts Response Status Code: ', response.status);

            // console.log(`Response body: ${response.body}`);

            response = http.get(
                `${hostUrl}/bill/package/get-user-invoice?meta=true&all-users=1&status=0`)
            console.log(' Response Status Code: ', response.status);

            // console.log(`Response body: ${response.body}`);


            response = http.get(
                `${hostUrl}/api/agent/dashboard-report/top-widget`)
            console.log(' Response Status Code: ', response.status);

            // console.log(`Response body: ${response.body}`);

            response = http.get(
                `${hostUrl}/api/agent/dashboard-report/require-immediate-action?page=1`)
            console.log(' Response Status Code: ', response.status);

            // console.log(`Response body: ${response.body}`);

            response = http.get(
                `${hostUrl}/api/agent/todo-list?page=1`)
            console.log(' Response Status Code: ', response.status);

            // console.log(`Response body: ${response.body}`);

            response = http.get(
                `${hostUrl}/api/agent/ticket-list?category=inbox`)
            console.log(' Response Status Code: ', response.status);

            // console.log(`Response body: ${response.body}`);

            response = http.get(
                `${hostUrl}/api/agent/navigation`)
            console.log(' Response Status Code: ', response.status);

            // console.log(`Response body: ${response.body}`);

            response = http.get(
                `${hostUrl}/api/form/render/?category=ticket&scenario=create&panel=agent`)
            console.log(' Response Status Code: ', response.status);

            // console.log(`Response body: ${response.body}`);

            sleep(2)

            response = http.get(
                `${hostUrl}/api/dependency/users?meta=true&scenario=create&requester=&cc=&subject=&status_id=&priority_id=&location_id=&source_id=&help_topic_id=&department_id=&type_id=&assigned_id=&description=&asset_ids=&page=1&paginate=1`)
            console.log('Response Status Code: ', response.status);

            // console.log(`Response Users: ${response.body}`);


            response = http.get(
                `${hostUrl}/api/dependency/statuses?scenario=create&requester=1&cc=&subject=Test+ticket&status_id=&priority_id=&location_id=&source_id=&help_topic_id=&department_id=&type_id=&assigned_id=&description=&asset_ids=&page=1&paginate=1`)
            console.log('Response Status Code: ', response.status);

            // console.log(`Response body: ${response.body}`);


            response = http.get(
                `${hostUrl}/api/dependency/priorities?scenario=create&requester=1&cc=&subject=Test+ticket&status_id=1&priority_id=&location_id=&source_id=&help_topic_id=&department_id=&type_id=&assigned_id=&description=&asset_ids=&page=1&paginate=1`)
            console.log(' Response Status Code: ', response.status);

            // console.log(`Response body: ${response.body}`);


            response = http.get(
                `${hostUrl}/api/dependency/locations?scenario=create&requester=1&cc=&subject=Test+ticket&status_id=1&priority_id=2&location_id=&source_id=&help_topic_id=&department_id=&type_id=&assigned_id=&description=&asset_ids=&page=1&paginate=1`)
            console.log(' Response Status Code: ', response.status);

            // console.log(`Response body: ${response.body}`);

            response = http.get(
                `${hostUrl}/api/dependency/sources?scenario=create&requester=1&cc=&subject=Test+ticket&status_id=1&priority_id=2&location_id=2&source_id=&help_topic_id=&department_id=&type_id=&assigned_id=&description=&asset_ids=&page=1&paginate=1`)
            console.log(' Response Status Code: ', response.status);

            // console.log(`Response body: ${response.body}`);

            response = http.get(
                `${hostUrl}/api/dependency/help-topics?meta=true&panel=agent&scenario=create&requester=1&cc=&subject=Test+ticket&status_id=1&priority_id=2&location_id=2&source_id=1&help_topic_id=&department_id=&type_id=&assigned_id=&description=&asset_ids=&page=1&paginate=1`)
            // console.log(`Response body: ${response.body}`);
            console.log(' Response Status Code: ', response.status);


            response = http.get(
                `${hostUrl}/api/dependency/departments?meta=true&panel=agent&scenario=create&requester=1&cc=&subject=Test+ticket&status_id=1&priority_id=2&location_id=2&source_id=1&help_topic_id=1&department_id=&type_id=&assigned_id=&description=&asset_ids=&page=1&paginate=1`)
            // console.log(`Response body: ${response.body}`);
            console.log(' Response Status Code: ', response.status);

            response = http.get(
                `${hostUrl}/api/dependency/types?scenario=create&requester=1&cc=&subject=Test+ticket&status_id=1&priority_id=2&location_id=2&source_id=1&help_topic_id=1&department_id=1&type_id=&assigned_id=&description=&asset_ids=&page=1&paginate=1`)
            // console.log(`Response body: ${response.body}`);
            console.log(' Response Status Code: ', response.status);

            response = http.get(
                `${hostUrl}/api/dependency/agents?meta=true&scenario=create&requester=1&cc=&subject=Test+ticket&status_id=1&priority_id=2&location_id=2&source_id=1&help_topic_id=1&department_id=1&type_id=1&assigned_id=&description=&asset_ids=&page=1&paginate=1`)
            // console.log(`Response body: ${response.body}`);
            console.log(' Response Status Code: ', response.status);

            // Step 3: Create a Ticket payload
            const createPayload = {
                asset_ids: 'agent',
                assigned_id: '',
                'cc': '',
                'department_id': '1',
                'description': '<p>testing</p>',
                'g-recaptcha-response': 'undefined',
                'help_topic_id': '1',
                'location_id': '2',
                'panel': 'agent',
                'priority_id': '2',
                'requester': '7',
                'scenario': 'create',
                'source_id': '1',
                'subject': 'Test ticket',
                'type_id': '1'
            };
            // formData = new FormData()
            // formData.append('asset_ids', '')
            // formData.append('assigned_id', '1')
            // formData.append('cc', '')
            // formData.append('department_id', '1')
            // formData.append('description', '<p>testing</p>')
            // formData.append('g-recaptcha-response', 'undefined')
            // formData.append('help_topic_id', '1')
            // formData.append('location_id', '2')
            // formData.append('panel', 'agent')
            // formData.append('priority_id', '2')
            // formData.append('requester', '7')
            // formData.append('scenario', 'create')
            // formData.append('source_id', '1')
            // formData.append('status_id', '1')
            // formData.append('subject', 'Test ticket')
            // formData.append('type_id', '1')
            // // formData.body()
            response = http.post(
                `${hostUrl}`,
                JSON.stringify(createPayload),
                {
                    headers: {
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
                    },
                }
            )
            console.log('Ticket Response Status Code: ', response.status);

            console.log(`Response Ticket: ${response.body}`);

            sleep(1)

            response = http.get(
                `${hostUrl}/api/agent/navigation`)

            response = http.get(
                `${hostUrl}/api/form/render/?category=ticket&scenario=create&panel=agent`)
            console.log('api/form/render Response Status Code: ', response.status);

            response = http.get(
                `${hostUrl}/api/agent/ticket-list?category=inbox`)
            console.log('api/agent/ticket-list Response Status Code: ', response.status);

            console.log(`Response body: ${response.body}`);

            response = http.get(
                `${hostUrl}/api/agent/navigation`)

            response = http.get(
                `${hostUrl}/api/rating?ticket_id=1`)

            response = http.get(
                `${hostUrl}/api/agent/action-list?ticket_id=1`)

            response = http.get(
                `${hostUrl}/api/agent/ticket-details/1`)

            response = http.get(
                `${hostUrl}/api/agent/associated-tickets?ticket_id=1&count=1`)

            response = http.get(
                `${hostUrl}/api/agent/ticket-conversation/1?page=1`)
            // console.log(`Response body: ${response.body}`);


            response = http.get(
                `${hostUrl}/file-manager/upload-info`)

            response = http.post(
                `${hostUrl}/api/thread/reply/1`,
                '{"content":"<p>testing reply</p>","attachment":[],"ticket_id":1,"to":[1],"cc":[]}',
                {
                    headers: {
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
                    },
                }
            )
            console.log(`Response body: ${response.body}`);

            sleep(0.8)

            response = http.get(
                `${hostUrl}/api/agent/navigation`)

            response = http.get(
                `${hostUrl}/api/agent/ticket-list?category=inbox`)
            // console.log(`Response body: ${response.body}`);

            response = http.get(
                `${hostUrl}/api/rating?ticket_id=1`)

            response = http.get(
                `${hostUrl}/api/agent/action-list?ticket_id=1`)

            response = http.get(
                `${hostUrl}/api/agent/ticket-details/1`)

            response = http.get(
                `${hostUrl}/api/agent/ticket-conversation/1?page=1`)

            response = http.get(
                `${hostUrl}/api/agent/ticket-list?category=inbox`)

            response = http.get(
                `${hostUrl}/api/agent/navigation`)

            response = http.get(
                `${hostUrl}/api/rating?ticket_id=1`)

            response = http.get(
                `${hostUrl}/api/agent/action-list?ticket_id=1`)

            response = http.get(
                `${hostUrl}/api/agent/ticket-details/1`)
            sleep(1)

            response = http.get(
                `${hostUrl}/api/agent/associated-tickets?ticket_id=18&count=1`)

            response = http.get(
                `${hostUrl}/api/agent/ticket-conversation/18?page=1`)
            sleep(6.3)

            response = http.post(
                `${hostUrl}/auth/logout`,
                null,
                {
                    headers: {
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
                    },
                }
            )
            console.log(`Response Logout: ${response.body}`);

            sleep(1)
        }
    )

    group(`page_3 - ${hostUrl}`, function () {
        response = http.get(`${hostUrl}`)
        // console.log(`Response body: ${response.body}`);

        response = http.get(
            `${hostUrl}/api/get-auth-info`)
        response = http.get(
            `${hostUrl}/custom-js/get-list-of-scripts`)
        response = http.get(
            `${hostUrl}/api/dependency/languages?meta=true`)
    })
}