import { SET_USER_NAME } from "../actionTypes";

const initialState = "Guest";

type Action = {
  type: string;
  payload: { userName: string };
};

const userName = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_USER_NAME: {
      return action.payload.userName;
    }
    default: {
      return state;
    }
  }
};

export default userName;
