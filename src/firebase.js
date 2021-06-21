import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDa_Nda1dCXK6x79FPg038X7T1_3QQDMmY",
    authDomain: "url-shortener-e5cae.firebaseapp.com",
    projectId: "url-shortener-e5cae",
    storageBucket: "url-shortener-e5cae.appspot.com",
    messagingSenderId: "269062246637",
    appId: "1:269062246637:web:d5cb3e5dc238a3fc8fbce4",
    measurementId: "G-KG75T2P4DV"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

export const db = firebaseApp.firestore()


