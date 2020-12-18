import axios from "axios";
import { LOADING_UI, POST_BLOG, CLEAR_ERRORS, SET_ERRORS, STOP_LOADING_UI,
  // DELETE_BLOG,
  LOADING_DATA,
   GET_ALL_BLOG, GET_BLOG} from "../Types";

export const postBlog = (newBlog) =>(dispatch) => {
    dispatch({ type: LOADING_UI});
    axios
    .post('/postBlog', newBlog)
    .then((res) =>{     
      dispatch({
        type:POST_BLOG,
        payload:res.data
      });
      dispatch({ type: CLEAR_ERRORS })
    })
    .catch((err) =>{
      // dispatch({
      //   type: SET_ERRORS,
      //   payload: err.response.data
      // })
      console.log(err)
    })
  }

  export const getAllBlog = () => (dispatch) => {
    dispatch({ type: LOADING_DATA });
    axios
      .get('/getAllBlog')
      .then((res) => {

        dispatch({
          type: GET_ALL_BLOG,
          payload: res.data
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_ALL_BLOG,
          payload: []
        });
      });
  };
  export const getBlog = ( blogId ) => (dispatch) => {
    dispatch({ type: LOADING_UI});
    axios
    .get(`/getBlog/${blogId}`)
    .then((res) =>{
      dispatch({
        type: GET_BLOG,
        payload:res.data
      });
      dispatch({ type : STOP_LOADING_UI})
    })
    .catch((err) => console.log(err));
 
  }

    // export const deleteTimeline = (blogId) => (dispatch) =>{
    //   axios
    //   .delete(`/getBlog/${blogId}/delete`)
    //   .then((res) =>{
    //     dispatch({ 
    //       type: DELETE_BLOG, 
    //       payload: res.data.message })
    //   })
    //   .catch((err) => console.log(err))
    // }
//   export const postImage = (formData) => (dispatch) => {
//     dispatch({ type: LOADING_UI})
//     axios
//     .post('/create-pdf/resumeImage', formData)
//     .then((res) =>{
//       dispatch({
//         type:POST_IMAGE,
//         payload:res.data
//       });
//        dispatch({ type: CLEAR_ERRORS })
//     })
//     .catch((err) =>{
//       dispatch({
//         type: SET_ERRORS,
//         payload: err.response.data
//       })
//     })
//   }