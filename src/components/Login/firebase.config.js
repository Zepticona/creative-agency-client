// var firebaseConfig = {
//     apiKey: "AIzaSyCYVKIC2hDvxoAMOyvqkfHsgHLRp0qAH8o",
//     authDomain: "creative-agency-5297a.firebaseapp.com",
//     databaseURL: "https://creative-agency-5297a.firebaseio.com",
//     projectId: "creative-agency-5297a",
//     storageBucket: "creative-agency-5297a.appspot.com",
//     messagingSenderId: "92672314097",
//     appId: "1:92672314097:web:0d004dd7c26be5828b7750"
// };
// export default firebaseConfig;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYVKIC2hDvxoAMOyvqkfHsgHLRp0qAH8o",
  authDomain: "creative-agency-5297a.firebaseapp.com",
  databaseURL: "https://creative-agency-5297a.firebaseio.com",
  projectId: "creative-agency-5297a",
  storageBucket: "creative-agency-5297a.appspot.com",
  messagingSenderId: "92672314097",
  appId: "1:92672314097:web:0d004dd7c26be5828b7750"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;