import { takeLatest, put, call } from 'redux-saga/effects';
import { FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from '../constants';
import { fetchData as fetchDataAPI } from '../api';

// worker saga
function* fetchData(action) {
  const { searchText, amount } = action;
  try {
    if (searchText !== '') {
      const images = yield call(fetchDataAPI, searchText, amount);
      yield put({
        type: FETCH_DATA_SUCCESS,
        images
      });
    }
    else {
      yield put({
        type: FETCH_DATA_SUCCESS,
        images: []
      });
    }
  }
  catch (err) {
    console.log(err);
    put({
      type: FETCH_DATA_FAILURE
    })
  }
}

// watcher saga
function* images() {
  yield takeLatest(FETCH_DATA, fetchData);
}

export default images;