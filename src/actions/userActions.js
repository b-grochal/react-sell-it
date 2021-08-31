import Axios from "axios";
import {
  USER_SIGNUP_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_LOGOUT,
} from "../constants/userConstants";
import { setSnackbar } from "./snackbarActions";
import { signUp, signIn } from "../services/users";

export const signUpAction =
  (firstName, familyName, phoneNumber, email, password, confirmPassword) =>
  async (dispatch) => {
    dispatch({
      type: USER_SIGNUP_REQUEST,
      payload: {
        firstName,
        familyName,
        phoneNumber,
        email,
        password,
        confirmPassword,
      },
    });
    try {
      const { data } = await signUp(
        firstName,
        familyName,
        phoneNumber,
        email,
        password,
        confirmPassword
      );
      dispatch({ type: USER_SIGNUP_SUCCESS, payload: data.message });
      dispatch(setSnackbar(true, "success", "You have signed up successfully"));
    } catch (error) {
      dispatch({
        type: USER_SIGNUP_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      dispatch(setSnackbar(true, "error", "An error has occurred"));
    }
  };

export const signInAction = (email, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
  try {
    const { data } = await signIn(email, password);
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data.token });
    localStorage.setItem("userToken", data.token);
  } catch (error) {
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    dispatch(setSnackbar(true, "error", "An error has occurred"));
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("userToken");
  dispatch({ type: USER_LOGOUT });
};
