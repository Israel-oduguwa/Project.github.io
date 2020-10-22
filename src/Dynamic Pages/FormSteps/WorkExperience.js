import React, { Component, Fragment } from 'react'
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import MobileStepper from '@material-ui/core/MobileStepper';
import AddIcon from '@material-ui/icons/Add';
import Divider from '@material-ui/core/Divider';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
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
          handleRole, add, remove, prevStep, nextStep } = this.props
        return (
            <>
<div className="form-Bar">
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
          <div className="container">
        <div className="row">
          <div className="col-md-8">
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
            <div className="Heading">
                <Typography  gutterBottom  variant="h5">
                Tell your employer about your experience
                </Typography>               
                <Typography  gutterBottom className="BasicSub" variant="body1">
                Start with your recent job
                </Typography>
                <div className="row experienceInput">                    
               {
                   states.workExperience.map((inputField, index) =>(
                       <Fragment key={index}>
                           <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <div className="accord">
        {
             inputField.jobTitle !== "" ?
             <div className={classes.summary} alignItems="center">
                 <Typography variant="body1">
                     {inputField.jobTitle}, {inputField.company}
                 </Typography>
                 <Divider className={classes.divide} orientation="vertical" flexItem />
                 <Typography variant="body1">
                     {inputField.location}
                 </Typography>
             </div>
              :
              <div className={classes.summary} alignItems="center">
                 <Typography variant="body1">
                    Not Specified, Unknown
                 </Typography>
                 <Divider className={classes.divide} orientation="vertical" flexItem />
                 <Typography variant="body1">
                     Unknown
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
              <div style={{margin:"23.7px 0 0 0"}} className="col-md-6">
              <TextField 
                   onChange={e => handleWorkExperience(index, e)}  
                    value={inputField.jobTitle}
                     label="Job title" 
                   name="jobTitle" fullWidth
                    variant="outlined"/> 
              </div>
              <div className="col-md-6">
                  <br/>
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
             
                  
             <div className="col-md-6">
                 <br/>
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
             <div style={{width:"50%"}} className="col-md-3">
              <br/>
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
                      <div style={{width:"50%"}} className="col-md-3">
                      <br/>
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
          theme={this.state.theme}
          onChange={handleRole}
          value={inputField.highlights || ""}
          modules={WorkExperience.modules}
          formats={WorkExperience.formats}
         
         />
               
            </div>
          
            
          </div>
          
        </AccordionDetails>
      </Accordion>
      
    
                       </Fragment>
                   ))
               }
              <div className="col-md-12 addExperience">
              <Button
              className="AddExperienceButton"
              startIcon={ <AddIcon/>}
               onClick={add}>
           Add Experience
        </Button>
<br/>
        <Typography variant="body1" className="ExperienceTip">
        In this section, list related employment experience in your last 10 years along with the dates. Mention the most recent employment first.
        </Typography>
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
          </div>
        </div>
          </div>
            
            </>
            
        )
    }
}
WorkExperience.modules = {
  toolbar: [
    // [{ 'font': [] }],
    [{size: []}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, 
     {'indent': '-1'}, {'indent': '+1'}],
    // ['link', 'image', 'video'],
    // ['clean']
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  }
}
/* 
 * Quill WorkExperience formats
 * See https://quilljs.com/docs/formats/
 */
WorkExperience.formats = [
  // 'font',
   'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  // 'link', 'image', 'video'
]



export default  withStyles(styles)(WorkExperience)
