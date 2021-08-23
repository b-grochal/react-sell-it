import { SET_SNACKBAR } from "../constants/snackbarConstants";

export const setSnackbar = (
  snackbarOpen,
  snackbarType = "success",
  snackbarMessage = ""
) => ({
  type: SET_SNACKBAR,
  payload: {
    snackbarOpen,
    snackbarType,
    snackbarMessage,
  },
});
