import usersReducer from './usersReducer'
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
   usersReducer: usersReducer,
})

export default rootReducer;


