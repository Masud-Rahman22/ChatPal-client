// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCFwbB0WFOIlgg6AbZ5cCfPZwGCFFvKkdE",
    authDomain: "chatpal-e8086.firebaseapp.com",
    projectId: "chatpal-e8086",
    storageBucket: "chatpal-e8086.appspot.com",
    messagingSenderId: "18952857634",
    appId: "1:18952857634:web:9e21627af527e7765a427b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;