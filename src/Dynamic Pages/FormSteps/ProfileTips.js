import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MobileStepper from '@material-ui/core/MobileStepper';
import ProgressBar from 'react-progressbar-on-scroll';
import Basic from "./Stepper/Basic";
import SvgImage from "./workexperience.svg";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
const styles = (theme) =>({
    root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
      step:{
        justifyContent:"center",
        background:"none", 
        padding:"20px 0",
      },
      formRoot: {
        '& > *': {
          margin: theme.spacing(1),
         
        },
      },
})
export class ProfileTips extends Component {
    render() {
        const { classes } = this.props;
        const {prevStep, nextStep, skipStep} = this.props
        return (
            <>
            <div className="form-Bar">
            <ProgressBar  
            color="#6520ec"
            height={5}
            direction="right"
            position="top"
            gradient={true}
            gradientColor="#f7588c"/>
            <AppBar color="appBar" position="static">
              <Toolbar>              
                <Typography variant="h6" className="form-logo">
                  sjsghs
                </Typography>
                <div className="stepper">
<Basic activeSteps={3} />
                </div>
                <div className="phoneStep">
                 <Typography  className="phoneStepText" variant="h5">Summary</Typography>
                </div>
               
              </Toolbar>
            </AppBar>
           
          </div>
          <div className="container Tips">
             <div className="row">
             <div className="col-md-12 text-center mobileStepper">
        <MobileStepper
      variant="dots"
      className={classes.step}
      steps={10}
      position="static"
      activeStep={1}
      nextButton={
       <IconButton onClick={nextStep}>
         <KeyboardArrowRight />
       </IconButton>
      }
      backButton={
      <IconButton onClick={prevStep}>
         <KeyboardArrowLeft />
         
      </IconButton>
      }
     
    />
        </div>
                 <div className="col-md-6">
                 <Typography variant="h5" className="BasicHeading" gutterBottom>
                 Finally, let’s work on your summary
              </Typography>
              <Typography className="BasicSubs" variant="body1">
              Here’s what you need to know:
Your summary shows employers you’re right for their job.
We’ll help you write a great one with expert content you can customize.
              </Typography>
              <div className="row">
              <div  className="col-md-12">
                     <br/>
                     <Typography variant="body1">You can skip Summary is you dont have any  ypur proect experiemce will be the next step</Typography>
                     <br/>
                     <div  className="row">
                     <div className="col-md-6">
                     <Button onClick={skipStep} disableElevation variant="outlined" >
          Skip Summary
        </Button> 
                     </div>
                     
                     </div>
                 </div>
                
              </div>

                 </div>
                 <div className="col-md-6">
                 <img src={SvgImage} className="introImage" alt="IntroImage"/>
                 </div>
                
             </div>
             <div className="row">
             <div  className="col-md-6 Previous">
                     <Button onClick={prevStep} disableElevation variant="text" color="secondary">
                     <KeyboardArrowLeft /> Previous  
        </Button> 
                     </div>
                    
             <div className="col-md-6 text-right next">
                 <Button onClick={nextStep} variant="contained" disableElevation   color="secondary">
         continue
        </Button> 
                 </div>
             </div>
        
          </div>
           </>
        )
    }
}

export default withStyles(styles)(ProfileTips)
