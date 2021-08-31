import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import React from "react";

const ConfirmationDialog = () => {
  return (
    <Dialog>
      <DialogTitle>Hello</DialogTitle>
      <DialogContent>Hello there</DialogContent>
      <DialogActions>
        <Button>Yes</Button>
        <Button>No</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationDialog;
