import Axios from "axios";
import {
  ADVERT_CREATE_FAIL,
  ADVERT_CREATE_REQUEST,
  ADVERT_CREATE_SUCCESS,
  ADVERT_DETAILS_FAIL,
  ADVERT_DETAILS_REQUEST,
  ADVERT_DETAILS_SUCCESS,
  ADVERT_LIST_FAIL,
  ADVERT_LIST_REQUEST,
  ADVERT_LIST_SUCCESS,
  USER_ADVERT_LIST_FAIL,
  USER_ADVERT_LIST_REQUEST,
  USER_ADVERT_LIST_SUCCESS,
  ADVERT_UPDATE_REQUEST,
  ADVERT_UPDATE_SUCCESS,
  ADVERT_UPDATE_FAIL,
  ADVERT_DELETE_REQUEST,
  ADVERT_DELETE_FAIL,
  ADVERT_DELETE_SUCCESS,
} from "../constants/advertConstants";
import { setSnackbar } from "./snackbarActions";
import {
  getAdverts,
  getUserAdverts,
  getAdvertDetails,
  createAdvert,
} from "../services/adverts";

export const listAdvertsAction = () => async (dispatch) => {
  dispatch({
    type: ADVERT_LIST_REQUEST,
  });
  try {
    const { data } = await getAdverts();
    dispatch({ type: ADVERT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ADVERT_LIST_FAIL, payload: error.message });
  }
};

export const listUserAdvertsAction = () => async (dispatch, getState) => {
  dispatch({
    type: USER_ADVERT_LIST_REQUEST,
  });
  const {
    userSignIn: { userToken },
  } = getState();
  try {
    const { data } = await getUserAdverts(userToken);
    dispatch({ type: USER_ADVERT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: USER_ADVERT_LIST_FAIL, payload: error.message });
  }
};

export const detailsAdvertAction = (advertId) => async (dispatch) => {
  dispatch({ type: ADVERT_DETAILS_REQUEST, payload: advertId });
  try {
    const { data } = await getAdvertDetails(advertId);
    dispatch({ type: ADVERT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ADVERT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createAdvertAction = (advert) => async (dispatch, getState) => {
  dispatch({ type: ADVERT_CREATE_REQUEST });
  const {
    userSignIn: { userToken },
  } = getState();
  try {
    const { data } = await createAdvert(userToken, advert);
    dispatch({
      type: ADVERT_CREATE_SUCCESS,
      payload: data.product,
    });
    dispatch(setSnackbar(true, "success", "Advert created successfully"));
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ADVERT_CREATE_FAIL, payload: message });
    dispatch(setSnackbar(true, "error", "An error has occurred"));
  }
};

export const updateAdvert =
  (advertId, advertData) => async (dispatch, getState) => {
    dispatch({ type: ADVERT_UPDATE_REQUEST, payload: advertData });
    const {
      userSignIn: { userToken },
    } = getState();
    try {
      const { data } = await Axios.put(
        `http://localhost:5001/sell-it-747c3/us-central1/api/adverts/${advertId}`,
        advertData,
        {
          headers: { Authorization: `Bearer ${userToken}` },
        }
      );
      dispatch({ type: ADVERT_UPDATE_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: ADVERT_UPDATE_FAIL, error: message });
    }
  };

export const deleteAdvert = (advertId) => async (dispatch, getState) => {
  dispatch({ type: ADVERT_DELETE_REQUEST, payload: advertId });
  const {
    userSignIn: { userToken },
  } = getState();
  try {
    const { data } = Axios.delete(
      `http://localhost:5001/sell-it-747c3/us-central1/api/adverts/${advertId}`,
      {
        headers: { Authorization: `Bearer ${userToken}` },
      }
    );
    dispatch({ type: ADVERT_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ADVERT_DELETE_FAIL, payload: message });
  }
};
