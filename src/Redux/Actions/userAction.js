import { SET_USER, LOADING_UI, LOADING_USER, CLEAR_ERRORS, SET_ERRORS } from "../Types";
import axios from "axios";

export const createUser = ( userData, history ) => (dispatch) =>{
    dispatch({type:LOADING_UI});
    axios
    .post('/createAccount', userData)
    .then((res) =>{
        setAuthorizationHeader(res.data.firstIdToken);
        storeSessionToken(res.data.refreshToken)
        dispatch(getUserData());
        dispatch({ type: CLEAR_ERRORS});
        history.push('/admin')
    })
    .catch((err) =>{
        dispatch({
         type: SET_ERRORS,
         payload: err.response.data
        })
     });
}

//This will fetch all the user INfo from the DataBase
export const getUserData = () => (dispatch) => {
    dispatch({ type: LOADING_USER})
     axios.get('/user')
     .then((res) =>{
         dispatch({
             type: SET_USER,
             payload: res.data
         })
     })
    .catch(err => console.log(err));
}
//This will refresh the acsess toekm
export const refreshIdToken = (sessionToken) => (dispatch) =>{
    axios.post(`https://securetoken.googleapis.com/v1/token?key=AIzaSyBoIyQqz_8yKUFxjJO7jqBZWEslC7je7U4`,
    {
        grant_type:"refresh_token",        
        refresh_token:sessionToken
    }
    )
    .then((res) =>{
        console.log(res.data.access_token)
        setAuthorizationHeader(res.data.access_token)
        dispatch(getUserData());
    })
    .catch((err) =>{
        console.log(err)
    })
}
//Set the Authorizationheader for the Jwt token and user permisssio

const setAuthorizationHeader = (token) => {
    const FBIdToken = `Bearer ${token}`;
    localStorage.setItem('FBIdToken', FBIdToken);
    axios.defaults.headers.common['Authorization'] = FBIdToken;
  };
const storeSessionToken = (sessionToken) =>{
    const refreshToken = sessionToken;
    localStorage.setItem('refreshToken', refreshToken)
}