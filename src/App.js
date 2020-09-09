import React, { Component } from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import LandingPage from "./StaticPages/LandingPage";


export const light = {

  palette: {

  type: 'light',

  },
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
          
        <LandingPage darkToggle={this.handleTheme}/>
       
    </div>
      </div>
     
     
      </ThemeProvider>
    )
  }
}

export default App
