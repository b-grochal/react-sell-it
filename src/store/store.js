import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import {
  advertCreateReducer,
  advertDeleteReducer,
  advertDetailsReducer,
  advertListReducer,
  advertUpdateReducer,
} from "../reducers/advertReducers";
import { snackbarReducer } from "../reducers/snackbarReducer";
import { userSignUpReducer, userSignInReducer } from "../reducers/userReducers";

const initialState = {
  userSignIn: {
    userToken: localStorage.getItem("userToken"),
  },
  snackbar: {
    snackbarOpen: false,
    snackbarType: "success",
    snackbarMessage: "",
  },
};

const reducer = combineReducers({
  advertCreate: advertCreateReducer,
  advertDelete: advertDeleteReducer,
  advertDetails: advertDetailsReducer,
  advertList: advertListReducer,
  advertUpdate: advertUpdateReducer,
  userSignUp: userSignUpReducer,
  userSignIn: userSignInReducer,
  snackbar: snackbarReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
