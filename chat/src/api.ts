import "firebase/firestore";
import db from "./firebaseInit";
import { eventChannel } from "redux-saga";

export function fetchRooms() {
  return db
    .collection("rooms")
    .get()
    .then(querySnapShot => {
      let rooms: { id: string; roomName: string }[] = [];
      querySnapShot.forEach(doc => {
        rooms.push({
          id: doc.id,
          roomName: doc.data().name
        });
      });
      return rooms;
    });
}

export function addRoom(name: string) {
  db.collection("rooms").add({
    name: name
  });
}

export function addMessage(roomId: string, userName: string, message: string) {
  db.collection("rooms")
    .doc(roomId)
    .collection("messages")
    .add({
      userName: userName,
      message: message
    });
}

export function addEventListenerRooms() {
  return eventChannel(emitter => {
    db.collection("rooms").onSnapshot(querySnapShot => {
      let rooms: { id: string; roomName: string }[] = [];
      querySnapShot.forEach(doc => {
        rooms.push({
          id: doc.id,
          roomName: doc.data().name
        });
      });
      emitter(rooms);
    });

    return () => {
      console.log("unsubscribe");
    };
  });
}

export function addEventListenerMessages(roomId: string) {
  return eventChannel(emitter => {
    db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .onSnapshot(querySnapShot => {
        let messages: { userName: string; message: string }[] = [];
        querySnapShot.forEach(doc => {
          messages.push({
            userName: doc.data().userName,
            message: doc.data().message
          });
        });
        emitter(messages);
      });

    return () => {
      console.log("unsubscribe");
    };
  });
}

export function fetchMessages(roomId: string) {
  return db
    .collection("rooms")
    .doc(roomId)
    .collection("messages")
    .get()
    .then(querySnapShot => {
      let messages: { userName: string; message: string }[] = [];
      querySnapShot.forEach(doc => {
        messages.push({
          userName: doc.data().userName,
          message: doc.data().message
        });
      });

      return messages;
    });
}
