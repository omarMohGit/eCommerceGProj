import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


createApp(App).use(router).mount('#app')



//Here we make a connection to the firebase databse that is being connected to.
import {initializeApp} from 'firebase/app';
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB1UT68pt4T33tVXLXinE7TjuCRPJoOsN0",
    authDomain: "finalwebdev.firebaseapp.com",
    projectId: "finalwebdev",
    storageBucket: "finalwebdev.appspot.com",
    messagingSenderId: "992220913491",
    appId: "1:992220913491:web:ebbf453d3573f5833a4ba6"
  };


const firebase = initializeApp(firebaseConfig);
console.log("The database has been initalized!")
const database = getFirestore(firebase);
const auth = getAuth(firebase)

//Here we print the connection to the database
console.log(database);
console.log(auth);





