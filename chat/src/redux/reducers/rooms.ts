import { SET_ROOMS } from "../actionTypes";
import { setRooms } from "./../actions";

const initialState: { id: string; name: string }[] = [];

type Action = ReturnType<typeof setRooms>;

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
