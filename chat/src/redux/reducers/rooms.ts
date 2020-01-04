import { ADD_ROOM } from "../actionTypes";

const initialState: { id: string; name: string }[] = [];

type Action = {
  type: string;
  payload: { id: string; roomName: string };
};
const rooms = (state = initialState, action: Action) => {
  switch (action.type) {
    case ADD_ROOM: {
      return [
        ...state,
        { id: action.payload.id, name: action.payload.roomName }
      ];
    }
    default: {
      return state;
    }
  }
};

export default rooms;
