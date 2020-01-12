import { SET_CHANGE_NAME_DIALOG_VISIBILITY } from "../actionTypes";
import { setChangeNameDialogVisibility } from "../actions";

const initialState = false;

type Action = ReturnType<typeof setChangeNameDialogVisibility>;

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
