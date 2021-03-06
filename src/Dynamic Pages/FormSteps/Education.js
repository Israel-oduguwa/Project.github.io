import React, { Component, Fragment } from 'react'
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ProgressBar from 'react-progressbar-on-scroll';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import {Helmet} from "react-helmet";
import TextField from '@material-ui/core/TextField';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Basic from "./Stepper/Basic";
import Select from '@material-ui/core/Select';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Personal from "./Professor.svg";
import MobileStepper from '@material-ui/core/MobileStepper';
import CheckIcon from '@material-ui/icons/Check';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
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
      divider:{
width:"3px"
      },
      step:{
        justifyContent:"center",
        background:"none", 
        padding:"20px 0",
      },
      formControl:{
        width:"100%"
      }
})
export class Education extends Component {
    state={
        open:false,       
    }
    handleOpen = () =>{
        this.setState({
            open:true
        })
    }
    handleClose = () =>{
        this.setState({
            open:false
        })
    }
    back = (e) =>{
        e.preventDefault()
      this.props.prevStep()
    }
    render() {
        const { classes} = this.props;
        const { states, addEducation, eduInput,
          current,
            prevStep, nextStep, deleteEdu } = this.props
        return (
           <>
            <Helmet>
               
                <title>Education - React app</title>
                
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
<Basic activeSteps={2} />
                </div>
                
              </Toolbar>
            </AppBar>
          </div>
          <div className="container-fluid workContainer">
         <div className="row">
         <div className="col-md-12 text-center mobileStepper">
        <MobileStepper
      variant="dots"
      className={classes.step}
      steps={10}
      position="static"
      activeStep={4}
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
                Tell your us About your Education
                </Typography>
                <Typography  gutterBottom className="BasicSub" variant="body1">
                Start with your recent university
                </Typography>
                
                <div className="row experienceInput">
                
               {
                   states.education.map((edu, index) =>(
                       <Fragment key={index}>
                           <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <div className="accord">
        {
            edu.degree || edu.startDate !== "" ?
             <div className={classes.summary} alignItems="center">
                 <Typography className="summerywork" variant="body1">
            {edu.Degree} at {edu.schoolName}, {edu.startDate}
                 </Typography>
                 
             </div>
              :
              <Typography className="summerywork" variant="body2">
                 (Not specified), Unknown
              </Typography>
         }
         
         <IconButton onClick={() => deleteEdu(index)}>
                                     <DeleteIcon/>
                                   </IconButton>
        </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="row">
              <div  className="col-md-6">
              <TextField 
                   onChange={e => eduInput(index, e)}  
                    value={edu.schoolName}
                     label="School Name" 
                   name="schoolName" fullWidth
                   InputProps={{
                    endAdornment: <InputAdornment position="end">{
                     edu.schoolName.trim() !== "" ? <CheckIcon className={classes.completed}/> :  <></>
                    } </InputAdornment>,
                  }}  
                    variant="outlined"/> 
              </div>
              <div className="col-md-6 lapExp">
                  
              <TextField 
                   onChange={e => eduInput(index, e)}  
                    value={edu.schoolLocation}
                     label="School Location" 
                     InputProps={{
                      endAdornment: <InputAdornment position="end">{
                       edu.schoolLocation.trim() !== "" ? <CheckIcon className={classes.completed}/> :  <></>
                      } </InputAdornment>,
                    }}  
                   name="schoolLocation" fullWidth
                    variant="outlined"/> 
              </div>
             
                  
             <div className="col-md-6 col-sm-6 col-lg-6 phoneExp">
             <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="selectDegree">Degree</InputLabel>
        <Select
        name="Degree"   
          labelId="selectDegree"
          id="select-Degree"         
          onChange={e => eduInput(index, e)}
          value={edu.Degree}
          label="Degree"
        >
          
          <MenuItem value="High School Diploma">High School Diploma</MenuItem>
          <MenuItem value="GED">GED</MenuItem>
          <MenuItem value="Associate of Arts">Associate of Arts</MenuItem>
          <MenuItem value="Associate of Applied Science">Associate of Applied Science</MenuItem>
          <MenuItem value="Associate of Science">Associate of Science</MenuItem>
          <MenuItem value="Bachelor of Science">Bachelor of Science</MenuItem>
          <MenuItem value="Bachelor of Art">Bachelor of Art</MenuItem>
          <MenuItem value="Bachelor of Fine Arts">Bachelor of Fine Arts</MenuItem>
          <MenuItem value="BBA">BBA</MenuItem>
          <MenuItem value="Master of Science">Master of Science</MenuItem>
          <MenuItem value="Master of Arts">Master of Arts</MenuItem>
          <MenuItem value="MBA">MBA</MenuItem>
          <MenuItem value="Ph.D">Ph.D</MenuItem>
          <MenuItem value="J.D">J.D</MenuItem>
          <MenuItem value="M.D">M.D</MenuItem>
          <MenuItem value="DDS">DDS</MenuItem>
          <MenuItem value="Enter a different degree">Enter a different degree</MenuItem>
          <MenuItem value="No Degree">No Degree</MenuItem>
        </Select>
        </FormControl>
            
             </div>
             <div className="col-md-6 col-sm-6 col-lg-6 phoneExp">
                { 
                  edu.Degree === "Enter a different degree" ?
                  <TextField 
                    onChange={e => eduInput(index, e)}   
                    value={edu.customDegree}
                     label="Enter a degree" 
                   name="customDegree" fullWidth
                   InputProps={{
                    endAdornment: <InputAdornment position="end">{
                     edu.customDegree.trim() !== "" ? <CheckIcon className={classes.completed}/> :  <></>
                    } </InputAdornment>,
                  }}  
                    variant="outlined"/>:
                    <TextField 
                     style={{visibility:"hidden"}}
                    onChange={e => eduInput(index, e)}   
                    value={edu.Degree}
                     label="Degree" 
                   name="Degree" fullWidth
                   InputProps={{
                    endAdornment: <InputAdornment position="end">{
                     edu.Degree.trim() !== "" ? <CheckIcon className={classes.completed}/> :  <></>
                    } </InputAdornment>,
                  }}  
                    variant="outlined"/>
                  }
             </div>
             <div className="col-md-6 phoneExp">
               {
                  edu.Degree !== "High School Diploma" && edu.Degree !== "GED"?
                  <TextField 
                  onChange={e => eduInput(index, e)}   
                  value={edu.field}
                   label="Field of Study" 
                 name="field" fullWidth
                 InputProps={{
                  endAdornment: <InputAdornment position="end">{
                   edu.field.trim() !== "" ? <CheckIcon className={classes.completed}/> :  <></>
                  } </InputAdornment>,
                }}  
                  variant="outlined"/>:
                  <TextField 
                  disabled
                  onChange={e => eduInput(index, e)}   
                  value={edu.field}
                   label="Field of Study" 
                 name="field" fullWidth
                 InputProps={{
                  endAdornment: <InputAdornment position="end">{
                   edu.field.trim() !== "" ? <CheckIcon className={classes.completed}/> :  <></>
                  } </InputAdornment>,
                }}  
                  variant="outlined"/>

               }
             
             </div>
             <div style={{width:"50%"}} className="col-md-6 col-sm-3 col-lg-3 phoneExp">
              
                      <TextField
        id="date1"
        label="Start Date"
        type="date"
        name="startDate"
         defaultValue={edu.startDate}
        onChange={e => eduInput(index, e)}
        InputLabelProps={{
          shrink: true,
        }}
      />
                      </div>
                      <div style={{width:"50%"}} className="col-md-3 phoneExp">
                      
                     {
                       !edu.currents ?
                       <TextField
                       id="date2"
                       label="Graduation Date"
                       type="date"
                       name="graduationDate"
                        defaultValue={edu.graduationDate}
                       onChange={e => eduInput(index, e)}
                       InputLabelProps={{
                         shrink: true,
                       }}
                     />:
                     <TextField
                     id="date2"
                    //  visibility={{visibility:"hidden"}}
                    disabled
                     label="Graduation Date"
                     type="date"
                     name="graduationDate"
                      defaultValue={edu.graduationDate}
                     onChange={e => eduInput(index, e)}
                     InputLabelProps={{
                       shrink: true,
                     }}
                   />
                     }
                    
                  </div>
                  <div className="col-md-12 text-right">
                  <FormControlLabel
         
         control={ <Checkbox
           name="currents" 
         inputProps={{ 'aria-label': 'primary checkbox' }} 
         checked={edu.currents}         
         onChange={e => current(index, e)} />}
         labelPlacement="end"
         label="I currently Attend here"
       />
                  </div>
          </div>
          
        </AccordionDetails>
      </Accordion>
                       </Fragment>
                   ))
               }
              </div>
       <div className="row">
       <div className="col-md-12 addExperience">
              <Button
               className="AddExperienceButton"
               startIcon={ <AddIcon/>}
               variant="outlined" onClick={addEducation}>
           Add Education
        </Button>
        <br/>
        <Typography variant="body1" className="ExperienceTip">
        In this section, list your level education; include any degrees and educational achievements, if relevant. Include the dates of your achievements.
        </Typography>
              </div>
          </div>
       
       </div>
               </div>
               
        
        <div style={{marginTop:"8vh"}} className="col-md-5">
               <img src={Personal} alt="work"/>
          </div>
          <div className="row experienceEnd">
          <div className="col-md-6 Previous">
            <Button onClick={prevStep} variant="text" disableElevation color="secondary">
            <KeyboardArrowLeft /> Previous  
            </Button> 
            </div>
            <div className="col-md-6 text-right next">
            <Button onClick={nextStep} variant="contained" disableElevation  color="secondary">
              Next Section Skill
            </Button> 
            </div>
          </div>
         </div>
          </div>
           </>
        )
    }
}

export default withStyles(styles)(Education)
