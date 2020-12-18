import React, { Component } from 'react';
import DashBoard from "../AdminComponent/DashBoard";
import Typography from '@material-ui/core/Typography';
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent";
export class Admin extends Component {
  
    render() {
        return (
                  <DashBoard>
                     <div className="container" style={{padding:"2rem 2.5rem"}}>
                       <div className="row">
                           <div className="col-md-12">
                           <div className="pageHead">
                             <Typography variant="subtitle">DASHBOARD</Typography>
                             <Typography variant="h4">Overview</Typography>
 
                         </div>
                     </div>
                     <div className="row">
                         <div className="col-md-4">
                         <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Simple Resume
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           This Resume is Simple and elegant for HighSchool and college students
          </Typography>
        </CardContent>
            
            </Card>
                         </div>
                         <div className="col-md-4">
                         <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Simple Resume  
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           This Resume is Simple and elegant for HighSchool and college students
          </Typography>
        </CardContent>
            
            </Card>
                         </div>
                         <div className="col-md-4">
                         <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Simple Resume
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           This Resume is Simple and elegant for HighSchool and college students
          </Typography>
        </CardContent>
            
            </Card>
                         </div>
                       
                     </div>
                           </div>
                       </div>
                  </DashBoard>
                  
        )
    }
}

export default Admin
