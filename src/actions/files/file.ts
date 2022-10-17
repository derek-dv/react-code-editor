import {
  addDoc,
  collection,
  DocumentData,
  getDocs,
  query,
} from "firebase/firestore";
import { uuidv4 } from "@firebase/util";
import { Dispatch } from "redux";
import { db } from "../../firebase";
import { FileDoc } from "../../pages/Home";
import * as types from "./type";
import { addAlert, removeAlert } from "../alerts/alerts";

export const save = (document: FileDoc) => async (dispatch: Dispatch<any>) => {
  const { author, favourite, name, raw, type } = document;
  dispatch({
    type: types.SAVE_REQUEST,
  });
  try {
    const docRef = await addDoc(collection(db, "files"), {
      author,
      favourite,
      name,
      type,
      raw,
    });
    console.log("Document written with ID: ", docRef.id);
    dispatch({
      type: types.SAVE_SUCCESS,
      payload: docRef,
    });
    const alertId = uuidv4();
    dispatch(addAlert(alertId, "success", "Files successfully saved"));
    setTimeout(()=>{
      dispatch(removeAlert(alertId));
    }, 10000);
  } catch (e: any) {
    console.error("Error adding document: ", e);
    dispatch({
      type: types.SAVE_FAIL,
      payload: {
        error: e.message,
      },
    });
    const alertId = uuidv4();
    dispatch(addAlert(alertId, "error", e.message));
    setTimeout(()=>{
      dispatch(removeAlert(alertId));
    }, 10000);
  }
};

export const getAll = () => async (dispatch: Dispatch<any>) => {
  dispatch({
    type: types.GETALL_REQUEST,
  });
  try {
    const fileRef = collection(db, "files");
    const q = query(fileRef);
    const snapshot = await getDocs(q);
    const data: DocumentData[] = [];
    snapshot.forEach((doc) => {
      data.push({
        id: doc.id,
        data: doc.data(),
      });
    });
    console.log(data);
    dispatch({
      type: types.GETALL_SUCCESS,
      payload: data,
    });
    const alertId = uuidv4();
    dispatch(addAlert(alertId, "info", "Files loaded"));
    setTimeout(()=>{
      dispatch(removeAlert(alertId));
    }, 10000);
  } catch (e: any) {
    console.error("Error adding document: ", e);
    dispatch({
      type: types.GETALL_FAIL,
      payload: {
        error: e.message,
      },
    });
    const alertId = uuidv4();
    dispatch(addAlert(alertId, "error", e.message));
    setTimeout(()=>{
      dispatch(removeAlert(alertId));
    }, 10000);
  }
};
