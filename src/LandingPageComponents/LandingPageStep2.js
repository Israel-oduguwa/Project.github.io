import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Svg from "./undraw_hiring_cyhs.svg";
import Button from '@material-ui/core/Button';
import {  Bounce } from "react-awesome-reveal"

export class LandingPageStep2 extends Component {
    render() {
        return (
            <div className="container">
                <div className="row text-center">
                    
                    <div className="col-md-12">
                    <div className="Step2Title">
                        <Typography variant="h5" gutterBottom align="center">
                            Lorem ipsum dolor sit amet consectetur.
                        </Typography>
                    </div>
                  <div className="innerPreview">
                  {"(descriprtions) This is going to be image of examples of Resumes made by the app like a show case"}
                        <img src={Svg} alt="tsetIamge" className="TestImage"/>
                  </div>
                  <br/>
                  <Bounce delay={600}>           
                    <Button variant="contained" style={{boxShadow: "0 3px 5px 2px rgb(195 14 81 / 30%)"}} color="secondary">
                   Choose Templates
                    </Button>    
                  </Bounce>
                    </div>
                </div>
            </div>
        )
    }
}

export default LandingPageStep2
