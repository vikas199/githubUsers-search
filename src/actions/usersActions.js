import * as Constants from '../Constants'



export const usersLoading = () => {
    return {
        type: Constants.USERS_LOADING
    }
}

export const usersLoadingSuccess = (results) => {
    return {
        type: Constants.USERS_LOADING_SUCCESS,
        results:results
    }
}

export const usersLoadingError = () => {
    return{
        type: Constants.USERS_LOADING_ERROR
    }
}

/* export const moviesFetch = (value) => {
    console.log('value :::', value)
    return (dispatch) => {
        dispatch(movieLoading())
        const url = `https://api.themoviedb.org/3/search/movie?api_key=f3e9f7d1677c7aa63c9ab526381eeceb&language=en-US&query=${value}&page=1&include_adult=false`
        console.log(url);
        return fetch(url)
          .then(response => response.json())
            .then(data => {dispatch(movieLoadingSuccess(data))})
            .catch(error => {dispatch(movieLoadingError(error))}
    )}
} */

export const userFetch = (value) => {
    return{
        type: Constants.FETCH_USERS_INIT,
        value
        
    }
}