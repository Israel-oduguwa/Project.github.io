import React, { Component } from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
// Pages
import LandingPage from "./StaticPages/LandingPage";
import Blog from "./StaticPages/Blog";
import CoverLetterTemplates from "./StaticPages/CoverLetterTemplates";
import About from "./StaticPages/About";
import signin from "./StaticPages/signin";
import jwtDecode from  "jwt-decode";
import Register from "./StaticPages/Register";
import ResumeBuilder from "./Dynamic Pages/ResumeBuilder";
import Admin from "./StaticPages/Admin";
import allBlogPost from "./StaticPages/allBlogPost";
import settings from "./StaticPages/setting";
import axios from 'axios'
import Profile from "./StaticPages/Profile"
import PostBlog from "./StaticPages/PostBlog";
import PostJob from "./StaticPages/PostJob";
import Ablog from "./StaticPages/Ablog";
// import axios from "axios";
import allJobPost from "./StaticPages/allJobPost";
import { SET_AUTHENTICATED } from './Redux/Types';
import { refreshIdToken, getUserData } from './Redux/Actions/userAction';
import { Provider } from 'react-redux'; 
import store from "./Redux/Store";
// React router
import { BrowserRouter as Router , Route , Switch } from "react-router-dom";

axios.defaults.baseURL = 'https://us-central1-resume-builder-startup.cloudfunctions.net/api';
const token = localStorage.FBIdToken;
const sessionToken = localStorage.refreshToken
if (token){
const decodedToken = jwtDecode(token);

if(decodedToken.exp * 1000 < Date.now()){
  store.dispatch(refreshIdToken(sessionToken))
  // window.location.href ='/signin';
}

else{
  store.dispatch({ type:SET_AUTHENTICATED});
  axios.defaults.headers.common['Authorization']= token; 
  store.dispatch(getUserData())
  
}
}
// theme
export const light = {
  palette: {
  type: 'light',
 main:{
  secondary:"#f7588c",
 }
  }
 
}

export const dark = {
  palette: {
  type: 'dark',
  },
}

class App extends Component {
  state ={
    theme:false,
  }
  getToken = () =>{
    store.dispatch(refreshIdToken())
  }
  handleTheme = () =>{
    if (this.state.theme === false) {
      this.setState({
        theme:true
      })
    } else {
      this.setState({
        theme:false
      })
    }
  }
  
  render() {
    return (
      <ThemeProvider theme={createMuiTheme(this.state.theme ? dark : light)}>
      <div>
       <Provider store={store}>
       <div className="App">
         <button onClick={this.getToken}>Get Token</button>
         <Router>
           <Switch>
             <Route exact path="/" component={LandingPage} />
             
             <Route exact path="/blog" component={Blog}/>
             <Route exact path="/coverletter-templates" component={CoverLetterTemplates}/>
             <Route exact path="/about-us" component={About}/>
             <Route exact path="/signin" component={signin}/>
             <Route exact path="/register" component={Register}/>
             <Route exact path ="/admin" component={Admin}/>
             <Route exact path="/resume" component={ResumeBuilder}/>
             <Route  path="/admin/job-post" component={allJobPost}/>
             <Route exact path="/admin/post-job" component={PostJob}/>
             <Route exact path="/:title/:blogId" component={Ablog}/>
             <Route  path="/admin/blog-post" component={allBlogPost}/>
             <Route exact  path="/post-blog" component={PostBlog}/>
             <Route  path="/admin/settings" component={settings}/>
             <Route  path="/admin/profile" component={Profile}/>
            
             
           </Switch>
         </Router>           
   </div>
       </Provider>
      </div>
      </ThemeProvider>
    )
  }
}

export default App
