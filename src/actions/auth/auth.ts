import * as types from "./types";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, updateProfile } from "firebase/auth"
import app from '../../firebase';
import { Dispatch } from "redux";
import { addAlert, removeAlert } from "../alerts/alerts";
import { uuidv4 } from "@firebase/util";

export const login = (email: string, password: string) => async (dispatch: Dispatch<any>) => {
  const auth = getAuth(app);
  dispatch({
    type: types.LOGIN_REQUEST
  })
  try {
    const authObj = await signInWithEmailAndPassword(auth, email, password);
    console.log(authObj.user);
    dispatch({
      type: types.LOGIN_SUCCESS,
      payload: {
        user: authObj.user
      }
    });
    const alertId = uuidv4();
    dispatch(addAlert(alertId, "success", "Login successful"));
    setTimeout(()=>{
      dispatch(removeAlert(alertId));
    }, 10000);
  } catch (error: any) {
    console.error(error.message);
    dispatch({
      type: types.LOGIN_FAIL,
      payload: {
        error: error.message
      }
    });
    const alertId = uuidv4();
    dispatch(addAlert(alertId, "error", error.message));
    setTimeout(()=>{
      dispatch(removeAlert(alertId));
    }, 10000);
  }
}

export const register = (email: string, password: string, firstname: string, lastname: string) => async (dispatch: Dispatch<any>) => {
  const auth = getAuth(app);
  dispatch({
    type: types.SIGNUP_REQUEST
  })
  try {
    const authObj = await createUserWithEmailAndPassword(auth, email, password);
    console.log(authObj);
    await updateProfile(auth.currentUser!, {
      displayName: `${firstname} ${lastname}`
    })
    dispatch({
      type: types.SIGNUP_SUCCESS,
      payload: {
        user: auth.currentUser
      }
    })
  } catch (error: any) {
    console.error(error.message);
    dispatch({
      type: types.LOGIN_FAIL,
      payload: {
        error: error.message
      }
    })
  }
}

export const googleLogin = () => async (dispatch: Dispatch<any>) => {
  const auth = getAuth(app);
  dispatch({
    type: types.LOGIN_REQUEST,
    payload: {
      provider: "google"
    }
  })
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    console.log(result.user);
    dispatch({
      type: types.LOGIN_SUCCESS,
      payload: {
        user: result.user,
        provider: "google"
      }
    })
  } catch (error: any) {
    console.error(error.message);
    dispatch({
      type: types.LOGIN_FAIL,
      payload: {
        error: error.message
      }
    })
  }
}

export const logout = () => async (dispatch: Dispatch<any>) => {
  const auth = getAuth(app);

  try {
    await auth.signOut();
    dispatch({
      type: types.LOGOUT
  })
  } catch (error: any) {
    console.error(error.message);
    dispatch({
      type: types.LOGOUT,
      payload: {
        error: error.message
      }
    })
  }
}