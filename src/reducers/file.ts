import { FileDoc } from "../pages/Home";
import * as types from "../actions/files/type";
export interface FileState {
  loading: boolean;
  error: string | null;
  files: FileDoc[],
  message: string | null;
}

const initialState: FileState = {
  loading: false,
  error: null,
  message: null,
  files: []
}

export default function(state: FileState=initialState, action: any): FileState {
  const { type, payload } = action;
  switch (type) {
    case types.SAVE_REQUEST:
      return {
        ...state,
        loading: true,
      }
    
    case types.SAVE_SUCCESS:
      return {
        ...state,
        loading: false,
        message: "File saved successful"
      }
    case types.SAVE_FAIL:
      return {
        ...state,
        loading: false,
        error: payload.error
      }
    
    case types.GETALL_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case types.GETALL_FAIL:
      return {
        ...state,
        loading: false,
      }
    
    case types.GETALL_SUCCESS:
      return {
        ...state,
        loading: false,
        files: payload
      }
  
    default:
      return state;
  }
}