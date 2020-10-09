import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // ES6
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
export class Profile extends Component {
    render() {
        const { classes} = this.props;
        const { states,
            prevStep, nextStep, handleProfile} = this.props
        return (
            <>
            <AppBar color="appBar" position="static">
              <Toolbar>              
                <Typography variant="h6" className="form-logo">
                  Israel
                </Typography>
                <Typography variant="h6">
                  Summary
                </Typography>
              </Toolbar>
            </AppBar>
            <div className="containers">
          <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          
        </Grid>
        <Grid item xs={12} sm={9} >
            <div className="Heading">
                <Typography  gutterBottom  variant="h5">
                Briefly tell us about your background Profile
                </Typography>
                <Typography  gutterBottom  variant="body1">
                Get help writing your bullet points with the pre-written examples below.
                </Typography>
                <br/>
                <div className="row">
            <div className="col-md-12">
            <ReactQuill 
          theme="snow"
          onChange={handleProfile}
          value={states.profile}
          modules={Profile.modules}
          formats={Profile.formats}
          bounds={'.app'}
          placeholder="Enter your Profile"
         />
            </div>
              
     <div className="bt" style={{marginTop:"3vh"}}>
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

Profile.modules = {
    toolbar: [
      [{ 'header': '1'}, { 'header': '2'}, { 'font': [] }],
      [{size: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}, { 'color': ['#000000', '#e60000', '#ff9900', '#ffff00', '#008a00', '#0066cc', '#9933ff', '#ffffff', '#facccc', '#ffebcc', '#ffffcc', '#cce8cc', '#cce0f5', '#ebd6ff', '#bbbbbb', '#f06666', '#ffc266', '#ffff66', '#66b966', '#66a3e0', '#c285ff', '#888888', '#a10000', '#b26b00', '#b2b200', '#006100', '#0047b2', '#6b24b2', '#444444', '#5c0000', '#663d00', '#666600', '#003700', '#002966', '#3d1466', 'custom-color'] }, { 'background': [] },
     ],
      ['link', 'image', 'video'],
      ['clean']
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    }
  }

Profile.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet',  'indent',
    'link', 'image', 'video', 'color', 'background'
  ]

export default withStyles(styles)(Profile)
