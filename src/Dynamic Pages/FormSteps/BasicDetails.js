import React, { Component, Fragment } from 'react'
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
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
export class BasicDetails extends Component {
  continue = (e) =>{
      e.preventDefault()
      this.props.nextStep()
  }
    
    render() {
        const { states, nextStep, handleChange, addSocial, handleSocialChange, removeSocial } = this.props;
       
        const { classes } = this.props
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
        <Grid item xs={12} sm={8} >
            <div className="Heading">
                <Typography  gutterBottom  variant="h5">
                    Your basic information so that employees can contact you.
                </Typography>
                <Typography  gutterBottom  variant="body1">
                    Be sure to add your email and phone number.
                </Typography>
                <br/>
                <div className="row">
                    <div style={{width:"50%"}} className="col-md-6">
                                  
                    <TextField onChange={handleChange} name="firstName"                 
                     fullWidth label="First Name" defaultValue={states.firstName} variant="outlined" />
                                       
                    </div>
                    <div style={{width:"50%"}} className="col-md-6">
                    <TextField 
                    onChange={handleChange}   
                    label="Last Name" 
                    defaultValue={states.lastName}
                   name="lastName"
                   fullWidth
                    variant="outlined"  />
                    </div>
                   
                    <div className="col-md-12">
                    <br/>
                    <TextField 
                    onChange={handleChange}  
                    defaultValue={states.profession} 
                     label="Profession" 
                   name="profession"
                    variant="outlined" fullWidth />
                    </div>
                    <div className="col-md-6">
                    <br/>
                    <TextField 
                    onChange={handleChange}   
                     label="City" 
                   name="city"
                   defaultValue={states.city}
                    variant="outlined" fullWidth />
                    </div>
                    <div style={{width:"50%"}} className="col-md-3">
                    <br/>
                    <TextField 
                    onChange={handleChange}   
                    defaultValue={states.state}
                     label="State" 
                   name="state" fullWidth
                    variant="outlined"/>                 
                    </div>
                    <div style={{width:"50%"}} className="col-md-3">
                    <br/>
                    <TextField 
                    onChange={handleChange}   
                    defaultValue={states.zipCode}
                     label="Zip Code" 
                   name="zipCode" fullWidth
                    variant="outlined"/>
                    </div>
                    <div  className="col-md-6">
                                  <br/>
                                  <TextField onChange={handleChange} 
                                  defaultValue={states.EmailAddress}
                                  name="EmailAddress"                 
                                    fullWidth label="Email Address" variant="outlined" />
                                                     
                                  </div>
                    <div  className="col-md-6">
                                  <br/>
                                  <TextField onChange={handleChange} 
                                  defaultValue={states.phoneNO}
                                  name="phoneNO"                 
                                    fullWidth label="Phone Number" variant="outlined" />
                                                     
                                  </div>
                <div className="col-md-12">
                  <br/>
                  <Typography variant="body1">
                    Social Links
                  </Typography>
                </div>
                {
                  states.social.map((inputField, index) =>(
                   <Fragment key={index}>
                   
                    <div style={{width:"50%"}} className="col-md-6">  
                    <br/>         
                                  <TextField onChange={e => handleSocialChange(index, e)} name="socialWebsite"                 
                                    fullWidth label="Social or website" value={inputField.socialWebsite} variant="outlined" />
                      </div>
                      <div style={{width:"50%"}} className="col-md-6">   
                      <br/>                         
                                  <TextField onChange={e => handleSocialChange(index, e)} name="socialLink"                 
                                    fullWidth label="Social Link" value={inputField.socialLink} variant="outlined" />
                                   <IconButton onClick={() => removeSocial(index)}>
                                     <DeleteIcon/>
                                   </IconButton>
                      </div>
                      
                   </Fragment>
                  ))
                }
               <div className="col-md-6">
               <IconButton onClick={addSocial}>
           <AddIcon/>
        </IconButton>
               </div>
               <div className="col-md-6 text-right">
               <Button onClick={nextStep} variant="contained" style={{boxShadow: "0 3px 5px 2px rgb(195 14 81 / 30%)"}} color="secondary">
          Next
        </Button> 
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

export default withStyles(styles)(BasicDetails)
