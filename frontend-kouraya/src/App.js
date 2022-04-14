import './App.css';
// import { firebase_app } from './firebase';

import firebase from "firebase/app"
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAAwYqwOBkIbZMsLp91G1dMk8aKM8EK7Og",
    authDomain: "kouraya-company.firebaseapp.com",
    projectId: "kouraya-company",
    storageBucket: "kouraya-company.appspot.com",
    messagingSenderId: "245245977401",
    appId: "1:245245977401:web:f35ea1d846a0666faebee8",
    measurementId: "G-NXZQ8G7ZZH"
  };

const firebase_app = firebase.initializeApp(firebaseConfig)
const db = firebase_app.firestore()

db.collection("villages").doc("bamako").get().then((doc) => {
  console.log(doc.data())
});

function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;
