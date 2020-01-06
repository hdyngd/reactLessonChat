import { SET_USER_NAME } from "../actionTypes";
import { setUserName } from "../actions";

const initialState = "Guest";

type Action = ReturnType<typeof setUserName>;

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
