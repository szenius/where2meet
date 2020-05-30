export const SET_MAP = "SET_MAP";
export const setMap = (map) => ({ type: SET_MAP, data: map });

export const SET_SOURCE = "SET_SOURCE";
export const setSource = (index, lat, lng, label) => ({
  type: SET_SOURCE,
  data: {index, lat, lng, label}
});
