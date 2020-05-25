export const SET_MAP_SERVICES = "SET_MAP_SERVICES";
export const setMapServices = (services) => ({
  type: SET_MAP_SERVICES,
  data: services,
});

export const SET_MAP = "SET_MAP";
export const setMap = (map) => ({ type: SET_MAP, data: map });
