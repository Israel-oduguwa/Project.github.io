import React, { Component } from 'react';
import Card from "@material-ui/core/Card";
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import ProgressBar from 'react-progressbar-on-scroll';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Helmet} from "react-helmet";
import MobileStepper from '@material-ui/core/MobileStepper';
import InputAdornment from '@material-ui/core/InputAdornment';
import Personal from "./skills.svg";
import Basic from "./Stepper/Basic";
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import CheckIcon from '@material-ui/icons/Check';

const styles = (theme) =>({
    root: {
        flexGrow: 1,
      },
      summary: {
        width: 'fit-content',
       display:"flex",
       
        backgroundColor: theme.palette.background.paper,               
        '& hr': {
          margin: theme.spacing(0, 0.5),
        },
      },
      step:{
        justifyContent:"center",
        background:"none", 
        padding:"20px 0",
      },
      divider:{
width:"3px"
      }
})
export class Skills extends Component {
    render() {
        const { classes} = this.props;
        const { states,addSkills, skillInput,
          handleToggle,
            prevStep, nextStep, delSkills, valuetext } = this.props
        return (
           <>
            <Helmet>
               
               <title>Skills - React app</title>
               
           </Helmet>
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
<Basic activeSteps={3} />
                </div>                
              </Toolbar>
            </AppBar>
             <div className="container-fluid workContainer">
               <div className="row">
               <div className="col-md-12 text-center mobileStepper">
        <MobileStepper
      variant="dots"
      className={classes.step}
      steps={10}
      position="static"
      activeStep={5}
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
               <div className="col-md-7 Tips">
               <div className="Heading">
                <Typography  gutterBottom  variant="h5">
                Tell us about your Skills.
                </Typography>
                <Typography  gutterBottom className="BasicSub"  variant="body1">
                Start with the one you are most experienced at.
                </Typography>
                <br/>
                <div className="row experienceInput">    
           {
               states.skills.map((skills, index) =>(
                  <React.Fragment key={index}>
              <div className="col-md-12" style={{marginTop:"1vh"}}>
              <Card>
              <div className="row skillsCard">
              <div className="col-md-6">
                   <TextField 
                    onChange={e => skillInput(index, e)}   
                    value={skills.body}
                     label="skill" 
                     InputProps={{
                      endAdornment: <InputAdornment position="end">{
                       skills.body.trim() !== "" ? <CheckIcon className={classes.completed}/> :  <></>
                      } </InputAdornment>,
                    }}  
                   name="body" fullWidth
                    variant="outlined"/> 
                   </div>
                   <div className="col-md-4 col-sm-8 col-8">
                   {states.addRating ?
                   <TextField 
                   onChange={e => skillInput(index, e)}   
                   value={skills.rating}
                    label="%" 
                  name="rating" fullWidth 
                   variant="outlined"/> :
                   <TextField 
                   disabled
                   onChange={e => skillInput(index, e)}   
                   value={skills.rating}
                    label="%" 
                  name="rating" fullWidth 
                   variant="outlined"/> }
                   </div>
                   <div className="col-md-2 col-sm-2 col-sm-2 col-2">
                   <IconButton onClick={() => delSkills(index)} >
                                   <DeleteIcon/>
                               </IconButton>
                  
                   
                 </div>
              </div>
               </Card>
              </div>
                   
               
               
                  </React.Fragment>
               ))
           }
           </div>
           <div className="row">
              <div className="col-md-12 addExperience">
              <Button className="AddExperienceButton"  startIcon={ <AddIcon/>} variant="outlined" onClick={addSkills}>
           Add skills
        </Button>
        <br/>
        {/* <Typography variant="body1" className="ExperienceTip">
        Show experience level
        </Typography> */}
        <FormControl>
        <FormControlLabel
          value="start"
          control={<Switch color="primary" />}
          label="Show experience level"
         checked={states.addRating}
         name="addRating"
         onChange={handleToggle}
          labelPlacement="end"
        />
        </FormControl>
              </div>
       
       </div>
               </div>
               </div>
               <div style={{marginTop:"8vh"}} className="col-md-5">
               <img src={Personal} alt="work"/>
          </div>
              
               <div className="col-md-6 Previous">
        <Button onClick={prevStep} variant="text" color="secondary">
        <KeyboardArrowLeft /> Previous
        </Button> 
        </div>
        <div className="col-md-6 text-right next">
        <Button onClick={nextStep} variant="contained" disableElevation color="secondary">
        Next Professional summary
        </Button> 
        </div>
              
               </div>
      
          </div>
         
           </div>
           </>
             
        )
    }
}

export default withStyles(styles)(Skills)
