import { Dispatch } from "redux";
import * as types from "./types";
export const addAlert = (id:string, type: string, message: string) => (dispatch: Dispatch<any>) => {
  dispatch({
    type: types.ADD_ALERT,
    payload: {
      id,
      message,
      type
    }
  });
}

export const removeAlert = (uid: string) => (dispatch: Dispatch<any>) => {
  dispatch({
    type: types.REMOVE_ALERT,
    payload: {
      id: uid
    }
  });
}