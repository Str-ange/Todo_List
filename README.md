# Todo List App

A simple Todo List application built with React and Firebase.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Features](#features)
4. [Google Login](#google-login)
5. [Contributing](#contributing)

## Installation

To run the Todo List app locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/todo-list.git
   ```
   
2. Install dependencies:

  ```bash
  cd todo-list
  npm install
  ```

3. Set up Firebase:
   
  - Create a Firebase project on the [Firebase Console](https://console.firebase.google.com/).
  - Set up Firebase Authentication and Firestore database.
  - Copy your Firebase config and update the Firebase initialization file (firebase.js).

4. Run the development server:

  ```bash
  npm start
  ```

## Usage

Once the app is running, you can:
  - Login using Google Account
  - Add new tasks to the todo list.
  - Mark tasks as completed.
  - View the list of tasks.
    
## Features

  - Google Login: Login using your google account.
  - Add tasks: Enter a task and press Enter to add it to the list.
  - Mark tasks as complete: Click on a complete buttom to mark it as complete.
  - Edit tasks: Click on a task to edit it.

## Google Login
You can enable Google login for the Todo List app to allow users to sign in with their Google accounts. Follow these steps to set up Google login:

  1. Installing OAuth to add Google login to your React app
  
  - Install [@react-oauth/google](https://www.npmjs.com/package/@react-oauth/google) package.
    
  2. Acquiring a Google client ID for your project
     
  - Get a client ID from Google, go to [Google Cloud Console](https://console.cloud.google.com/).
  - For more details check [Setting up OAuth 2.0](https://support.google.com/cloud/answer/6158849?hl=en).
    
  3. Integrating Google OAuth in React components
  4. Create user profile based on the user’s Google profile

## Contributing

Contributions are welcome! If you'd like to contribute to the Todo List app, please follow these guidelines:

  1. Fork the repository.
  2. Create a new branch: git checkout -b feature-new-feature.
  3. Commit your changes: git commit -am 'Add new feature'.
  4. Push to the branch: git push origin feature-new-feature.
  5. Submit a pull request.



