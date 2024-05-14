    import { initializeApp } from "firebase/app";
  import { initializeAuth, getAuth, getReactNativePersistence } from 'firebase/auth';
    import { getFirestore } from "firebase/firestore";

    const firebaseConfig = {
    apiKey: "AIzaSyCUjYhBaiGOqXuAdl29VDlZyeXl4eFSVCg",
    authDomain: "natively-32528.firebaseapp.com",
    projectId: "natively-32528",
    storageBucket: "natively-32528.appspot.com",
    messagingSenderId: "497347116034",
    appId: "1:497347116034:web:c28f9b8587f104365a7b1b",
    };

    initializeApp(firebaseConfig);
    export const auth = getAuth();
    export const database = getFirestore();
