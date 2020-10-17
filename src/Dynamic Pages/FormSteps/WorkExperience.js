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
import TextField from '@material-ui/core/TextField';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import Divider from '@material-ui/core/Divider';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Basic from "./Stepper/Basic";
// Styles
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
                  Israel
                </Typography>
                <div className="stepper">
<Basic activeSteps={1} />
                </div>
              </Toolbar>
            </AppBar>
           
          </div>
          <div className="containers">
          <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          
        </Grid>
        <Grid item xs={12} sm={10} >
            <div className="Heading">
                <Typography  gutterBottom  variant="h5">
                Tell your employee about your most recent job
                </Typography>
                <Typography  gutterBottom  variant="body1">
                   
                </Typography>
                <br/>
                <div className="row">
                    <br/>
               {
                   states.workExperience.map((inputField, index) =>(
                       <Fragment key={index}>
                           <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
         {
             inputField.jobTitle !== "" ?
             <div className={classes.summary} alignItems="center">
                 <Typography variant="body2">
                     {inputField.jobTitle}, {inputField.company}
                 </Typography>
                 <Divider className={classes.divide} orientation="vertical" flexItem />
                 <Typography variant="body2">
                     {inputField.location}
                 </Typography>
             </div>
              :
              <Typography variant="body2">
                  Experience {index + 1}
              </Typography>
         }
         
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
                     label="Company" 
                   name="company" fullWidth
                    variant="outlined"/> 
              </div>
             
                  
             <div className="col-md-6">
                 <br/>
             <TextField 
                    onChange={e => handleWorkExperience(index, e)}   
                    value={inputField.location}
                     label="Location" 
                   name="location" fullWidth
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
            <div className="col-md-12">
              <Typography variant="h6">
                Work Highlights
              </Typography>
              </div>    
            <div className="col-md-12">
            <ReactQuill 
          theme={this.state.theme}
          onChange={handleRole}
          value={inputField.highlights || ""}
          modules={WorkExperience.modules}
          formats={WorkExperience.formats}
         
         />
               
            </div>
          
            <IconButton onClick={() => remove(index)}>
                                     <DeleteIcon/>
                                   </IconButton>
          </div>
          
        </AccordionDetails>
      </Accordion>
      
      <Dialog key={index} open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id={index}>What did you do at {
            inputField.company
        }</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add you experience 
          </DialogContentText>
          <TextField
             onChange={e => handleWorkExperience(index, e)}  
             value={inputField.role}
              label="Role" 
            name="role" fullWidth
             variant="outlined"
           
            
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
           Next
          </Button>
          
        </DialogActions>
      </Dialog>
                       </Fragment>
                   ))
               }
              <div className="col-md-12">
              <IconButton onClick={add}>
           <AddIcon/>
        </IconButton>
              </div>
       <div className="row">
           
       <div className="col-md-6">
        <Button onClick={prevStep} variant="contained" style={{boxShadow: "0 3px 5px 2px rgb(195 14 81 / 30%)"}} color="secondary">
         Back
        </Button> 
        </div>
        <div className="col-md-6 text-right">
        <Button onClick={nextStep} variant="contained" style={{boxShadow: "0 3px 5px 2px rgb(195 14 81 / 30%)"}} color="secondary">
          Next
        </Button> 
        </div>
       </div>
               </div>
                </div>
        </Grid>
        <Grid item xs>
          
        </Grid>
      </Grid>
    </div>
          </div>
            
            </>
            
        )
    }
}
WorkExperience.modules = {
  toolbar: [
    [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
    [{size: []}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, 
     {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image', 'video'],
    ['clean']
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
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
]



export default  withStyles(styles)(WorkExperience)
