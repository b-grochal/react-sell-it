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
  ADVERT_UPDATE_REQUEST,
  ADVERT_UPDATE_SUCCESS,
  ADVERT_UPDATE_FAIL,
  ADVERT_DELETE_REQUEST,
  ADVERT_DELETE_FAIL,
  ADVERT_DELETE_SUCCESS,
} from "../constants/advertConstants";

export const listAdverts =
  ({ name = "" }) =>
  async (dispatch) => {
    dispatch({
      type: ADVERT_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(`/api/products?&name=${name}`);
      dispatch({ type: ADVERT_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: ADVERT_LIST_FAIL, payload: error.message });
    }
  };

export const detailsAdvert = (advertId) => async (dispatch) => {
  dispatch({ type: ADVERT_DETAILS_REQUEST, payload: advertId });
  try {
    const { data } = await Axios.get(`/api/products/${advertId}`);
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

export const createAdvert = () => async (dispatch, getState) => {
  dispatch({ type: ADVERT_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      "/api/products",
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type: ADVERT_CREATE_SUCCESS,
      payload: data.product,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ADVERT_CREATE_FAIL, payload: message });
  }
};

export const updateAdvert = (advert) => async (dispatch, getState) => {
  dispatch({ type: ADVERT_UPDATE_REQUEST, payload: product });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/products/${advert._id}`, advert, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
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
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = Axios.delete(`/api/products/${advertId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: ADVERT_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ADVERT_DELETE_FAIL, payload: message });
  }
};
