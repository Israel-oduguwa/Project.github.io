import React, { Component, Fragment } from 'react'
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';

import AccordionDetails from '@material-ui/core/AccordionDetails';
import TextField from '@material-ui/core/TextField';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import Divider from '@material-ui/core/Divider';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

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
            prevStep, nextStep, deleteEdu } = this.props
        return (
           <>
           <div className="form-Bar">
            <AppBar color="appBar" position="static">
              <Toolbar>              
                <Typography variant="h6" className="form-logo">
                  Israel
                </Typography>
                <Typography variant="h6">
                   Education
                </Typography>
              </Toolbar>
            </AppBar>
            <div className="containers">
          <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          
        </Grid>
        <Grid item xs={12} sm={10} >
            <div className="Heading">
                <Typography  gutterBottom  variant="h5">
                Tell your us About your Education
                </Typography>
                <Typography  gutterBottom  variant="body1">
                   
                </Typography>
                <br/>
                <div className="row">
                    <br/>
               {
                   states.education.map((edu, index) =>(
                       <Fragment key={index}>
                           <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
         {
            edu.schoolName !== "" ?
             <div className={classes.summary} alignItems="center">
                 <Typography variant="body2">
                    {edu.schoolName}
                 </Typography>
                 <Divider className={classes.divide} orientation="vertical" flexItem />
                 <Typography variant="body2">
                     {edu.schoolLocation}
                 </Typography>
                 <Typography variant="body1">
                     {edu.degree}
                 </Typography>
             </div>
              :
              <Typography variant="body2">
                  Education {index + 1}
              </Typography>
         }
         
        </AccordionSummary>
        <AccordionDetails>
          <div className="row">
              <div style={{margin:"23.7px 0 0 0"}} className="col-md-6">
              <TextField 
                   onChange={e => eduInput(index, e)}  
                    value={edu.schoolName}
                     label="School Name" 
                   name="schoolName" fullWidth
                    variant="outlined"/> 
              </div>
              <div className="col-md-6">
                  <br/>
              <TextField 
                   onChange={e => eduInput(index, e)}  
                    value={edu.schoolLocation}
                     label="School Location" 
                   name="schoolLocation" fullWidth
                    variant="outlined"/> 
              </div>
             
                  
             <div className="col-md-6">
                 <br/>
             <TextField 
                    onChange={e => eduInput(index, e)}   
                    value={edu.degree}
                     label="Degree" 
                   name="degree" fullWidth
                    variant="outlined"/> 
             </div>
             <div style={{width:"50%"}} className="col-md-3">
              <br/>
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
                      <div style={{width:"50%"}} className="col-md-3">
                      <br/>
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
      />
                    
                  </div>
           
          
               
           
          
            <IconButton onClick={() => deleteEdu(index)}>
                                     <DeleteIcon/>
                                   </IconButton>
          </div>
          
        </AccordionDetails>
      </Accordion>
                       </Fragment>
                   ))
               }
              <div className="col-md-12">
              <IconButton onClick={addEducation}>
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
           
          </div>
           </>
        )
    }
}

export default withStyles(styles)(Education)
