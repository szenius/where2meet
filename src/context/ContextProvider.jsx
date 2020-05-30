import React, { createContext, useReducer } from "react";
import { SET_MAP, SET_SOURCE } from "./actions";

const initialState = {
  center: {
    lat: 1.39849,
    lng: 103.907921,
  },
  zoom: 11,
  isMapsLoaded: false,
  map: null,
  maps: null,
  autocomplete: null,
  places: null,
  geocoder: null,
  direction: null,
  sources: [],
};

export const Context = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    const { type, data } = action;
    switch (type) {
      case SET_MAP:
        return { ...state, ...data };
      case SET_SOURCE:
        const { index, lat, lng, label } = data;
        state.sources.splice(index, 1, { lat, lng, label });
        return { ...state };
      default:
        return state;
    }
  }, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
