import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyA0RgaEDcsOQX22HreDhcvz9WBQv3CDsiE",

  authDomain: "uber-71356.firebaseapp.com",

  projectId: "uber-71356",

  storageBucket: "uber-71356.appspot.com",

  messagingSenderId: "133155770054",

  appId: "1:133155770054:web:b56c36d8092b31982551c7",

  measurementId: "G-PQN2QTV5FQ"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;


// const analytics = getAnalytics(app);