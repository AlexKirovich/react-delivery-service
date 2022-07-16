import React, { createContext, useReducer, useEffect, useState } from "react";
import AppReducer from "./AppReducer.jsx";

const initialState = JSON.parse(localStorage.getItem('initialState')) || { parcels: [] };
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {

  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("initialState", JSON.stringify(state));
  }, [state])

  const removeParcel = (id) => {
    dispatch({
      type: "REMOVE_PARCEL",
      payload: id,
    });
  };

  const addParcel = (parcel) => {
    dispatch({
      type: "ADD_PARCEL",
      payload: parcel,
    });
  };

  const editParcel = (parcel) => {
    dispatch({
      type: "EDIT_PARCEL",
      payload: parcel,
    });
  };

  return (
    <GlobalContext.Provider
      value={{ parcels: state.parcels, removeParcel, addParcel, editParcel }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
