import React, { Component } from 'react';
import SvgImage from "./undraw_organize_resume_utk5.svg";
import { Fade } from "react-awesome-reveal";

export class RightIntro extends Component {
    render() {
        return (
            <Fade direction="right" duration={1300} >
            <div>
                Finish the Illustrayion  by adding finishing touches{ "(for Now Skip)"} 
               <img src={SvgImage} className="introImage" alt="IntroImage"/>
            </div>
            </Fade>
        )
    }
}

export default RightIntro
