import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDUwZLz-W_Zy_8_pIWRbhei7N2j1lxHT_w",
  authDomain: "react-blog-d2678.firebaseapp.com",
  projectId: "react-blog-d2678",
  storageBucket: "react-blog-d2678.appspot.com",
  messagingSenderId: "657803297878",
  appId: "1:657803297878:web:76f0c7b668c345902f27f7",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db}
