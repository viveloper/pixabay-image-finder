import { all, call } from 'redux-saga/effects';
import imagesSaga from './images';

function* rootSaga() {
  yield all([call(imagesSaga)]);
}

export default rootSaga;