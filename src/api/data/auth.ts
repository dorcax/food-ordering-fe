// define the empty auth

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "../type";
import { useAppDispatch, useAppSelector } from ".";
import { useMemo } from "react";

const emptyAuth: AuthState = {
  token: "",
};

//declare the initial state saved the token to localstorage
function initialState() {
  const saved = localStorage.getItem("token");
  return saved ? JSON.parse(saved) : emptyAuth;
}

//  declare the createSlice
export const auth = createSlice({
  name: "auth",
  initialState: initialState(),
  reducers: {
    setAuth: (_, { payload }: PayloadAction<AuthState>) => payload,
    clearAuth: () => emptyAuth,
  },
});

export const { setAuth, clearAuth } = auth.actions;

export const useAuthState = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);
  return useMemo(() => {
    const isLoggedIn = !!auth.token;
    const clear = () => dispatch(clearAuth());
    const set = (auth: AuthState) => dispatch(setAuth(auth));
    return [...auth, clear, set, isLoggedIn];
  }, [auth, dispatch]);
};


export const selectCurrentToken = (state: any) => state.auth.token;
