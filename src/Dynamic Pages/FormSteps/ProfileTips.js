import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SvgImage from "./workexperience.svg";
import Button from '@material-ui/core/Button';

const styles = (theme) =>({
    root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
      formRoot: {
        '& > *': {
          margin: theme.spacing(1),
         
        },
      },
})
export class ProfileTips extends Component {
    render() {

        const {prevStep, nextStep, skipStep} = this.props
        return (
            <>
            <div className="form-Bar">
            <AppBar color="appBar" position="static">
              <Toolbar>              
                <Typography variant="h6" className="form-logo">
                  Israel
                </Typography>
                <Typography variant="h6">
                   Summary
                </Typography>
              </Toolbar>
            </AppBar>
           
          </div>
          <div className="container Tips">
             <div className="row">
                 <div className="col-md-5">
                 <Typography variant="h5" gutterBottom>
                 Finally, let’s work on your summary
              </Typography>
              <Typography variant="body1">
              Here’s what you need to know:
Your summary shows employers you’re right for their job.
We’ll help you write a great one with expert content you can customize.
              </Typography>
              <div className="row">
              <div  className="col-md-12">
                     <br/>
                     <Typography variant="body1">You can skip Summary is you dont have any  ypur proect experiemce will be the next step</Typography>
                     <br/>
                     <div style={{width:"50%"}} className="row">
                       
                     <div style={{width:"50%"}} className="col-md-6">
                     <Button onClick={prevStep} disableElevation variant="contained" color="secondary">
         Back
        </Button> 
                     </div>
                     <div style={{width:"50%"}} className="col-md-6">
                     <Button onClick={skipStep} disableElevation variant="contained" color="secondary">
          Skip
        </Button> 
                     </div>
                     </div>
                 </div>
                
              </div>
                 </div>
                 <div className="col-md-7">
                 <img src={SvgImage} className="introImage" alt="IntroImage"/>
                 </div>
                
             </div>
             <div className="row">
             <div className="col-md-12 text-right">
                 <Button onClick={nextStep} variant="contained" style={{boxShadow: "0 3px 5px 2px rgb(195 14 81 / 30%)"}} color="secondary">
          Next
        </Button> 
                 </div>
             </div>
        
          </div>
           </>
        )
    }
}

export default withStyles(styles)(ProfileTips)
