import {RETRIEVE_ATTRACTIONS} from "./types";
import AttractionsDataService from "../services/attractions.service";


export const retrieveAttractions = () => async (dispatch) => {
    try {
      const res = await AttractionsDataService.getAll();
  
      dispatch({
        type: RETRIEVE_ATTRACTIONS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };