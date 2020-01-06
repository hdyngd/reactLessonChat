import { SET_CREATE_ROOM_DIALOG_VISIBILITY } from "../actionTypes";
import { setCreateRoomDialogVisibility } from "../actions";

const initialState = false;

type Action = ReturnType<typeof setCreateRoomDialogVisibility>;

const createRoomDialogVisibility = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_CREATE_ROOM_DIALOG_VISIBILITY: {
      return action.payload.visibility;
    }
    default: {
      return state;
    }
  }
};

export default createRoomDialogVisibility;
