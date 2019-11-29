import axios from 'axios';
import { API_URL, API_KEY } from '../constants';

export const fetchData = async (searchText, amount) => {
  try {
    const res = await axios.get(`${API_URL}?key=${API_KEY}&q=${searchText}&image_type=photo&per_page=${amount}&safesearch=true`);
    const images = res.data.hits;
    return images;
  }
  catch (err) {
    throw err;
  }
}