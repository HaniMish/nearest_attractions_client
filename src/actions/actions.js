import {SET_LOCATION} from "./types";

export function setLocation(location) {
  return {type:SET_LOCATION,payload:location}
}