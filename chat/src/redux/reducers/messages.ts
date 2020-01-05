import { SET_MESSAGES } from "../actionTypes";

const initialState: {
  userName: string;
  message: string;
}[] = [];

type Action = {
  type: string;
  payload: {
    messages: {
      userName: string;
      message: string;
    }[];
  };
};
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
