import { combineReducers } from "redux";
import changeNameDialogVisibility from "./changeNameDialogVisibility";
import createRoomDialogVisibility from "./createRoomDialogVisibility";
import userName from "./userName";
import rooms from "./rooms";
import selectedRoom from "./selectedRoom";
import messages from "./messages";

export default combineReducers({
  changeNameDialogVisibility,
  createRoomDialogVisibility,
  userName,
  rooms,
  selectedRoom,
  messages
});
