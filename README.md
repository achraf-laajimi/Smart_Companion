# Smart Companion AI Chatbot

This project features a Smart Companion AI Chatbot designed to guide students through an application in an interactive and engaging way. The chatbot offers real-time assistance, providing detailed walkthroughs to help students navigate every path and perform tasks within the app. Developed with **Flask** (backend), **Gemini API**, and **React.js** (prototype frontend), the chatbot is the core of the application.


## Project Overview

The Smart Companion AI Chatbot aims to assist students by guiding them through various tasks and pathways within the application. By interacting with the chatbot, students can easily access any section of the app, complete assignments, and receive contextual help, all tailored to their needs.

The app is structured with a **Flask backend** providing the server-side logic and API integration (including the **Gemini API** for AI-driven assistance), while the **React.js frontend** serves as a prototype for the chatbot interface.

### Key Features:
- AI-powered walkthroughs: Interactive tutorials to help students navigate the app step by step.
- Gemini API integration: Advanced AI-driven interactions, offering personalized guidance.
- Seamless integration with the Flask backend and React frontend.
- Real-time chatbot responses with contextual recommendations.

## Technologies

The application is built using the following technologies:
- **Backend:**
  - **Flask**: Web framework for Python, powering the server-side logic and API.
  - **Gemini API**: For AI-driven chatbot interactions and guidance.
  
- **Frontend:**
  - **React.js**: Prototype for displaying the chatbot interface, showcasing the user interaction with the AI assistant.

## Features

### AI Chatbot Interaction
- The chatbot can walk students through every section of the app, answering questions, explaining tasks, and showing the exact steps to complete different processes.

### Real-Time Assistance
- Provides real-time, on-demand support to users, guiding them at every step.

### Integration with Gemni API
- Gemini API powers the AI, enabling the chatbot to offer sophisticated, context-aware advice to students.

### React Frontend (Prototype)
- Although the chatbot is fully functional in the backend, the React frontend showcases how the chatbot can be integrated into the app and tested interactively.

## Setup Instructions

### Prerequisites

To get started with the project, make sure you have the following installed:
- **Python** (for Flask backend)
- **Node.js** (for React frontend)
- **npm** (Node.js package manager)
- **Gemini API key** (for AI integration)

### Backend Setup (Flask)

1. Clone the repository:
    ```bash
    git clone https://github.com/achraf-laajimi/Smart_Companion.git
    ```

2. Create a virtual environment and install the required dependencies:
    ```bash
    python -m venv venv
    source venv/bin/activate   # On Windows, use `venv\Scripts\activate`
    pip install -r requirements.txt
    ```

3. Set up your Gemini API key in the backend configuration.

4. Run the Flask server:
    ```bash
    python app.py
    ```

### Frontend Setup (React)

1. Navigate to the frontend folder:
    ```bash
    cd smart-companion-chatbot
    ```

2. Install the necessary dependencies:
    ```bash
    npm install
    ```

3. Start the React development server:
    ```bash
    npm run dev
    ```

4. Open your browser and navigate to `http://localhost:3000` to interact with the chatbot prototype.

## Usage

Once the backend and frontend are set up and running, you can interact with the Smart Companion AI Chatbot by opening the application in your browser.

- The chatbot will be available as a UI element within the React frontend.
- Ask the chatbot questions or request walkthroughs to get guidance on using various features of the app.

The AI uses the Gemini API to provide real-time support, guiding students step-by-step as they navigate through the app.


Please make sure your code follows the project's style guide and passes all tests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
