import {
    GET_ALL_BLOG,
    // LIKE_TIMELINE,
    // UNLIKE_TIMELINE,
    LOADING_DATA,
    POST_BLOG,    
    // DELETE_BLOG
    // SUBMIT_COMMENT,
    GET_BLOG
  } from '../Types';
  
  const initialState = {  
      blogs:[],
    blog:{},
    deleteMessage:{},
      loading: false
  };
  export default function(state = initialState, action) {
    switch (action.type) {
      case LOADING_DATA:
        return {
          ...state,
          loading: true
        };
      case GET_ALL_BLOG:
        return {
          ...state,
          blogs: action.payload,
          loading: false
        };
      case GET_BLOG:
        return {
          ...state,
          blog: action.payload
        };
    //   case POST_IMAGE:
    //     return {
    //       ...state,
    //       postImage: action.payload
    //     };
//         case LIKE_TIMELINE:
//         case UNLIKE_TIMELINE:
//           let index = state.timelines.findIndex(
//             (timeline) => timeline.timelineId === action.payload.timelineId
//           );
//           state.timelines[index] = action.payload;
//           if (state.timeline.timelineId === action.payload.timelineId) {
//             let temp = state.timeline.comments;
//             state.timeline = action.payload;
//             state.timeline.comments = temp
//           }
//       return {
//         ...state
//       };
  //   case DELETE_TIMELINE:
  //     return {
  //       ...state,
  //       blogs: state.timelines.filter((timeline) => timeline.timelineId !== action.payload )
  //  };
    case POST_BLOG:
      return {
        ...state,
        blogs: [action.payload, 
          ...state.blogs]
      };
    // case SUBMIT_COMMENT:
    //   return {
    //     ...state,
    //     timeline: {
    //       ...state.timeline,
    //       comments: [action.payload, ...state.timeline.comments],
    //       commentCount:state.timeline.commentCount+1
    //     }
    //   };
    default:
      return state;
  }
}
