import {
  SET_CREATE_ROOM_DIALOG_VISIBILITY,
  SET_CHANGE_NAME_DIALOG_VISIBILITY,
  SET_USER_NAME,
  ADD_ROOM,
  SET_SELECTED_ROOM,
  ADD_MESSAGE,
  FETCH_MESSAGES,
  FETCH_ROOMS,
  ADD_EVENT_LISTENER_ROOMS,
  ADD_EVENT_LISTENER_MESSAGES
} from "./actionTypes";

export const setCreateRoomDialogVisibility = (visibility: boolean) => ({
  type: SET_CREATE_ROOM_DIALOG_VISIBILITY,
  payload: {
    visibility
  }
});
export const setChangeNameDialogVisibility = (visibility: boolean) => ({
  type: SET_CHANGE_NAME_DIALOG_VISIBILITY,
  payload: {
    visibility
  }
});
export const setUserName = (userName: string) => ({
  type: SET_USER_NAME,
  payload: {
    userName
  }
});
export const addRoom = (roomName: string) => ({
  type: ADD_ROOM,
  payload: {
    roomName
  }
});
export const setSelectedRoom = (id: string) => ({
  type: SET_SELECTED_ROOM,
  payload: {
    id
  }
});
export const addMessage = (
  chatId: string,
  userName: string,
  message: string
) => ({
  type: ADD_MESSAGE,
  payload: {
    chatId,
    userName,
    message
  }
});
export const fetchMessages = (roomId: string) => ({
  type: FETCH_MESSAGES,
  payload: {
    roomId
  }
});
export const fetchRooms = () => ({
  type: FETCH_ROOMS
});
export const addEventListenerRooms = () => ({
  type: ADD_EVENT_LISTENER_ROOMS
});
export const addEventListenerMessages = (roomId: string) => ({
  type: ADD_EVENT_LISTENER_MESSAGES,
  payload: {
    roomId
  }
});
