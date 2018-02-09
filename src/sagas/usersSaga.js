import {put} from 'redux-saga/effects'
import * as actions from '../actions/usersActions'

export function* usersSaga(action){
    try{
        let val = action.value;
        yield put(actions.usersLoading())
        let res = yield fetch(`https://api.github.com/search/users?q=${val}`)
        .then(response => response.json())
        .then(data => data)
        yield put(actions.usersLoadingSuccess(res))
    }
    catch(error){
        yield put(actions.usersLoadingError())
    }
}