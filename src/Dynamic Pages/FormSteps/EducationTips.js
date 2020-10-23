import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SvgImage from "./workexperience.svg";
import Button from '@material-ui/core/Button';
import MobileStepper from '@material-ui/core/MobileStepper'
import ProgressBar from 'react-progressbar-on-scroll';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import Basic from "./Stepper/Basic";
import IconButton from '@material-ui/core/IconButton';
const styles = (theme) =>({
    root: {
        flexGrow: 1,
      },
      step:{
        justifyContent:"center",
        background:"none", 
        padding:"20px 0",
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
export class EducationTips extends Component {
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
                  Atlas
                </Typography>
                <div className="stepper">
<Basic activeSteps={2} />
                </div>
                <div className="phoneStep">
                 <Typography  className="phoneStepText" variant="h5">Education</Typography>
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
      activeStep={3}
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
                 <Typography className="BasicHeading" variant="h5" gutterBottom>
                  Now lets move to Education
              </Typography>
              <br/>
              <Typography className="BasicSubs" variant="body1">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores hic, accusantium tempore recusandae deserunt dicta nulla delectus iste obcaecati sapiente!
              </Typography>
              <div className="row">
              <div  className="col-md-12">
                     <br/>
                     <Typography  className="BasicSubs" variant="body1">You can skip education is you dont have any  ypur proect experiemce will be the next step</Typography>                  
                     <br/>
                     <div  className="row">
                     <div className="col-md-6">

                     <Button onClick={skipStep} disableElevation variant="outlined" >
          Skip Education
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
             <div className="col-md-6 Previous">
             <Button onClick={prevStep} disableElevation variant="text" color="secondary">
        <KeyboardArrowLeft /> Previous  
        </Button> 
                 </div>
                 <div className="col-md-6 text-right next">
                 <Button onClick={nextStep} variant="contained" disableElevation color="secondary">
         Continue
        </Button> 
                 </div>
             </div>
             </div>
             
       
          
           </>
        )
    }
}

export default withStyles(styles)(EducationTips)
