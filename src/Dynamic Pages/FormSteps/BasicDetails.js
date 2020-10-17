import React, { Component, Fragment } from 'react'
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Personal from "./personalDetails.svg";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import CheckIcon from '@material-ui/icons/Check';
import InputAdornment from '@material-ui/core/InputAdornment';
import MobileStepper from '@material-ui/core/MobileStepper'
import ProgressBar from 'react-progressbar-on-scroll';
import Basic from "./Stepper/Basic";
import Select from '@material-ui/core/Select';
// Styles
const styles = (theme) =>({
    root: {
        flexGrow: 1,
      },
      completed:{
        color:"white",
      background:"#f7588c",
      borderRadius:"50%",
      fontSize:"16px",
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
      formControl:{
        width:"100%"
      }
})
export class BasicDetails extends Component {
  continue = (e) =>{
      e.preventDefault()
      this.props.nextStep()
  }
    
    render() {
        const { states, nextStep, handleChange, addSocial, handleSocialChange, removeSocial } = this.props;
        const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const { classes } = this.props;
        
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
                <Typography variant="h5" className="form-logo">
                  ATLAS
                </Typography>
                
                <div className="stepper">
<Basic activeSteps={0} />
                </div>
                <div className="phoneStep">
                 <Typography variant="h5">Personal Details</Typography>
                </div>
              </Toolbar>
            </AppBar>
           
          </div>
          <div className="container" style={{marginTop:"20px"}}>
          <div className="row">
        <div className="col-md-12 text-center mobileStepper">
        <MobileStepper
      variant="dots"
      className={classes.step}
      steps={10}
      position="static"
      activeStep={0}
      
     
    />
        </div>
       <div className="col-md-7">
         
       <div className="Heading">
                <Typography  gutterBottom className="BasicHeading" variant="h6">
                Your personal information.
                </Typography>
                <Typography  gutterBottom className="BasicSub" variant="body1">
                Your email and phone number is essential as it is the way the employers can contact you.
                </Typography>
                <br/>
                <div className="row">
                    <div style={{width:"50%"}} className="col-md-6">
                                  
                    <TextField onChange={handleChange} name="firstName"     
                    InputProps={{
                      endAdornment: <InputAdornment position="end">{
                        states.firstName.trim() !== "" ? <CheckIcon className={classes.completed} /> :  <></>
                      } </InputAdornment>,
                    }}            
                     fullWidth label="First Name" defaultValue={states.firstName}
              //        helperText="FirstName should not be empty"
              // error={states.firstName.trim() === "" ? true : false}
                      variant="outlined" />
                                       
                    </div>
                    <div style={{width:"50%"}} className="col-md-6">
                    <TextField 
                    onChange={handleChange}   
                    label="Last Name" 
                    defaultValue={states.lastName}
                   name="lastName"
                   InputProps={{
                    endAdornment: <InputAdornment position="end">{
                      states.lastName.trim() !== "" ? <CheckIcon className={classes.completed}/> :  <></>
                    } </InputAdornment>,
                  }}    
                   fullWidth
                    variant="outlined"  />
                    </div>
                   
                    <div className="col-md-12">
                    <br/>
                    <TextField 
                    onChange={handleChange}  
                    defaultValue={states.profession} 
                     label="Profession" 
                     InputProps={{
                      endAdornment: <InputAdornment position="end">{
                        states.profession.trim() !== "" ? <CheckIcon className={classes.completed}/> :  <></>
                      } </InputAdornment>,
                    }}    
                   name="profession"
                    variant="outlined" fullWidth />
                    </div>
                    <div className="col-md-6">
                    <br/>
                    <TextField 
                    onChange={handleChange}   
                     label="City" 
                   name="city"
                   InputProps={{
                    endAdornment: <InputAdornment position="end">{
                      states.city.trim() !== "" ? <CheckIcon className={classes.completed}/> :  <></>
                    } </InputAdornment>,
                  }}    
                   defaultValue={states.city}
                    variant="outlined" fullWidth />
                    </div>
                    <div style={{width:"50%"}} className="col-md-3 state">
                    <br/>
                    <TextField 
                    onChange={handleChange}   
                    defaultValue={states.state}
                     label="State" 
                     InputProps={{
                      endAdornment: <InputAdornment position="end">{
                        states.state.trim() !== "" ? <CheckIcon className={classes.completed}/> :  <></>
                      } </InputAdornment>,
                    }}    
                   name="state" fullWidth
                    variant="outlined"/>                 
                    </div>
                    <div style={{width:"50%"}} className="col-md-3 zip">
                    <br/>
                    <TextField 
                    onChange={handleChange}   
                    defaultValue={states.zipCode}
                    InputProps={{
                      endAdornment: <InputAdornment position="end">{
                        states.zipCode.trim() !== "" ? <CheckIcon className={classes.completed}/> :  <></>
                      } </InputAdornment>,
                    }}    
                     label="Zip Code" 
                   name="zipCode" fullWidth
                    variant="outlined"/>
                    </div>
                    <div  className="col-md-6">
                                  <br/>
                                  <TextField onChange={handleChange} 
                                  defaultValue={states.EmailAddress}
                                  name="EmailAddress"                 
                                  InputProps={{
                                    endAdornment: <InputAdornment position="end">{
                                      states.EmailAddress.match(regEx)  ? <CheckIcon className={classes.completed}/> :  <></>
                                    } </InputAdornment>,
                                  }}    
                                    fullWidth label="Email Address" variant="outlined" />
                                                     
                                  </div>
                    <div  className="col-md-6">
                                  <br/>
                                 
                                 <TextField onChange={handleChange} 
                                  defaultValue={states.PhoneNo}
                                  name="PhoneNo"  
                                  InputProps={{
                                    endAdornment: <InputAdornment position="end">{
                                      states.PhoneNo.trim() !== "" ? <CheckIcon className={classes.completed}/> :  <></>
                                    } </InputAdornment>,
                                  }}                   
                                    fullWidth label="Phone Number" variant="outlined" />
                                 
                                                     
                                  </div>
                <div className="col-md-12">
                  <br/>
                  <Typography variant="body1">
                    Social links
                  </Typography>
                </div>
                {
                  states.social.map((inputField, index) =>(
                   <Fragment key={index}>
                   
                    <div style={{width:"50%"}} className="col-md-6">  
                    <br/>         
                    <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="select socisl-label">Social Platform</InputLabel>
        <Select
        name="socialWebsite"   
          labelId="select socisl-label"
          id="select socisl"
          value={inputField.socialWebsite}
          onChange={e => handleSocialChange(index, e)}
          label="Social"
        >
          
          <MenuItem value="Website">Website</MenuItem>
          <MenuItem value="Facebook">Facebook</MenuItem>
          <MenuItem value="Twitter">Twitter</MenuItem>
          <MenuItem value="Linkden">Linkden</MenuItem>
        </Select>
      </FormControl>
                      </div>
                      <div style={{width:"50%"}} className="col-md-6">   
                      <br/>                         
                                  <TextField onChange={e => handleSocialChange(index, e)}
                                  
                                   InputProps={{
                                    endAdornment: <InputAdornment position="end">{
                                      states.socialLink !== "" ? <CheckIcon className={classes.completed}/> :  <></>
                                    } </InputAdornment>,
                                  }}     name="socialLink"                 
                                    fullWidth label="Link" value={inputField.socialLink} variant="outlined" />
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
               
                </div>
                
            </div>
       </div>

        
        
        <div className="col-md-5">
        <img src={Personal} alt="personal"style={{height:"100%"}} />
        </div>
      
        <div className="col-md-12 next text-right">
               <Button onClick={nextStep} variant="contained" disableElevation  disabled={states.firstName.trim() === "" || states.PhoneNo.trim() === ""  || states.EmailAddress.trim() === ""  || states.lastName.trim() === "" } color="secondary">
          Next Section
        </Button> 
               </div>
        </div>
          </div>
           </>
        )
    }
}

export default withStyles(styles)(BasicDetails)
