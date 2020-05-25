import React, { createContext, useReducer } from "react";
import { SET_MAP, SET_SOURCE_COORDINATES } from "./actions";

const initialState = {
  map: {
    center: {
      lat: 1.39849,
      lng: 103.907921,
    },
    zoom: 11,
    map: null,
    services: {
      maps: null,
      autocomplete: null,
      places: null,
      geocoder: null,
      direction: null,
    },
  },
  recommendations: {
    sourceCoordinates: [],
  },
};

export const Context = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case SET_MAP:
        return { ...state, map: { ...state.map, ...action.data } };
      case SET_SOURCE_COORDINATES:
        return {
          ...state,
          recommendations: {
            ...state.recommendations,
            sourceCoordinates: action.data,
          },
        };
      default:
        return state;
    }
  }, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
