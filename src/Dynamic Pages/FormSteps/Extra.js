import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // ES6
import Basic from "./Stepper/Basic";
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Personal from "./Professor.svg";
import MobileStepper from '@material-ui/core/MobileStepper';
import CheckIcon from '@material-ui/icons/Check';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import ProgressBar from 'react-progressbar-on-scroll';
import IconButton from '@material-ui/core/IconButton';

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

export class Extra extends Component {
   

    
    render() {
        const { classes} = this.props;
        const { states,handleAccomp,handleCert, handleCustom, handleProject, handleActivities, handleInterest, handleLanguages,
            prevStep, nextStep, handleToggle } = this.props;
        return (
            <>
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
                  Israel
                </Typography>
                <div className="stepper">
<Basic activeSteps={5} />
                </div>
                
              </Toolbar>
            </AppBar>
            <div className="container">
              <div className="row">
              <div className="col-md-12 text-center mobileStepper">
        <MobileStepper
      variant="dots"
      className={classes.step}
      steps={10}
      position="static"
      activeStep={8}
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
                Do you have anything else to add?
                </Typography>
                <Typography  gutterBottom className="BasicSub" variant="body1">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, cumque!
                </Typography>
                <br/>
                <div className="row Tips">

              <div className="col-md-6">
            <Typography variant="h6"> Accomplishment </Typography> 

            <Checkbox name="accomplished" 
            inputProps={{ 'aria-label': 'primary checkbox' }} 
            checked={states.accomplished} 
            onChange={handleToggle} />

              { states.accomplished ?
             <ReactQuill 
             theme="snow"
             onChange={handleAccomp
            }
             value={states.accomplishments || ''}
             modules={Extra.modules}
             formats={Extra.formats}
             bounds={'.app'}
             placeholder="accomplishments"
            /> : 
            <> </>}
              </div>
              <div className="col-md-6">
            <Typography variant="h6"> Certificate </Typography> 
            <Checkbox name="certified" inputProps={{ 'aria-label': 'primary checkbox' }}
             checked={states.certified}
              onChange={handleToggle}/>
              { states.certified ?
             <ReactQuill 
             theme="snow"
             onChange={handleCert}
             value={states.certifications || ''}
             modules={Extra.modules}
             formats={Extra.formats}
             bounds={'.app'}
             placeholder="Enter your Profile"
            />: <> </>}
              </div>
              <div className="col-md-6">
            <Typography variant="h6"> Projects </Typography> 
            <Checkbox name="projectToggle" inputProps={{ 'aria-label': 'primary checkbox' }}
             checked={states.projectToggle}
              onChange={handleToggle}/>
              { states.projectToggle ?
             <ReactQuill 
             theme="snow"
             onChange={handleProject}
             value={states.projects || ''}
             modules={Extra.modules}
             formats={Extra.formats}
             bounds={'.app'}
             placeholder="Enter your Profile"
            />: <> </>}
              </div>
              <div className="col-md-6">
            <Typography variant="h6"> Activities </Typography> 
            <Checkbox name="activitiesToggle" inputProps={{ 'aria-label': 'primary checkbox' }}
             checked={states.activitiesToggle}
              onChange={handleToggle}/>
              { states.activitiesToggle ?
             <ReactQuill 
             theme="snow"
             onChange={handleActivities}
             value={states.activities|| ''}
             modules={Extra.modules}
             formats={Extra.formats}
             bounds={'.app'}
             placeholder="Enter your Profile"
            />: <> </>}
              </div>
              <div className="col-md-6">
            <Typography variant="h6"> Interests </Typography> 
            <Checkbox name="interestToggle" inputProps={{ 'aria-label': 'primary checkbox' }}
             checked={states.interestToggle}
              onChange={handleToggle}/>
              { states.interestToggle ?
             <ReactQuill 
             theme="snow"
             onChange={handleInterest}
             value={states.interest|| ''}
             modules={Extra.modules}
             formats={Extra.formats}
             bounds={'.app'}
             placeholder="Enter your Profile"
            />: <> </>}
              </div>
              <div className="col-md-6">
            <Typography variant="h6">Languages </Typography> 
            <Checkbox name="languagesToggle" inputProps={{ 'aria-label': 'primary checkbox' }}
             checked={states.languagesToggle}
              onChange={handleToggle}/>
              { states.languagesToggle ?
             <ReactQuill 
             theme="snow"
             onChange={handleLanguages}
             value={states.languages|| ''}
             modules={Extra.modules}
             formats={Extra.formats}
             bounds={'.app'}
             placeholder="Languages"
            />: <> </>}
              </div>
              <div className="col-md-6">
            <Typography variant="h6"> Add your own Section</Typography> 
            <Checkbox name="customToggle" inputProps={{ 'aria-label': 'primary checkbox' }}
             checked={states.customToggle}
              onChange={handleToggle}/>
              { states.customToggle ?

             <ReactQuill 
             theme="snow"
             onChange={handleCustom}
             value={states.custom|| ''}
             modules={Extra.modules}
             formats={Extra.formats}
             bounds={'.app'}
             placeholder="Enter your Profile"
            />: <> </>}
              </div>
     
          
       
       </div>
      
               </div>
               <div className="col-md-6 Previous">
        <Button onClick={prevStep} variant="text" color="secondary">
        <KeyboardArrowLeft /> Previous  
        </Button> 
        </div>
        <div className="col-md-6 text-right next">
        <Button onClick={nextStep} variant="contained" disableElevation color="secondary">
         Finalize
        </Button> 
        </div>
              </div>
          </div>
            </>
        )
    }
}



Extra.modules = {
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
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    }
  }

Extra.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet',  
    // 'indent',
    'link',  'color', 
  ]

export default withStyles(styles)(Extra)
