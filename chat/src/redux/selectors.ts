type Store = {
  createRoomDialogVisibility: boolean;
  changeNameDialogVisibility: boolean;
  userName: string;
  rooms: { id: string; name: string }[];
  selectedRoom: string;
  chatHistory: { chatId: string; userName: string; message: string }[];
};

export const getCreateRoomDialogVisibility = (store: Store) =>
  store.createRoomDialogVisibility;
export const getChangeNameDialogVisibility = (store: Store) =>
  store.changeNameDialogVisibility;
export const getUserName = (store: Store) => {
  return store.userName;
};
export const getRooms = (store: Store) => {
  return store.rooms || [];
};
export const getSelectedRoom = (store: Store) => {
  return store.selectedRoom;
};
export const getChatHistory = (store: Store) => {
  let history: { chatId: string; userName: string; message: string }[] = [];
  for (const index in store.chatHistory) {
    if (store.chatHistory[index].chatId === getSelectedRoom(store)) {
      history.push(store.chatHistory[index]);
    }
  }
  return history;
};
