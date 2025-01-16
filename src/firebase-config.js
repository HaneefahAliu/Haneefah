import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAIF5cERnLm3NAPqUlxpfUR6XsOVdHgtgg",
    authDomain: "haneefah-28f6b.firebaseapp.com",
    projectId: "haneefah-28f6b",
    storageBucket: "haneefah-28f6b.firebasestorage.app",
    messagingSenderId: "561817621932",
    appId: "1:561817621932:web:eaddf41c0df776e0f65609",
    measurementId: "G-G794GW61ED"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

// Add this console log to verify storage is initialized
console.log('Firebase Storage initialized:', storage);

export { storage };