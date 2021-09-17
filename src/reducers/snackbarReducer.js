import { SET_SNACKBAR } from "../constants/snackbarConstants";

const snackbarReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_SNACKBAR:
      const { snackbarOpen, snackbarMessage, snackbarType } = action.payload;
      return {
        ...state,
        snackbarOpen,
        snackbarType,
        snackbarMessage,
      };
    default:
      return state;
  }
};

export default snackbarReducer;
