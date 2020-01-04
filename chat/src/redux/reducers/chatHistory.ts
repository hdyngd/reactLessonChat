import { ADD_MESSAGE } from "../actionTypes";

const initialState: {
  chatId: string;
  userName: string;
  message: string;
}[] = [];

type Action = {
  type: string;
  payload: { chatId: string; userName: string; message: string };
};
const chatHistory = (state = initialState, action: Action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      return [
        ...state,
        {
          chatId: action.payload.chatId,
          userName: action.payload.userName,
          message: action.payload.message
        }
      ];
    }
    default: {
      return state;
    }
  }
};

export default chatHistory;
