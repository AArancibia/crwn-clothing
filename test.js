import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("ykebSMoStmBNBQrvOdEJ")
  .collection("cartItems")
  .doc("6IbGPUNFsGiPatSqQLCQ");

firestore.doc("/users/ykebSMoStmBNBQrvOdEJ/cartItems/6IbGPUNFsGiPatSqQLCQ");
firestore.collection("/users/ykebSMoStmBNBQrvOdEJ/cartItems/");
