import * as Constants from '../Constants'


const initialState = {
    loading: false,
    error:null,
    usersResults:[]
}

export const reducer = (state= initialState, action) => {
    switch(action.type){
      case Constants.USERS_LOADING:
      return{
          ...state,
          loading: true
      }
      case Constants.USERS_LOADING_SUCCESS:
      return{
          ...state,
          usersResults: action.results

      }
      case Constants.USERS_LOADING_ERROR:
      return{
          ...state,
          loading:false,
          error: action.error
      }
      default:
      return state;
    }
}

export default reducer;