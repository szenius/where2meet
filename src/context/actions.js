export const SET_MAP = "SET_MAP";
export const setMap = (map) => ({ type: SET_MAP, data: map });

export const SET_SOURCE_COORDINATES = "SET_SOURCE_COORDINATES";
export const setSourceCoordinates = (coordinates) => ({
  type: SET_SOURCE_COORDINATES,
  data: coordinates,
});
