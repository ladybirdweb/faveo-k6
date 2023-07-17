## Performance Testing with K6

This repository contains a K6 script for performance testing your application. Follow the steps below to install K6 and run the test case.

### Installation

#### Prerequisites
Before installing K6, ensure you have the following prerequisites:

- Operating System: K6 supports Windows, macOS, and Linux.
- Node.js (optional): If you want to use the K6 JavaScript API or run K6 tests using Node.js, install Node.js before proceeding.

#### Steps

1. Visit the K6 website at [https://k6.io](https://k6.io) and navigate to the "Downloads" section.
2. Choose the appropriate version of K6 for your operating system.
3. Download the binary file for your chosen version.
4. Install the binary based on your operating system:
   - **Windows**: Extract the downloaded ZIP file and move the extracted `k6.exe` file to a directory included in your system's PATH environment variable.
   - **macOS**: Open a Terminal window, navigate to the directory where the binary is located, and run the command `chmod +x k6` to make it executable.
   - **Linux**: Open a Terminal window, navigate to the directory where the binary is located, and run the command `chmod +x k6` to make it executable.
5. Verify the installation by opening a new Terminal or Command Prompt window and running the command `k6 version`. If the installation was successful, you should see the K6 version information printed.

For detailed installation instructions, refer to the [official K6 documentation](https://k6.io/docs/get-started/installation/).

### Running the Test Case

To run the test case, use the following command:

```shell
k6 run --vus "number_of_users" --duration "duration_of_time" HOST_URL="url_of_instance" --env EMAIL=your-faveo-instance-email --env PASSWORD=your-faveo-instance-password filename
```

Replace the placeholders with your desired values:

- `"number_of_users"`: The number of virtual users to simulate during the test.
- `"duration_of_time"`: The duration of the test. Specify the time in seconds (e.g., `20s` for 20 seconds).
- `"url_of_instance"`: The URL of your Faveo instance.
- `your-faveo-instance-email`: Your Faveo instance email address.
- `your-faveo-instance-password`: Your Faveo instance password.
- `filename`: The filename of the K6 script to run.

Example:

```shell
k6 run --vus 20 --duration 20s --env HOST_URL=https://example.com --env EMAIL=your-email --env PASSWORD=your-password script.js
```

### Output Metrics

The output of the test case will provide various metrics and measurements. Here are some key elements to understand:

- **Data Received and Data Sent**: These metrics indicate the amount of data received from the server and sent to the server during the test. They help you understand the data transfer requirements and overall network load.

- **HTTP Request Metrics**: These metrics provide details about the requests sent to the server, including their duration, success rate, failure rate, and timings. They help you evaluate the performance of individual requests and identify bottlenecks.

- **HTTP Request Blocked, Connecting, Duration, Waiting**: These metrics focus on different stages of an HTTP request's lifecycle, such as blocking, connection establishment, duration, and waiting time. They help you pinpoint delays or timeouts, providing insights into server and network performance.

- **HTTP Request Failed**: This metric indicates the failure rate of HTTP requests. High failure rates may suggest issues with the server, network, or the application itself. Investigating failed requests can help identify root causes and take corrective actions.

- **Iterations and VUs**: These metrics provide information about the number of iterations (test iterations executed) and virtual users (simulated users) during the test. They help you understand the load applied to the system and evaluate its performance under different user loads.

- **Iteration Duration**: This metric indicates the average duration of each test iteration. It helps you evaluate the overall test duration and the time taken for each iteration to complete. Deviations in iteration duration can indicate performance issues or inconsistencies.

- **VUs Max**: This metric represents the maximum number of virtual users used during the test. It helps you understand the scalability and capacity of your system by determining the maximum load it can handle.

Analyzing and interpreting these metrics can provide insights into the performance, scalability, and reliability of your application. By identifying bottlenecks, performance issues, and areas for improvement, you can optimize your application and make informed decisions regarding infrastructure adjustments.

It is important to establish performance benchmarks and compare test results against those benchmarks to track changes and improvements over time. Regular monitoring and analysis of test outputs help ensure your application meets the required performance goals and can handle expected user loads effectively.

![Output Metrics](https://github.com/ladybirdweb/faveo-k6/assets/110447324/17562747-892e-45e3-b99f-4d50df83a2da)

For more information and in-depth analysis of the test output, refer to the documentation and resources provided by K6.
