import { FETCH_DATA_SUCCESS } from "../constants";

const initialState = [];

const images = (previousState = initialState, action) => {
  if (action.type === FETCH_DATA_SUCCESS) {
    return action.images;
  }
  else {
    return previousState;
  }
}

export default images;