import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Fade, Bounce } from "react-awesome-reveal";
import Link from 'react-router-dom/Link';

export class TopIntro extends Component {
    render() {
        // const {classes} = this.props
        return (
           <div className="introContainer">
               <Fade direction="down" duration={500} cascade>
               <Typography gutterBottom variant="h3">
                   Lorem ipsum dolor sit amet 
               </Typography>
            <Typography gutterBottom variant="body1">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore,
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, iusto!.               
            </Typography>
               </Fade>
            <br/>
            <Bounce delay={600}>           
        <Button component={Link} to="/resume-templates" variant="contained" size ="large" style={{boxShadow: "0 3px 5px 2px rgb(195 14 81 / 30%)"}} color="secondary">
          Create My Resume
        </Button>    
            </Bounce>
           </div>
        )
    }
}

export default TopIntro
