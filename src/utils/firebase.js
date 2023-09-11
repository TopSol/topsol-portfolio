import firebase from "firebase/app";
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const credentials = {
    apiKey: "AIzaSyCBooj9f_C-MEv29nfxX61qIjHV4jJIO4A",
    authDomain: "topsol-portfolio.firebaseapp.com",
    projectId: "topsol-portfolio",
    storageBucket: "topsol-portfolio.appspot.com",
    messagingSenderId: "479303982267",
    appId: "1:479303982267:web:d4b53d0ee7f8fd4fe91d9e",
    measurementId: "G-EEYTE2FD1W",
};

let app;
if (!firebase?.apps) {
    app = initializeApp(credentials);
}

const db = getFirestore(app);
const storage = getStorage(app);

export { db,storage };
