// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_M7PIg00K4G5eQjNzBOb3H224KHyHgVM",
  authDomain: "lms-erozgar.firebaseapp.com",
  projectId: "lms-erozgar",
  storageBucket: "lms-erozgar.appspot.com",
  messagingSenderId: "630586646189",
  appId: "1:630586646189:web:f8de12ee92879c51eef024",
  measurementId: "G-PM9EQLDC9W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app