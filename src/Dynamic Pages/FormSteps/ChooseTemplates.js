import React, { Component } from 'react';
import Example from "./ResumeTemplates/Example";
import Button from '@material-ui/core/Button';

export class ChooseTemplates extends Component {
    render() {
        const { states,
            prevStep, nextStep } = this.props
        return (
           <div className="container">
               <div className="row">
                   <div className="col-md-5">
                       <Example state={states}/>
                   </div>

                  <div className="row">
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
        )
    }
}

export default ChooseTemplates
