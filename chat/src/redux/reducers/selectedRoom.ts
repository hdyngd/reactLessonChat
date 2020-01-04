import { SET_SELECTED_ROOM } from "../actionTypes";

const initialState = "";

type Action = {
  type: string;
  payload: { id: string };
};

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
