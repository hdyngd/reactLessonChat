import { SET_SELECTED_ROOM } from "../actionTypes";
import { setSelectedRoom } from "../actions";

const initialState = "";

type Action = ReturnType<typeof setSelectedRoom>;

const selectedRoom = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_SELECTED_ROOM: {
      return action.payload.id;
    }
    default: {
      return state;
    }
  }
};

export default selectedRoom;
