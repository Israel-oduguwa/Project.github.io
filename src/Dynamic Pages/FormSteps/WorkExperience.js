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
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import TextField from '@material-ui/core/TextField';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
// Styles
const styles = (theme) =>({
    root: {
        flexGrow: 1,
      },
})
export class WorkExperience extends Component {
    state={
        open:false
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
        const { states, handleWorkExperience, add, remove } = this.props
        return (
            <>
<div className="form-Bar">
            <AppBar color="appBar" position="static">
              <Toolbar>              
                <Typography variant="h6" className="form-logo">
                  Israel
                </Typography>
                <Typography variant="h6">
                    Basic Details
                </Typography>
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
               {
                   states.workExperience.map((inputField, index) =>(
                       <Fragment key={index}>
                           <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Accordion 1</Typography>
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
            <div className="col-md-6">
               <Button onClick={this.handleOpen}>
                   Your role in the Company
               </Button>
            </div>
           
          </div>
          <IconButton onClick={() => remove(index)}>
                                     <DeleteIcon/>
                                   </IconButton>
        </AccordionDetails>
      </Accordion>
      <IconButton onClick={add}>
           <AddIcon/>
        </IconButton>
      <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">What did you do at {
            inputField.company
        }</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add you experence 
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
            Cancel
          </Button>
          <Button onClick={this.handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
                       </Fragment>
                   ))
               }
               </div>
                </div>
        </Grid>
        <Grid item xs>
          
        </Grid>
      </Grid>
    </div>
          </div>
            <div>
               
               <button onClick={this.back}>Back</button>
           </div>
            </>
            
        )
    }
}

export default  withStyles(styles)(WorkExperience)
