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

export const signUp =
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
      const { data } = await Axios.post(
        "http://localhost:5001/sell-it-747c3/us-central1/api/sign-up",
        {
          firstName,
          familyName,
          phoneNumber,
          email,
          password,
          confirmPassword,
        }
      );
      dispatch({ type: USER_SIGNUP_SUCCESS, payload: data.message });
    } catch (error) {
      dispatch({
        type: USER_SIGNUP_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const signIn = (email, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
  try {
    const { data } = await Axios.post(
      "http://localhost:5001/sell-it-747c3/us-central1/api/sign-in",
      { email, password }
    );
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
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("userToken");
  dispatch({ type: USER_LOGOUT });
  document.location.href = "/";
};
