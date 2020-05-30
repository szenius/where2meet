import React, { createContext, useReducer } from "react";
import { mapReducer } from "./mapContext.reducer";

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

export const MapContext = createContext(initialState);

export const MapContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mapReducer, initialState);

  return (
    <MapContext.Provider value={{ state, dispatch }}>
      {children}
    </MapContext.Provider>
  );
};
