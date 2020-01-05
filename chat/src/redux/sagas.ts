import { call, put, takeEvery, take } from "redux-saga/effects";
import * as api from "../api";

type fetchMessagesAction = {
  type: string;
  payload: { roomId: string };
};
function* fetchMessages(action: fetchMessagesAction) {
  try {
    const messages = yield call(api.fetchMessages, action.payload.roomId);
    yield put({ type: "SET_MESSAGES", payload: { messages: messages } });
  } catch (e) {
    console.error(e);
  }
}

function* fetchRooms() {
  try {
    const rooms = yield call(api.fetchRooms);
    yield put({ type: "SET_ROOMS", payload: { rooms: rooms } });
  } catch (e) {
    console.error(e);
  }
}

function* addEventListenerRooms() {
  const channel = yield call(api.addEventListenerRooms);
  try {
    while (true) {
      const rooms = yield take(channel);
      yield put({ type: "SET_ROOMS", payload: { rooms: rooms } });
    }
  } catch (e) {
    console.error(e);
  }
}

type addRoomAction = {
  type: string;
  payload: { roomName: string };
};
function* addRoom(action: addRoomAction) {
  try {
    yield call(api.addRoom, action.payload.roomName);
  } catch (e) {
    console.error(e);
  }
}
type AddEventListenerMessagesAction = {
  type: string;
  payload: { roomId: string };
};
function* addEventListenerMessages(action: AddEventListenerMessagesAction) {
  const channel = yield call(
    api.addEventListenerMessages,
    action.payload.roomId
  );
  try {
    while (true) {
      const messages = yield take(channel);
      yield put({ type: "SET_MESSAGES", payload: { messages: messages } });
    }
  } catch (e) {
    console.error(e);
  }
}

type addMessageAction = {
  type: string;
  payload: { chatId: string; userName: string; message: string };
};
function* addMessage(action: addMessageAction) {
  try {
    yield call(
      api.addMessage,
      action.payload.chatId,
      action.payload.userName,
      action.payload.message
    );
  } catch (e) {
    console.error(e);
  }
}

function* mySaga() {
  yield takeEvery("FETCH_MESSAGES", fetchMessages);
  yield takeEvery("FETCH_ROOMS", fetchRooms);
  yield takeEvery("ADD_EVENT_LISTENER_ROOMS", addEventListenerRooms);
  yield takeEvery("ADD_ROOM", addRoom);
  yield takeEvery("ADD_EVENT_LISTENER_MESSAGES", addEventListenerMessages);
  yield takeEvery("ADD_MESSAGE", addMessage);
}

export default mySaga;
