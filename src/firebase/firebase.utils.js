import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDZ_l-GEqOpDfd8P-WkStM653DWPN9tMBo",
  authDomain: "crwn-db-d0ec0.firebaseapp.com",
  databaseURL: "https://crwn-db-d0ec0.firebaseio.com",
  projectId: "crwn-db-d0ec0",
  storageBucket: "",
  messagingSenderId: "274181425286",
  appId: "1:274181425286:web:d33763c4553ff80a"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signinWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
