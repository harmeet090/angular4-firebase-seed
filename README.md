# Angular4 and Firebase seed
  A simple starter project demonstrating the basic concepts of Angular 2.

## Getting Started
* Clone or fork this repository
* Make sure you have node.js installed version 6+
* Make sure you have NPM installed version 3.9+
* Deploy using gradle or Eclipse Liferay tools
  
### Install

Run this command in same project directory

```
npm install
```
### Add Firebase to Your app

* Create a Firebase project in the [Firebase console](https://console.firebase.google.com/).
* click to Create New Project.
* If you already have a Firebase project, click Add App from the project overview page.
* Click Add Firebase to your web app.
* Note the initialization code snippet, which you will need to replace in environment.ts file.

#### src\main\resources\META-INF\resources\enviroments - sample code

```
  // Initialize Firebase
  // TODO: Replace with your project's customized code snippet
  production: false,
  firebase : {
    apiKey: "<API_KEY>",
    authDomain: "<PROJECT_ID>.firebaseapp.com",
    databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
    storageBucket: "<BUCKET>.appspot.com",
    messagingSenderId: "<SENDER_ID>",
  };
  firebase.initializeApp(config);

```
