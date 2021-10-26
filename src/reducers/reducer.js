import { SET_LOCATION } from "../actions/types";
import produce from "immer";

const initialState = { location: {} };

const reducer = produce((state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_LOCATION:
      state.location = payload;
      break;
    default:
      break;
  }
}, initialState);

export default reducer;
