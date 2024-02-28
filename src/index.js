import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACgW4m0P3HQmDCFQIWWxrpUNRn7JBgS3o",
  authDomain: "dropdown-menu-6d2dc.firebaseapp.com",
  projectId: "dropdown-menu-6d2dc",
  storageBucket: "dropdown-menu-6d2dc.appspot.com",
  messagingSenderId: "694707405682",
  appId: "1:694707405682:web:cfe90c53f2f05a7ce253eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

