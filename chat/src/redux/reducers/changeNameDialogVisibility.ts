import { SET_CHANGE_NAME_DIALOG_VISIBILITY } from "../actionTypes";

const initialState = false;

type Action = {
  type: string;
  payload: { visibility: boolean };
};

const changeNameDialogVisibility = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_CHANGE_NAME_DIALOG_VISIBILITY: {
      return action.payload.visibility;
    }
    default: {
      return state;
    }
  }
};

export default changeNameDialogVisibility;
