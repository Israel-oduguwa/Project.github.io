import React, { Component } from 'react';
import Card from "@material-ui/core/Card";
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import AddIcon from '@material-ui/icons/Add';
import Divider from '@material-ui/core/Divider';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // ES6
import TextField from '@material-ui/core/TextField';
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
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

export class Extra extends Component {
   

    
    render() {
        const { classes} = this.props;
        const { states,handleAccomp,handleCert, handleCustom, handleProject, handleActivities, handleInterest, handleLanguages,
            prevStep, nextStep, handleToggle } = this.props;
        return (
            <>
             <AppBar color="appBar" position="static">
              <Toolbar>              
                <Typography variant="h6" className="form-logo">
                  Israel
                </Typography>
                <Typography variant="h6">
                  Extra Information
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
                Do you have anything else to add?
                </Typography>
                <Typography  gutterBottom  variant="body1">
                These sections are optional.
                </Typography>
                <br/>
                <div className="row">

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
             placeholder="Enter your Profile"
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
     
          
       {/* <div className="col-md-6">
        <Button onClick={prevStep} variant="contained" style={{boxShadow: "0 3px 5px 2px rgb(195 14 81 / 30%)"}} color="secondary">
         Back
        </Button> 
        </div>
        <div className="col-md-6 text-right">
        <Button onClick={nextStep} variant="contained" style={{boxShadow: "0 3px 5px 2px rgb(195 14 81 / 30%)"}} color="secondary">
          Next
        </Button> 
        </div> */}
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
