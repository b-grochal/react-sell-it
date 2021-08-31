import {
  REQUEST_CONFIRMATION,
  CONFIRM_ACTION,
  CANCEL_ACTION,
} from "../constants/confirmationDialogConstants";

export const requestConfirmation = (
  dialogOpen,
  dialogTitle,
  dialogMessage,
  dialogAction
) => ({
  type: REQUEST_CONFIRMATION,
  payload: {
    dialogOpen,
    dialogTitle,
    dialogMessage,
    dialogAction,
  },
});

export const cancelAction = () => ({
  type: CANCEL_ACTION,
});

export const confirmAction = () => (dispatch, getState) => {
  // const { dialogAction } = getState().confirmationDialog;
  // console.log(dialogAction);
  dispatch({ type: CONFIRM_ACTION });
  // // dialogAction();
};
