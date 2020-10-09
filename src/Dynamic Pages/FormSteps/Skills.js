import React, { Component } from 'react';
import Card from "@material-ui/core/Card";
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import Divider from '@material-ui/core/Divider';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
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
export class Skills extends Component {
    render() {
        const { classes} = this.props;
        const { states,addSkills, skillInput,
            prevStep, nextStep, delSkills } = this.props
        return (
            <>
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
        <Grid item xs={12} sm={9} >
            <div className="Heading">
                <Typography  gutterBottom  variant="h5">
               What are your Skills
                </Typography>
                <Typography  gutterBottom  variant="body1">
                   
                </Typography>
                <br/>
                <div className="row">
            
              <div className="col-md-12">
              <IconButton onClick={addSkills}>
           <AddIcon/>
        </IconButton>
              </div>
     
           {
               states.skills.map((skills, index) =>(
                  <>
                   <div key={index} className="col-md-12">
                       <Card>
                           <CardHeader action={
                               <IconButton onClick={() => delSkills(index)} >
                                   <DeleteIcon/>
                               </IconButton>
                            
                           }/>
                           <CardContent>
                           <TextField 
                    onChange={e => skillInput(index, e)}   
                    value={skills.body}
                     label="" 
                   name="body" fullWidth
                    variant="outlined"/> 
                           </CardContent>
                       </Card>
                   </div>
                   <br/>
                  </>
               ))
           }
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

export default withStyles(styles)(Skills)
