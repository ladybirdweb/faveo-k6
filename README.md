# faveo-k6
This repo contains K6 script for performance testing of Faveo
To install k6, you can follow these step-by-step instructions:

Step 1: Check Prerequisites
Before installing k6, make sure you have the following prerequisites:

Operating System: k6 supports Windows, macOS, and Linux.
Node.js (optional): If you want to use the k6 JavaScript API or run k6 tests using Node.js, install Node.js before proceeding.

Step 2: Download k6 Binary
Visit the k6 website at https://k6.io and navigate to the "Downloads" section.

Step 3: Choose the Version
Choose the appropriate version of k6 for your operating system. There are precompiled binaries available for Windows, macOS, and Linux.

Step 4: Download the Binary
Click on the download link for your chosen version and save the binary file to your computer.

Step 5: Install the Binary

Windows: Extract the downloaded ZIP file and move the extracted k6.exe file to a directory included in your system's PATH environment variable.
macOS: Open a Terminal window, navigate to the directory where the binary is located, and run the command chmod +x k6 to make it executable.
Linux: Open a Terminal window, navigate to the directory where the binary is located, and run the command chmod +x k6 to make it executable.

Step 6: Verify the Installation
Open a new Terminal or Command Prompt window and run the following command:
k6 version

If the installation was successful, you should see the k6 version information printed in the Terminal or Command Prompt.

Or follow offical docs.
https://k6.io/docs/get-started/installation/


To run the test case follow this command:-

k6 run --vus "number_of_users --duration "duration_of_time" HOST_URL="url_of_instance" --env EMAIL=your-faveo-instance-email --env PASSWORD=your-faveo_instance-password filename

Example:

k6 run --vus 20 --duration 20s --env HOST_URL=https://example.com --env EMAIL=your-email --env PASSWORD=your-password script.js

Output metric:-
![image](https://github.com/ladybirdweb/faveo-k6/assets/110447324/17562747-892e-45e3-b99f-4d50df83a2da)

Understanding the output of a test case is essential for evaluating the performance and behavior of your application under load. The output provides valuable insights into various metrics and measurements that can help you identify issues, monitor performance, and make informed decisions. Here are some key elements of the output and their purposes:

Data Received and Data Sent: These metrics indicate the amount of data received from the server (inbound) and sent to the server (outbound) during the test. They help you understand the data transfer requirements and the overall load on your network.

HTTP Request Metrics: These metrics provide details about the requests sent to the server, including their duration, success rate, failure rate, and timings. They help you evaluate the performance of individual requests and identify any issues or bottlenecks.

HTTP Request Blocked, Connecting, Duration, Waiting: These metrics focus on the different stages of an HTTP request's lifecycle, such as blocking, connection establishment, duration, and waiting time. They help you pinpoint where delays or timeouts may occur, providing insights into the performance of your server and network.

HTTP Request Failed: This metric indicates the failure rate of HTTP requests. A high failure rate may suggest issues with the server, network, or the application itself. Investigating the failed requests can help identify the root cause of failures and take appropriate corrective actions.

Iterations and VUs: These metrics provide information about the number of iterations (test iterations executed) and virtual users (simulated users) during the test. They help you understand the load applied to the system and evaluate its performance under different user loads.

Iteration Duration: This metric indicates the average duration of each test iteration. It helps you evaluate the overall test duration and the time taken for each iteration to complete. Deviations in iteration duration can indicate performance issues or inconsistencies.

VUs Max: This metric represents the maximum number of virtual users used during the test. It helps you understand the scalability and capacity of your system by determining the maximum load it can handle.

By analyzing and interpreting these metrics, you can gain insights into the performance, scalability, and reliability of your application. You can identify bottlenecks, performance issues, and areas for improvement. These insights can guide you in optimizing your application, making infrastructure adjustments, or identifying areas that require further investigation.

It's important to establish performance benchmarks and compare the test results against those benchmarks to understand the impact of changes or improvements over time. Regular monitoring and analysis of test outputs help ensure your application meets the required performance goals and can handle the expected user load effectively.
