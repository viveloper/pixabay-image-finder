import { FETCH_DATA } from "../constants"

export const fetchData = (searchText, amount) => {
  return {
    type: FETCH_DATA,
    searchText,
    amount
  }
}