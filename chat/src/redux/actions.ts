import {
  SET_CREATE_ROOM_DIALOG_VISIBILITY,
  SET_CHANGE_NAME_DIALOG_VISIBILITY,
  SET_USER_NAME,
  ADD_ROOM,
  SET_SELECTED_ROOM,
  ADD_MESSAGE
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
    id: getUniqueStr(),
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

/**
 * chatRoomのuniqueなidを生成するヘルパー関数
 */
function getUniqueStr(): string {
  let strong = 1000;
  return (
    "chatId_" +
    new Date().getTime().toString(16) +
    Math.floor(strong * Math.random()).toString(16)
  );
}
