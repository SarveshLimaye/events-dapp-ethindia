import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC-cZEulHwHgxvKHQ5FX68phjugkFlqrvI",
  authDomain: "events-dapp-7e36c.firebaseapp.com",
  projectId: "events-dapp-7e36c",
  storageBucket: "events-dapp-7e36c.appspot.com",
  messagingSenderId: "330362605482",
  appId: "1:330362605482:web:ef10a3dc4799d493a2a5d3",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { firestore, storage, app };
