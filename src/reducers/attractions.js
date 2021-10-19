import {RETRIEVE_ATTRACTIONS} from "../actions/types";

const initialState = [];

function attractionsReducer(attractionss = initialState, action) {
  const { type, payload } = action;

  switch (type) {

    case RETRIEVE_ATTRACTIONS:
      return payload;

    default:
      return attractionss;
  }
};

export default attractionsReducer;