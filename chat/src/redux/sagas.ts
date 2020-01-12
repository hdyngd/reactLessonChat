import { call, put, takeEvery, take } from "redux-saga/effects";
import * as api from "../api";
import {
  FETCH_MESSAGES,
  FETCH_ROOMS,
  ADD_EVENT_LISTENER_ROOMS,
  ADD_ROOM,
  ADD_EVENT_LISTENER_MESSAGES,
  ADD_MESSAGE
} from "./actionTypes";
import {
  fetchMessages as fetchMessagesAction,
  setMessages,
  setRooms,
  addRoom as addRoomAction,
  addMessage as addMessageAction,
  addEventListenerMessages as addEventListenerMessagesAction
} from "./actions";

function* fetchMessages(action: ReturnType<typeof fetchMessagesAction>) {
  try {
    const messages: {
      userName: string;
      message: string;
    }[] = yield call(api.fetchMessages, action.payload.roomId);
    yield put(setMessages(messages));
  } catch (e) {
    console.error(e);
  }
}

function* fetchRooms() {
  try {
    const rooms: {
      id: string;
      roomName: string;
    }[] = yield call(api.fetchRooms);
    yield put(setRooms(rooms));
  } catch (e) {
    console.error(e);
  }
}

function* addEventListenerRooms() {
  const channel = yield call(api.addEventListenerRooms);
  try {
    while (true) {
      const rooms = yield take(channel);
      yield put(setRooms(rooms));
    }
  } catch (e) {
    console.error(e);
  }
}

function* addRoom(action: ReturnType<typeof addRoomAction>) {
  try {
    yield call(api.addRoom, action.payload.roomName);
  } catch (e) {
    console.error(e);
  }
}

function* addEventListenerMessages(
  action: ReturnType<typeof addEventListenerMessagesAction>
) {
  const channel = yield call(
    api.addEventListenerMessages,
    action.payload.roomId
  );
  try {
    while (true) {
      const messages = yield take(channel);
      yield put(setMessages(messages));
    }
  } catch (e) {
    console.error(e);
  }
}

function* addMessage(action: ReturnType<typeof addMessageAction>) {
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
  yield takeEvery(FETCH_MESSAGES, fetchMessages);
  yield takeEvery(FETCH_ROOMS, fetchRooms);
  yield takeEvery(ADD_EVENT_LISTENER_ROOMS, addEventListenerRooms);
  yield takeEvery(ADD_ROOM, addRoom);
  yield takeEvery(ADD_EVENT_LISTENER_MESSAGES, addEventListenerMessages);
  yield takeEvery(ADD_MESSAGE, addMessage);
}

export default mySaga;
