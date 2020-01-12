import { SET_MESSAGES } from "../actionTypes";
import { setMessages } from "../actions";

const initialState: {
  userName: string;
  message: string;
}[] = [];

type Action = ReturnType<typeof setMessages>;

const messages = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_MESSAGES: {
      return action.payload.messages;
    }
    default: {
      return state;
    }
  }
};

export default messages;
