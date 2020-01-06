import { RootState } from './reducers';

export const getCreateRoomDialogVisibility = (store: RootState) =>
  store.createRoomDialogVisibility;
export const getChangeNameDialogVisibility = (store: RootState) =>
  store.changeNameDialogVisibility;
export const getUserName = (store: RootState) => {
  return store.userName;
};
export const getRooms = (store: RootState) => {
  return store.rooms || [];
};
export const getSelectedRoom = (store: RootState) => {
  return store.selectedRoom;
};
export const getChatHistory = (store: RootState & {
  chatHistory: {
    chatId: string;
    userName: string;
    message: string
  }[];
}) => {
  let history: { chatId: string; userName: string; message: string }[] = [];
  for (const index in store.chatHistory) {
    if (store.chatHistory[index].chatId === getSelectedRoom(store)) {
      history.push(store.chatHistory[index]);
    }
  }
  return history;
};
