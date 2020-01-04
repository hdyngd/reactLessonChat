import React from "react";

import PersistentDrawerLeft from "./components/PersistentDrawerLeft";
import ChangeNameFormDialog from "./components/ChangeNameFormDialog";
import CreateRoomFormDialog from "./components/CreateRoomFormDialog";
import StickyFooter from "./components/StickyFooter";

// import "firebase/firestore";
// import db from "./firebaseInit";

export default function ChatApp() {
  return (
    <div>
      <PersistentDrawerLeft />
      <ChangeNameFormDialog />
      <CreateRoomFormDialog />
      <StickyFooter />
    </div>
  );
}

// firebase.initializeApp(config);
// const db = firebase.firestore();

// db.collection("users")
//   .add({
//     first: "Adaaaaaaa",
//     last: "Lovelacesdfajflsaj",
//     born: 1815
//   })
//   .then(function(docRef) {
//     console.log("Document written with ID: ", docRef);
//   })
//   .catch(function(error) {
//     console.error("Error adding document: ", error);
//   });

// db.collection("users")
//   .get()
//   .then(querySnapshot => {
//     querySnapshot.forEach(doc => {
//       console.log(`${doc.id} => ${doc.data()}`);
//     });
//   });
// db.collection("users").onSnapshot(querySnapShot => {
//   querySnapShot.forEach(doc => {
//     console.log(doc.data());
//     console.log(
//       doc.data().first + ":" + doc.data().last + ":" + doc.data().born
//     );
//   });
// });
