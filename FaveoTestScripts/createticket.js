// Creator: k6 Browser Recorder 0.6.2

import { sleep, group, check } from 'k6'
import http from 'k6/http'

// import { FormData } from 'https://jslib.k6.io/formdata/0.0.2/index.js'

export const options = { vus: 100, duration: '5m' }

export default function main() {
    let formData, response;
    let csrfToken;
    const hostUrl = __ENV.HOST_URL; // Retrieve host URL from command-line argument 
    const email = __ENV.EMAIL; // Retrieve email from command-line argument
    const password = __ENV.PASSWORD; // Retrieve password from command-line argument

    group(`page_1 - ${hostUrl}`, function () {
        const loginPageUrl = `${hostUrl}/auth/login`;

        // Step 1: Get the login page
        const loginPageResponse = http.get(loginPageUrl);
        check(
            loginPageResponse,
            { "Login Page response status code is 200": (r) => r.status == 200 }
        );
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

        const postloginresponse = http.post(
            `${hostUrl}/login`, loginPayload,
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            }
        )
        check(
            postloginresponse,
            { "Login Post Page Api response status code is 200": (r) => r.status == 200 }
        );
        // console.log(`Response Login: ${postloginresponse.body}`);

    })

    group(
        `page_2 - ${hostUrl}/panel/dashboard`,
        function () {

            const dashboard = http.get(`${hostUrl}/panel/dashboard`)
            console.log('Dashboard Response Status Code: ', dashboard.status);
            check(
                dashboard,
                { "Dashboard response status code is 200": (r) => r.status == 200 }
            );
            // console.log(`Response body: ${dashboard.body}`);

            const Authresponse = http.get(
                `${hostUrl}/api/get-auth-info`)
            console.log('api/get-auth-info Response Status Code: ', Authresponse.status);
            check(
                Authresponse,
                { "api/get-auth-info Response Status Code": (r) => r.status == 200 }
            );
            const customresponse = http.get(
                `${hostUrl}/custom-js/get-list-of-scripts`)

            check(
                customresponse,
                { "custom-js/get-list-of-scripts Response Status Code": (r) => r.status == 200 }
            );
            console.log('custom-js/get-list-of-scripts Response Status Code: ', customresponse.status);
            // console.log(`Response body: ${customresponse.body}`);

            const notificationresponse = http.get(
                `${hostUrl}/auto-update/notification`)
            // console.log(`Response body: ${response.body}`);
            check(
                notificationresponse,
                { "auto-update/notification Response Status Code": (r) => r.status == 200 }
            );

            const notificationsresponse = http.get(
                `${hostUrl}/api/in-app/auth/notifications?page=1`)
            console.log('api/get-auth-info Response Status Code: ', notificationsresponse.status);
            check(
                notificationsresponse,
                { "api/get-auth-info Response Status Code": (r) => r.status == 200 }
            );
            // console.log(`Response body: ${notificationsresponse.body}`);

            const languagesresponse = http.get(
                `${hostUrl}/api/dependency/languages?meta=true`)
            console.log('api/dependency/languages Response Status Code: ', languagesresponse.status);
            check(
                languagesresponse,
                { "api/dependency/languages Response Status Code": (r) => r.status == 200 }
            );
            // console.log(`Response body: ${languagesresponse.body}`);

            const navigationresponse = http.get(
                `${hostUrl}/api/agent/navigation`)
            console.log('api/agent/navigation Response Status Code: ', navigationresponse.status);
            check(
                navigationresponse,
                { "api/agent/navigation Response Status Code": (r) => r.status == 200 }
            );
            // console.log(`Response body: ${navigationresponse.body}`);

            const agentdashboardresponse = http.get(
                `${hostUrl}/api/agent/dashboard-data/dashboard`)
            console.log('api/agent/dashboard-data/dashboard Response Status Code: ', agentdashboardresponse.status);
            check(
                agentdashboardresponse,
                { "api/agent/dashboard-data/dashboard Response Status Code": (r) => r.status == 200 }
            );
            // console.log(`Response body: ${agentdashboardresponse.body}`);

            const alertsresponse = http.get(
                `${hostUrl}/health/system/alerts`)
            console.log('health/system/alerts Response Status Code: ', alertsresponse.status);
            check(
                alertsresponse,
                { "health/system/alerts Response Status Code": (r) => r.status == 200 }
            );
            // console.log(`Response body: ${response.body}`);

            const packageresponse = http.get(
                `${hostUrl}/bill/package/get-user-invoice?meta=true&all-users=1&status=0`)
            console.log('bill/package/get-user-invoice Response Status Code: ', packageresponse.status);
            check(
                packageresponse,
                { "bill/package/get-user-invoice Response Status Code": (r) => r.status == 200 }
            );
            // console.log(`Response body: ${packageresponse.body}`);


            const reportresponse = http.get(
                `${hostUrl}/api/agent/dashboard-report/top-widget`)
            console.log('api/agent/dashboard-report/top-widget Response Status Code: ', reportresponse.status);
            check(
                reportresponse,
                { "api/agent/dashboard-report/top-widget Response Status Code": (r) => r.status == 200 }
            );
            // console.log(`Response body: ${reportresponse.body}`);

            const actionresponse = http.get(
                `${hostUrl}/api/agent/dashboard-report/require-immediate-action?page=1`)
            console.log('api/agent/dashboard-report/require-immediate-action Response Status Code: ', actionresponse.status);
            check(
                actionresponse,
                { "api/agent/dashboard-report/require-immediate-action Response Status Code": (r) => r.status == 200 }
            );
            // console.log(`Response body: ${actionresponse.body}`);

            const todolistresponse = http.get(
                `${hostUrl}/api/agent/todo-list?page=1`)
            console.log('todolistresponse Response Status Code: ', todolistresponse.status);
            check(
                todolistresponse,
                { "api/agent/todo-list Response Status Code": (r) => r.status == 200 }
            );
            // console.log(`Response body: ${todolistresponse.body}`);

            const ticketlistresponse = http.get(
                `${hostUrl}/api/agent/ticket-list?category=inbox`)
            console.log(' Response Status Code: ', ticketlistresponse.status);
            check(
                ticketlistresponse,
                { "api/agent/ticket-list Response Status Code": (r) => r.status == 200 }
            );
            // console.log(`Response body: ${ticketlistresponse.body}`);


            const formrenderresponse = http.get(
                `${hostUrl}/api/form/render/?category=ticket&scenario=create&panel=agent`)
            console.log(' Response Status Code: ', formrenderresponse.status);
            check(
                formrenderresponse,
                { "api/form/render/?category=ticket&scenario=create&panel=agent Response Status Code": (r) => r.status == 200 }
            );
            // console.log(`Response body: ${formrenderresponse.body}`);

            sleep(1)

            const usersresponse = http.get(
                `${hostUrl}/api/dependency/users?meta=true&scenario=create&requester=&cc=&subject=&status_id=&priority_id=&location_id=&source_id=&help_topic_id=&department_id=&type_id=&assigned_id=&description=&asset_ids=&page=1&paginate=1`)
            console.log('Response Status Code: ', usersresponse.status);
            check(
                usersresponse,
                { "api/dependency/users Response Status Code": (r) => r.status == 200 }
            );
            // console.log(`Response Users: ${usersresponse.body}`);


            const statusesresponse = http.get(
                `${hostUrl}/api/dependency/statuses?scenario=create&requester=1&cc=&subject=Test+ticket&status_id=&priority_id=&location_id=&source_id=&help_topic_id=&department_id=&type_id=&assigned_id=&description=&asset_ids=&page=1&paginate=1`)
            // console.log('Response Status Code: ', statusesresponse.status);
            check(
                statusesresponse,
                { "api/dependency/statuses Response Status Code": (r) => r.status == 200 }
            );
            // console.log(`Response body: ${statusesresponse.body}`);


            const prioritiesresponse = http.get(
                `${hostUrl}/api/dependency/priorities?scenario=create&requester=1&cc=&subject=Test+ticket&status_id=1&priority_id=&location_id=&source_id=&help_topic_id=&department_id=&type_id=&assigned_id=&description=&asset_ids=&page=1&paginate=1`)
            console.log(' Response Status Code: ', prioritiesresponse.status);
            check(
                prioritiesresponse,
                { "api/dependency/priorities Response Status Code": (r) => r.status == 200 }
            );
            // console.log(`Response body: ${prioritiesresponse.body}`);


            const locationsresponse = http.get(
                `${hostUrl}/api/dependency/locations?scenario=create&requester=1&cc=&subject=Test+ticket&status_id=1&priority_id=2&location_id=&source_id=&help_topic_id=&department_id=&type_id=&assigned_id=&description=&asset_ids=&page=1&paginate=1`)
            console.log('api/dependency/locations Response Status Code: ', locationsresponse.status);
            check(
                locationsresponse,
                { "api/dependency/locations Response Status Code": (r) => r.status == 200 }
            );
            // console.log(`Response body: ${locationsresponse.body}`);

            const sourcesresponse = http.get(
                `${hostUrl}/api/dependency/sources?scenario=create&requester=1&cc=&subject=Test+ticket&status_id=1&priority_id=2&location_id=2&source_id=&help_topic_id=&department_id=&type_id=&assigned_id=&description=&asset_ids=&page=1&paginate=1`)
            console.log('api/dependency/sources Response Status Code: ', sourcesresponse.status);
            check(
                sourcesresponse,
                { "api/dependency/sources Response Status Code": (r) => r.status == 200 }
            );
            // console.log(`Response body: ${response.body}`);

            const helptopicsresponse = http.get(
                `${hostUrl}/api/dependency/help-topics?meta=true&panel=agent&scenario=create&requester=1&cc=&subject=Test+ticket&status_id=1&priority_id=2&location_id=2&source_id=1&help_topic_id=&department_id=&type_id=&assigned_id=&description=&asset_ids=&page=1&paginate=1`)
            // console.log(`Response body: ${helptopicsresponse.body}`);
            console.log('api/dependency/help-topics Response Status Code: ', helptopicsresponse.status);
            check(
                helptopicsresponse,
                { "api/dependency/help-topics Response Status Code": (r) => r.status == 200 }
            );

            const departmentsresponse = http.get(
                `${hostUrl}/api/dependency/departments?meta=true&panel=agent&scenario=create&requester=1&cc=&subject=Test+ticket&status_id=1&priority_id=2&location_id=2&source_id=1&help_topic_id=1&department_id=&type_id=&assigned_id=&description=&asset_ids=&page=1&paginate=1`)
            // console.log(`Response body: ${departmentsresponse.body}`);
            console.log('/api/dependency/departments Response Status Code: ', departmentsresponse.status);
            check(
                departmentsresponse,
                { "/api/dependency/departments Response Status Code": (r) => r.status == 200 }
            );

            const typesresponse = http.get(
                `${hostUrl}/api/dependency/types?scenario=create&requester=1&cc=&subject=Test+ticket&status_id=1&priority_id=2&location_id=2&source_id=1&help_topic_id=1&department_id=1&type_id=&assigned_id=&description=&asset_ids=&page=1&paginate=1`)
            // console.log(`Response body: ${typesresponse.body}`);
            console.log('api/dependency/types Response Status Code: ', typesresponse.status);
            check(
                typesresponse,
                { "api/dependency/types Response Status Code": (r) => r.status == 200 }
            );

            const agentsresponse = http.get(
                `${hostUrl}/api/dependency/agents?meta=true&scenario=create&requester=1&cc=&subject=Test+ticket&status_id=1&priority_id=2&location_id=2&source_id=1&help_topic_id=1&department_id=1&type_id=1&assigned_id=&description=&asset_ids=&page=1&paginate=1`)
            // console.log(`Response body: ${agentsresponse.body}`);
            console.log('api/dependency/agents Response Status Code: ', agentsresponse.status);
            check(
                agentsresponse,
                { "api/dependency/agents Response Status Code": (r) => r.status == 200 }
            );

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
            const ticketresponse = http.post(
                `${hostUrl}/newticket/post`,
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
            check(
                ticketresponse,
                { "newticket/post Response Status Code": (r) => r.status == 200 }
            );
            console.log('Ticket Response Status Code: ', ticketresponse.status);

            console.log(`Response Ticket: ${ticketresponse.body}`);

            sleep(1)

            // response = http.get(
            //     `${hostUrl}/api/agent/navigation`)

            // response = http.get(
            //     `${hostUrl}/api/form/render/?category=ticket&scenario=create&panel=agent`)
            // console.log('api/form/render Response Status Code: ', response.status);

            response = http.get(
                `${hostUrl}/api/agent/ticket-list?category=inbox`)
            // console.log('api/agent/ticket-list Response Status Code: ', response.status);

            console.log(`api/agent/ticket-list Response body: ${response.body}`);

            response = http.get(
                `${hostUrl}/api/agent/navigation`)

            const ticketidresponse = http.get(
                `${hostUrl}/api/rating?ticket_id=1`)
            check(
                ticketidresponse,
                { "api/rating Response Status Code": (r) => r.status == 200 }
            );
            response = http.get(
                `${hostUrl}/api/agent/action-list?ticket_id=1`)

            response = http.get(
                `${hostUrl}/api/agent/ticket-details/1`)

            response = http.get(
                `${hostUrl}/api/agent/associated-tickets?ticket_id=1&count=1`)

            const conversationresponse = http.get(
                `${hostUrl}/api/agent/ticket-conversation/1?page=1`)
            console.log(`Response body: ${conversationresponse.status}`);
            check(
                conversationresponse,
                { "api/agent/ticket-conversation Response Status Code": (r) => r.status == 200 }
            );

            const uploadresponse = http.get(
                `${hostUrl}/file-manager/upload-info`)
            check(
                uploadresponse,
                { "file-manager/upload-info Response Status Code": (r) => r.status == 200 }
            );
            const replyresponse = http.post(
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
            console.log(` replyresponse Response body: ${replyresponse.body}`);
            check(
                replyresponse,
                { "api/thread/reply Response Status Code": (r) => r.status == 200 }
            );
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

            const associatedresponse = http.get(
                `${hostUrl}/api/agent/associated-tickets?ticket_id=1&count=1`)
            check(
                associatedresponse,
                { "api/agent/associated-tickets Response Status Code": (r) => r.status == 200 }
            );
            const conversationreplyresponse = http.get(
                `${hostUrl}/api/agent/ticket-conversation/1?page=1`)
            check(
                conversationreplyresponse,
                { "api/agent/associated-tickets Response Status Code": (r) => r.status == 200 }
            );
            const logoutresponse = http.post(
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
            console.log(`Response Logout: ${logoutresponse.body}`);
            check(
                logoutresponse,
                { "api/agent/associated-tickets Response Status Code": (r) => r.status == 200 }
            );
            sleep(1)
        }
    )

    group(`page_3 - ${hostUrl}`, function () {
        // response = http.get(`${hostUrl}`)
        // console.log(`Response body: ${response.body}`);
        check(
            logoutresponse,
            { "api/agent/associated-tickets Response Status Code": (r) => r.status == 200 }
        );
        response = http.get(
            `${hostUrl}/api/get-auth-info`)
        response = http.get(
            `${hostUrl}/custom-js/get-list-of-scripts`)
        response = http.get(
            `${hostUrl}/api/dependency/languages?meta=true`)
    })
}