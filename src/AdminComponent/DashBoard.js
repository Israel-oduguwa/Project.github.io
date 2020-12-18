import React from 'react';
import { useState} from 'react';
import AdminNavbar from "../NavComponents/AdminNavbar";
import Panel from "./Panel"
import { ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

export const light = {
    palette: {
    type: 'light',
   main:{
    secondary:"#f7588c",
    panel:"#fff",
    body:"#f5f6f8",
    appBar:"#fff"
   }
    }
   
  }
  
  export const dark = {
    palette: {
    type: 'dark',
    main:{
        panel:"#424242",
        body:"#303030",
        appBar:"#424242"
    }
    },
   
  }
  
  

export default ({children}) =>{    
    const [theme, setTheme] = useState(false);
    const HandleTheme = () => {
      
        if(theme === false){
            setTheme(true)
        }else{
            setTheme(false)
        }
    }
    return (
        <ThemeProvider theme={createMuiTheme(theme ? dark : light)}>
        <CssBaseline />                 
       
       <div className="row" style={{margin:"0", width:"100%"}} >
            <div className="col-md-2 Panel" style={{padding:"0"}}>
                <Panel/>   
            </div>
            <div className="col-md-10" color="body" style={{padding:"0"}}>
            <AdminNavbar darkMode={HandleTheme}  theme={theme}/>
           {children}
            </div>
        </div>
      
     </ThemeProvider>
    );
}