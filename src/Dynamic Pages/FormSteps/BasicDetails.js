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
        const { states, handleChange, addSocial, handleSocialChange } = this.props;
       
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
                     fullWidth label="First Name" variant="outlined" />
                                       
                    </div>
                    <div style={{width:"50%"}} className="col-md-6">
                    <TextField 
                    onChange={handleChange}   
                    label="Last Name" 
                   name="lastName"
                   fullWidth
                    variant="outlined"  />
                    </div>
                   
                    <div className="col-md-12">
                    <br/>
                    <TextField 
                    onChange={handleChange}   
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
                    variant="outlined" fullWidth />
                    </div>
                    <div style={{width:"50%"}} className="col-md-3">
                    <br/>
                    <TextField 
                    onChange={handleChange}   
                     label="State" 
                   name="state" fullWidth
                    variant="outlined"/>                 
                    </div>
                    <div style={{width:"50%"}} className="col-md-3">
                    <br/>
                    <TextField 
                    onChange={handleChange}   
                     label="Zip Code" 
                   name="zipCode" fullWidth
                    variant="outlined"/>
                    </div>
                    <div  className="col-md-6">
                                  <br/>
                                  <TextField onChange={handleChange} name="EmailAddress"                 
                                    fullWidth label="Email Address" variant="outlined" />
                                                     
                                  </div>
                    <div  className="col-md-6">
                                  <br/>
                                  <TextField onChange={handleChange} name="phoneNO"                 
                                    fullWidth label="Phone Number" variant="outlined" />
                                                     
                                  </div>
                <div className="col-md-12">
                  <br/>
                  <Typography variant="h6">
                    Add social Links
                  </Typography>
                </div>
                {
                  states.social.map((inputField, index) =>(
                   <Fragment key={index}>
                   
                    <div style={{width:"50%"}} className="col-md-6">  
                    <br/>         
                                  <TextField onChange={e => handleSocialChange(index, e)} name="socialWebsite"                 
                                    fullWidth label="Social Platform" value={inputField.socialWebsite} variant="outlined" />
                      </div>
                      <div style={{width:"50%"}} className="col-md-6">   
                      <br/>                         
                                  <TextField onChange={e => handleSocialChange(index, e)} name="socialLink"                 
                                    fullWidth label="Social Link" value={inputField.socialLink} variant="outlined" />
                                   <IconButton>
                                     <DeleteIcon/>
                                   </IconButton>
                      </div>
                      
                   </Fragment>
                  ))
                }
                </div>
                <IconButton onClick={addSocial}>
           <AddIcon/>
        </IconButton>
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
