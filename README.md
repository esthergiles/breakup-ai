# Breakup-AI

![Breakup-AI Enveloper](https://github.com/esthergiles/breakup-ai/blob/main/src/assets/envelope.jpg)

Breakup-AI is an intriguing and playful project that harnesses the capabilities of artificial intelligence to generate breakup letters. Developed using React, Tailwind CSS, Node.js, and OpenAI's API, this repository offers a unique and entertaining way to explore the world of AI-powered text generation.

## Overview

Breakup-AI was created as a lighthearted experiment to see what happens when you use AI to craft breakup letters. It combines OpenAI technology with a touch of humor to generate creative and sometimes unexpected breakup messages.

### Key Features

- **React Frontend**: The project's user interface is built using React, providing a modern and interactive user experience.

- **Tailwind CSS Styling**: Tailwind CSS is used for styling, making it easy to maintain and customize the project's appearance.

- **Node.js Backend**: The Node.js server handles requests and interacts with OpenAI's API to generate breakup letters.

- **OpenAI Integration**: OpenAI's powerful GPT-3 model is employed to compose the breakup letters, making them engaging and often amusing.


 ## Getting Started

This code is currently not hosted anywhere (though this is going to happen...eventually -___-), so to get the UI up and running you'll have to use your local machine and follow these steps:
### Note: If you are familiar with launching React Applications from your local device, these instructions should seem pretty standard.

1. **Download and Extract the ZIP**
   - Download the provided ZIP file to your computer.
   - Extract the contents of the ZIP archive to a location of your choice.

2. **Replace OpenAI API Key**
   - Open the extracted folder in your preferred code editor.
   - Locate the `.env` file in the project's root directory.
   - Inside the `.env` file, find the line with `OPENAI_KEY=YOUR_OPENAI_KEY`.
   - Replace `YOUR_OPENAI_KEY` with your actual OpenAI API key, which you can obtain from the OpenAI platform.

3. **Check Node.js Installation**
   - Open a command terminal on your computer.
   - Type `node -v` and press Enter.
   - If you see a version number displayed, it means Node.js is already installed. If not, you'll need to install Node.js from the [official website](https://nodejs.org/).

4. **Run the Node.js Server**
   - In your command terminal, navigate to the folder where you extracted the project files using the `cd` command.
   - Once you're inside the project folder, type `node server.js` and press Enter.
   - You should see a message indicating that the server is running on port 8020.
   - **Do not close this terminal window**.

5. **Launch the React App**
   - Open a new (second) command terminal.
   - Navigate to the same project folder using the `cd` command, if you're not already there.
   - Enter the command `npm start` and press Enter.
   - Your default web browser should open, and you'll be directed to [http://localhost:3000](http://localhost:3000).

**Remember to replace `YOUR_OPENAI_KEY` with your actual OpenAI API key and ensure that you have Node.js and npm (Node Package Manager) installed on your system. If you encounter any issues, double-check the steps, and refer to the official documentation or error messages for troubleshooting.

Please note that these instructions are intended as a general guide, and specific steps may vary slightly based on your operating system and setup. Enjoy experimenting with Breakup-AI!

