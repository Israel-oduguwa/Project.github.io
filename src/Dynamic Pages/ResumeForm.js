import React, { Component } from 'react';
import BasicDetails from "./FormSteps/BasicDetails";
import WorkExperience from "./FormSteps/WorkExperience";
export class ResumeForm extends Component {
    state={ 
            step:1,
                  
            firstName:"",
            lastName:"",
            profession:"",       
            address:"",
            city:"",
            state:"",
            zipCode:"",       
            PhoneNo:"",
            EmailAddress:"",
            social:[{
                socialWebsite:"",
                socialLink:"",
            }],
            website:"",
            company:"",
            jobTitle:"",
            cityies:"",
            startDate:"",
            endDate:"",
            highlights:"",
            summary:""
      
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
   handleChange = (e) => {
       this.setState({
            [e.target.name]: e.target.value            
       })
     
   }
   handleSocialChange = (index, e) =>{
    const social = [...this.state.social];
    social[index][e.target.name] = e.target.value;
    this.setState({
        social
    })
   }
   addMoreSocial = (e) =>{
       this.setState((prevState) =>({
           social:[...prevState.social, {socialWebsite:"", socialLink:""}]
       }))
   }
   removeMoreSocial = ( e) =>{
  
   }
    render() {
        const { step } = this.state
        
       switch(step){
           case 1:
               return(
                   <BasicDetails
                   nextStep={this.nextStep}
                   handleChange={this.handleChange}
                   handleSocialChange ={this.handleSocialChange}
                   states={this.state}
                   addSocial={this.addMoreSocial} 
                   />
               )
            case 2:
                return(
                    <WorkExperience
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    states={this.state}/>
                )
            case 3:
                return(
                  <h1>Last</h1>
                )
               
                default:
                    return(
                        <h1>Default</h1>
                    )
           
       }
    }
}

export default ResumeForm
