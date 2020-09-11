import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Svg from "./undraw_hiring_cyhs.svg";
import { withStyles } from '@material-ui/core/styles';

const styles = theme =>({
    Card:{
        marginTop:"2vh"
    }
})
export class LandingPageStep3 extends Component {
    render() {
        const { classes }= this.props;
        return (
           <div className="container">
               <div className="row text-center">
                   <div className="Step3Title">
                    <Typography variant="h4" gutterBottom >
                        Build A  Professional Resume in 3 simple Steps
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque delectus, quisquam aspernatur deserunt cupiditate sequi vero aliquam quasi inventore culpa.
                    </Typography>
                   </div>
                 
                 <div className="cards-container">
                 <div className="row">
                 <div className="col-md-4">
                       <Card className={classes.Card}>
                           <CardMedia>
                           <img src={Svg} alt="tsetIamge" className="TestImage"/>
                           </CardMedia>
                           <CardContent>
                               <Typography variant="body2">
                                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem obcaecati tempore quae neque ipsa modi aperiam voluptas pariatur maxime ratione magni, necessitatibus expedita!
                               </Typography>

                           </CardContent>
                       </Card>
                   </div>

                   <div className="col-md-4">
                   <Card className={classes.Card}>
                           <CardMedia>
                           <img src={Svg} alt="tsetIamge" className="TestImage"/>
                           </CardMedia>
                           <CardContent>
                           <Typography variant="body2">
                                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem obcaecati tempore quae neque ipsa modi aperiam voluptas pariatur maxime ratione magni, necessitatibus expedita!
                               </Typography>
                           </CardContent>
                       </Card>
                   </div>
                   <div className="col-md-4">
                   <Card className={classes.Card}>
                           <CardMedia>
                           <img src={Svg} alt="tsetIamge" className="TestImage"/>
                           </CardMedia>
                           <CardContent>
                                                            <Typography variant="body2">
                                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem obcaecati tempore quae neque ipsa modi aperiam voluptas pariatur maxime ratione magni, necessitatibus expedita!
                               </Typography>
                           </CardContent>
                       </Card>
                     </div>
                    </div>
                 </div>
               </div>
           </div>
        )
    }
}

export default withStyles(styles)(LandingPageStep3)
