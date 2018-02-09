import {takeEvery} from 'redux-saga/effects'
import {usersSaga} from './usersSaga'
import * as Constants from '../Constants'

export function* watchUserSaga(){
    yield takeEvery(Constants.FETCH_USERS_INIT, usersSaga)
}