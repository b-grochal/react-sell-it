import {
  ADVERT_LIST_REQUEST,
  ADVERT_LIST_SUCCESS,
  ADVERT_LIST_FAIL,
  ADVERT_DETAILS_REQUEST,
  ADVERT_DETAILS_SUCCESS,
  ADVERT_DETAILS_FAIL,
  ADVERT_CREATE_REQUEST,
  ADVERT_CREATE_SUCCESS,
  ADVERT_CREATE_FAIL,
  ADVERT_CREATE_RESET,
  ADVERT_UPDATE_REQUEST,
  ADVERT_UPDATE_SUCCESS,
  ADVERT_UPDATE_FAIL,
  ADVERT_UPDATE_RESET,
  ADVERT_DELETE_REQUEST,
  ADVERT_DELETE_SUCCESS,
  ADVERT_DELETE_FAIL,
  ADVERT_DELETE_RESET,
} from "../constants/advertConstants";

export const advertListReducer = (
  state = { loading: true, adverts: [] },
  action
) => {
  switch (action.type) {
    case ADVERT_LIST_REQUEST:
      return { loading: true };
    case ADVERT_LIST_SUCCESS:
      console.log(action);
      return {
        loading: false,
        adverts: action.payload,
      };
    case ADVERT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const advertDetailsReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case ADVERT_DETAILS_REQUEST:
      return { loading: true };
    case ADVERT_DETAILS_SUCCESS:
      return { loading: false, advert: action.payload };
    case ADVERT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const advertCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ADVERT_CREATE_REQUEST:
      return { loading: true };
    case ADVERT_CREATE_SUCCESS:
      return { loading: false, success: true, advert: action.payload };
    case ADVERT_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case ADVERT_CREATE_RESET:
      return {};
    default:
      return state;
  }
};
export const advertUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case ADVERT_UPDATE_REQUEST:
      return { loading: true };
    case ADVERT_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case ADVERT_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case ADVERT_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};
export const advertDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case ADVERT_DELETE_REQUEST:
      return { loading: true };
    case ADVERT_DELETE_SUCCESS:
      return { loading: false, success: true };
    case ADVERT_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case ADVERT_DELETE_RESET:
      return {};
    default:
      return state;
  }
};
