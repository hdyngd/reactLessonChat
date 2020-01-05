import { SET_ROOMS } from "../actionTypes";

const initialState: { id: string; name: string }[] = [];

type Action = {
  type: string;
  payload: { rooms: { id: string; roomName: string }[] };
};
const rooms = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_ROOMS: {
      return action.payload.rooms;
    }
    default: {
      return state;
    }
  }
};

export default rooms;
