// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5Rh7cEt6GPoTbpI48Ad_1299XvcOUXIw",
  authDomain: "juvas-c1ab2.firebaseapp.com",
  projectId: "juvas-c1ab2",
  storageBucket: "juvas-c1ab2.appspot.com",
  messagingSenderId: "919628990600",
  appId: "1:919628990600:web:cba1118abebb8af0a1373d",
  measurementId: "G-HRVL857JNH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//export const analytics = getAnalytics(app);
export const auth = getAuth(app)