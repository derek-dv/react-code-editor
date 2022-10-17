import * as types from "../actions/alerts/types";
import { AlertState } from "../components/Alert";

interface AlertAction {
  type: string;
  payload: AlertState;
}

const initialState: AlertState[] = [
]

export default function(state: AlertState[] = initialState, action: AlertAction): AlertState[] {
  const { type, payload } = action;
  switch (type) {
    case types.ADD_ALERT:
      return [...state, {id: payload.id, message: payload.message, type: payload.type}];
    case types.REMOVE_ALERT:
      return state.filter((st)=> st.id !== payload.id);
    default:
      return state;
  }
}