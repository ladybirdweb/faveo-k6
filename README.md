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


Make sure you change the username and the password with your instance credentials



To run the test case Follow this command 
k6 run --vus "number_of_users_ "time" HOST_URL="url_of_instance"

Example:

k6 run --vus 20 --duration 20s --env HOST_URL=https://amzad.faveodemo.com registeruser.js
