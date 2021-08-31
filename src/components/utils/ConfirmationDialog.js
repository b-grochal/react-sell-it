import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cancelAction,
  confirmAction,
} from "../../actions/confirmationDialogActions";

const ConfirmationDialog = () => {
  const dispatch = useDispatch();
  const confirmationDialog = useSelector((state) => state.confirmationDialog);
  const { dialogOpen, dialogTitle, dialogMessage, dialogAction } =
    confirmationDialog;

  const handleConfirmAction = () => {
    console.log("Confirm action");
    dispatch(confirmAction());
  };

  const handleCancelAction = () => {
    dispatch(cancelAction());
  };

  return (
    <Dialog open={dialogOpen} onClose={handleCancelAction}>
      <DialogTitle>{dialogTitle}</DialogTitle>
      <DialogContent>
        <DialogContentText>{dialogMessage}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleConfirmAction}>Yes</Button>
        <Button onClick={handleCancelAction}>No</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationDialog;
