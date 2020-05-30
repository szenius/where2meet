import { SET_MAP, SET_SOURCE } from "./mapContext.actions";

export const mapReducer = (state, action) => {
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
};
