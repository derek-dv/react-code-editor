/* eslint-disable import/no-anonymous-default-export */
import { User } from "firebase/auth";
import * as allAuth from "../actions/auth/types";

export interface AuthState {
  user?: Userw | null;
  isAuthenticated?: boolean | null;
  loading?: boolean;
  googleLoading?: boolean;
  error?: string | null;
  registerMessage?: string | null;
}

const temp = localStorage.getItem("user");
const initialState: AuthState = {
  user: temp !== null ? JSON.parse(temp) : null,
  isAuthenticated: temp !== null ? true : false,
  loading: false,
  googleLoading: false,
  registerMessage: null
};

export default function (state: AuthState = initialState, action: any): AuthState {
  const { type, payload } = action;

  switch (type) {
    case allAuth.LOGIN_REQUEST:
      return {
        ...state,
        loading: payload?.provider === "google" ? false : true,
        isAuthenticated: false,
        googleLoading: payload?.provider === "google" ? true : false,
        user: null
      }
    case allAuth.LOGIN_SUCCESS:
      localStorage.setItem("user", JSON.stringify(payload.user));
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload.user,
        error: null,
        googleLoading: false
      };

    case allAuth.LOGIN_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        error: payload.error,
        googleLoading: false
      }

    case allAuth.SIGNUP_REQUEST:
      return {
        ...state,
        isAuthenticated: false,
        loading: true,
        user: null
      };
    
    case allAuth.SIGNUP_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        error: null,
        registerMessage: "Registration successful, you can now login."
      }

    case allAuth.LOGIN_FAIL:
    case allAuth.SIGNUP_FAIL:
      return {
        user: null,
        error: payload.error,
        isAuthenticated: false,
        loading: false
      }
    case allAuth.LOGOUT:
      localStorage.removeItem("user");
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        user: null
      };
    default:
      return state;
  }
}
