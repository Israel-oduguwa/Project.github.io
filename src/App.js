import React, { Component } from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
// Pages
import LandingPage from "./StaticPages/LandingPage";
import ResumeTemplates from "./StaticPages/ResumeTemplates";
import Blog from "./StaticPages/Blog";
import SignIn from "./StaticPages/SignIn";
import CoverLetterTemplates from "./StaticPages/CoverLetterTemplates";
import About from "./StaticPages/About";
import Register from "./StaticPages/Register";
// React router
import { BrowserRouter as Router , Route , Switch } from "react-router-dom";


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
        <div className="App">
          <button onClick={this.handleTheme}>DarkMode</button>
          <Router>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/resume-templates" component={ResumeTemplates}/>
              <Route exact path="/blog" component={Blog}/>
              <Route exact path="/coverletter-templates" component={CoverLetterTemplates}/>
              <Route exact path="/about-us" component={About}/>
              <Route exact path="/register" component={Register}/>
              <Route exact path="/signIn" component={SignIn}/>
            </Switch>
          </Router>           
    </div>
      </div>
      </ThemeProvider>
    )
  }
}

export default App
