import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHcVTXeZGat19cncQmnr11idNrTu1UNiM",
  authDomain: "skateshop-macortez.firebaseapp.com",
  projectId: "skateshop-macortez",
  storageBucket: "skateshop-macortez.appspot.com",
  messagingSenderId: "964095326424",
  appId: "1:964095326424:web:800a6aee4bf84e47f33fad",
  measurementId: "G-JF2VKBR6YX"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 /*  <React.StrictMode> */
    <App />
 /*{  </React.StrictMode> }*/
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
