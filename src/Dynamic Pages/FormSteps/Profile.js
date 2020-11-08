import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // ES6
import ProgressBar from 'react-progressbar-on-scroll';
import Button from '@material-ui/core/Button';
import Basic from "./Stepper/Basic";
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Personal from "./summary.svg";
import IconButton from '@material-ui/core/IconButton';
import MobileStepper from '@material-ui/core/MobileStepper';
import {Helmet} from "react-helmet";


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
export class Profile extends Component {
    render() {
        const { classes} = this.props;
        const { states,
            prevStep, nextStep, handleProfile} = this.props
        return (
            <>
             <Helmet>
               
               <title>Professional Summary - React app</title>
               
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
<Basic activeSteps={4} />
                </div>
              </Toolbar>
            </AppBar>
            <div className="container workContainer">
          <div className="row">
          <div className="col-md-12 text-center mobileStepper">
        <MobileStepper
      variant="dots"
      className={classes.step}
      steps={10}
      position="static"
      activeStep={7}
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
                Briefly tell us about your background 
                </Typography>
                <Typography  gutterBottom className="BasicSub"  variant="body1">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, mollitia?
                </Typography>
                
                <div className="row experienceInput">
            <div className="col-md-12 Quill">
            <ReactQuill 
          theme="snow"
          onChange={handleProfile}
          value={states.profile}
          modules={Profile.modules}
          formats={Profile.formats}
          bounds={'.app'}
          placeholder="Write your summary here..."
         />
            </div>
              
     
     
     
     </div>
       </div>
               </div>
               <div style={{marginTop:"8vh"}} className="col-md-5">
               <img src={Personal} alt="work"/>
          </div>
          <div className="col-md-6 Previous">
        <Button onClick={prevStep} variant="text"  color="secondary">
        <KeyboardArrowLeft /> Previous
        </Button> 
        </div>
        <div className="col-md-6 text-right next">
        <Button onClick={nextStep} variant="contained" disableElevation color="secondary">
          Next Section Extras
        </Button> 
        </div>
          </div>
         
          </div>
           </div>
            </>
        )
    }
}

Profile.modules = {
    toolbar: [
      [{ 'header': '1'}, { 'header': '2'},],
      [{size: []}],
      ['bold', 'italic', 'underline', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, 

      // {'indent': '-1'}, {'indent': '+1'}, 
     ],
      // ['link', 'image', 'video'],
      // ['clean']
    ],
    // { 'color': ['#000000', '#e60000', '#ff9900', '#ffff00', '#008a00', '#0066cc', '#9933ff', '#ffffff', '#facccc', '#ffebcc', '#ffffcc', '#cce8cc', '#cce0f5', '#ebd6ff', '#bbbbbb', '#f06666', '#ffc266', '#ffff66', '#66b966', '#66a3e0', '#c285ff', '#888888', '#a10000', '#b26b00', '#b2b200', '#006100', '#0047b2', '#6b24b2', '#444444', '#5c0000', '#663d00', '#666600', '#003700', '#002966', '#3d1466', 'custom-color'] }, { 'background': [] },
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    }
  }

Profile.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet',  'indent',
    'color', 'background'
  ]

export default withStyles(styles)(Profile)
