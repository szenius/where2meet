import React, { createContext, useReducer } from "react";
import { SET_MAP_SERVICES, SET_MAP } from "./actions";

const initialState = {
  map: {
    center: {
      lat: 1.39849,
      lng: 103.907921,
    },
    zoom: 11,
    map: null,
  },
  services: {
    maps: null,
    autocomplete: null,
    places: null,
    geocoder: null,
    direction: null,
  },
};

export const Context = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case SET_MAP_SERVICES:
        return { ...state, services: action.data };
      case SET_MAP:
        return { ...state, map: { ...state.map, map: action.data } };
      default:
        return state;
    }
  }, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
