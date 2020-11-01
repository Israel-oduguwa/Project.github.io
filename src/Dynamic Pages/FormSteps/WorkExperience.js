import React, { Component, Fragment } from 'react'
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ProgressBar from 'react-progressbar-on-scroll';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import InputAdornment from '@material-ui/core/InputAdornment';
import Personal from "./work.svg";
import TextField from '@material-ui/core/TextField';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import MobileStepper from '@material-ui/core/MobileStepper';
import AddIcon from '@material-ui/icons/Add';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // ES6

import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import CheckIcon from '@material-ui/icons/Check';
import Button from '@material-ui/core/Button';
import Basic from "./Stepper/Basic";
// Styles
const styles = (theme) =>({
    root: {
        flexGrow: 1,
      },
      completed:{
        color:"white",
      background:"#450477",
      borderRadius:"50%",
      fontSize:"16px",
      },
      step:{
        justifyContent:"center",
        background:"none", 
        padding:"20px 0",
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
width:"3px",
height:"3.2vh"
      }
})
export class WorkExperience extends Component {
    state={
        open:false,
        theme:"snow"
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
        const { classes} = this.props
        const { states, handleWorkExperience, 
          handleRole, add, remove, prevStep, nextStep, summary } = this.props
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
                  Atlsa
                </Typography>
                <div className="stepper">
<Basic activeSteps={1} />
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
      activeStep={2}
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
                Tell your employer about your experience
                </Typography>               
                <Typography  gutterBottom className="BasicSub" variant="body1">
                Start with your recent job
                </Typography>
              <div className="input">
              <div className="row experienceInput">                    
               {
                   states.workExperience.map((inputField, index) =>(
                       <Fragment key={index}>
                           <Accordion className="Accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <div className="accord">
        {
             inputField.jobTitle !== "" ?
             <div className={classes.summary} alignItems="center">
                 <Typography className="summerywork" variant="body1">
                     {inputField.jobTitle} from {inputField.company}
                 </Typography>
                
                {
                  inputField.endDate !== "" ?
                  <Typography className="summerywork" variant="body1">
                  , {inputField.startDate} - {inputField.endDate}
              </Typography>:
              <Typography className="summerywork" variant="body1">
                , Unknown - Unknown
              </Typography>
                }
             </div>
              :
              <div  alignItems="center">
                 <Typography className="summerywork" variant="body1">
                    (Not Specified), Unknown
                 </Typography>
                
             </div>
         }
         <IconButton onClick={() => remove(index)}>
                                     <DeleteIcon/>
                                   </IconButton>
        </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="row">
              <div className="col-md-6">
              <TextField 
                   onChange={e => handleWorkExperience(index, e)}  
                    value={inputField.jobTitle}
                     label="Job title" 
                     InputProps={{
                      endAdornment: <InputAdornment position="end">{
                       inputField.jobTitle.trim() !== "" ? <CheckIcon className={classes.completed}/> :  <></>
                      } </InputAdornment>,
                    }}  
                   name="jobTitle" fullWidth
                    variant="outlined"/> 
              </div>
              <div className="col-md-6 lapExp">
                 
              <TextField 
                   onChange={e => handleWorkExperience(index, e)}  
                    value={inputField.company}
                     label="Employer" 
                     InputProps={{
                      endAdornment: <InputAdornment position="end">{
                       inputField.company.trim() !== "" ? <CheckIcon className={classes.completed}/> :  <></>
                      } </InputAdornment>,
                    }}  
                   name="company" fullWidth
                    variant="outlined"/> 
              </div>
             
                  
             <div className="col-md-12 col-sm-6 col-lg-6 phoneExp">
                
             <TextField 
                    onChange={e => handleWorkExperience(index, e)}   
                    value={inputField.location}
                     label="City" 
                   name="location" fullWidth
                   InputProps={{
                    endAdornment: <InputAdornment position="end">{
                     inputField.location.trim() !== "" ? <CheckIcon className={classes.completed}/> :  <></>
                    } </InputAdornment>,
                  }}  
                    variant="outlined"/> 
             </div>
             <div style={{width:"50%"}} className="col-md-6 col-sm-3 col-lg-3 phoneExp">
             
                      <TextField
        id="date1"
        label="Start Date"
        type="date"
        name="startDate"
         defaultValue={inputField.startDate}
        onChange={e => handleWorkExperience(index, e)}
        InputLabelProps={{
          shrink: true,
        }}
      />
                      </div>
                      <div style={{width:"50%"}} className="col-md-3 phoneExp">
                     
                      <TextField
        id="date2"
        label="End Date"
        type="date"
        name="endDate"
         defaultValue={inputField.endDate}
        onChange={e => handleWorkExperience(index, e)}
        InputLabelProps={{
          shrink: true,
        }}
      />
                    
                  </div>
             
            <div className="col-md-12 experienceEditor">
            <ReactQuill 
             theme="snow"
             onChange={summary}
             value={inputField.highlights|| ''}
             modules={WorkExperience.modules}
             formats={WorkExperience.formats}
             bounds={'.app'}
             placeholder="Languages"
            />
             
            </div>
          
            
          </div>
          
        </AccordionDetails>
      </Accordion>
      
    
                       </Fragment>
                   ))
               }
             
               </div>
              </div>
               <div className="row" contentEditable="true" >
               <div className="col-md-12 addExperience">
              <Button
              className="AddExperienceButton"
              startIcon={ <AddIcon/>}
              variant="outlined"
               onClick={add}>
           Add Experience
        </Button>
<br/>
        <Typography variant="body1" className="ExperienceTip">
        In this section, list related employment experience in your last 10 years along with the dates. Mention the most recent employment first.
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
              Next Section Education
            </Button> 
            </div>
           </div>
        </div>
          </div>
            
            </>
            
        )
    }
}

WorkExperience.modules = {
  toolbar: [
    [{ 'header': '1'}, { 'header': '2'}, { 'font': [] }],
    [{size: []}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'},
    //  {'indent': '-1'}, {'indent': '+1'}, 
     { 'color': ['#000000', '#e60000', '#ff9900',
     '#ffff00', '#008a00', '#0066cc', '#9933ff', '#ffffff', '#facccc', '#ffebcc', '#ffffcc', '#cce8cc', '#cce0f5',
      '#ebd6ff', '#bbbbbb', '#f06666', '#ffc266', '#ffff66', '#66b966', '#66a3e0', '#c285ff', '#888888', '#a10000',
       '#b26b00', '#b2b200', '#006100', '#0047b2', '#6b24b2', '#444444',
     '#5c0000', '#663d00', '#666600', '#003700', '#002966', '#3d1466', 'custom-color'] },
   ],
    
    ['clean']
  ],
  clipboard: {
    // toggle to add WorkExperience line breaks when pasting HTML:
    matchVisual: false,
  }
}

WorkExperience.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet',  
  // 'indent',
  'link',  'color', 
]

export default  withStyles(styles)(WorkExperience)
