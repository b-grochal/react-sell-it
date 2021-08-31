import {
  REQUEST_CONFIRMATION,
  CONFIRM_ACTION,
  CANCEL_ACTION,
} from "../constants/confirmationDialogConstants";

const confirmationDialogReducer = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_CONFIRMATION:
      const { dialogOpen, dialogTitle, dialogMessage, dialogAction } =
        action.payload;
      return {
        dialogOpen,
        dialogTitle,
        dialogMessage,
        dialogAction,
      };
    case CONFIRM_ACTION:
    case CANCEL_ACTION:
      return { dialogOpen: false };
    default:
      return state;
  }
};

export default confirmationDialogReducer;
