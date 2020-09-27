import React, { Component } from 'react';
import BasicDetails from "./FormSteps/BasicDetails";
import WorkExperience from "./FormSteps/WorkExperience";
export class ResumeForm extends Component {
    state={ 
        step:1,
        basicDetails:{
        firstName:"",
        lastName:"",
        profession:"",
        location:{
        address:"",
        city:"",
        state:"",
        zipCode:"",
        },
        PhoneNo:"",
        EmailAddress:"",
        social:[{
            socialWebsite:"",
            socialLink:""
        }],
        website:""
        },
        workExperience:{
            company:"",
            jobTitle:"",
            city:"",
            startDate:"",
            endDate:"",
            highlights:"",
            summary:""
        }
    }
   // The change step metthod
   nextStep = () =>{
       const { step } = this.state
       this.setState({
           step: step + 1
       })
   }
   prevStep = () =>{
       const { step } = this.state
       this.setState({
           step: step - 1
       })
   }
   //handle the Input Change
   handleChange = (e) =>{
       this.setState({
           [e.target.name]:e.target.value
       })
   }
    render() {
        const { step } = this.state
        const { basicDetails, workExperience } = this.state
       switch(step){
           case 1:
               return(
                   <BasicDetails
                   nextStep={this.nextStep}
                   handleChange={this.handleChange}
                   details={basicDetails}/>
               )
            case 2:
                return(
                    <WorkExperience
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    work={workExperience}/>
                )
            case 3:
                return(
                  <h1>Last</h1>
                )
           
       }
    }
}

export default ResumeForm
