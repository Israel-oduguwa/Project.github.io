import React, { Component } from 'react';
import BasicDetails from "./FormSteps/BasicDetails";
import WorkExperienceTips from "./FormSteps/WorkExperienceTips";
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
            social:[],           
            workExperience:[{
            company:"",
            jobTitle:"",
            location:"",
            startDate:"",
            endDate:"",
            role:"",
          
            }]
      
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
   skipStep = () =>{
    const { step } = this.state
    this.setState({
        step: step + 2
    })
   }
   //handle the Input Change
   handleChange = (e) => {
       this.setState({
            [e.target.name]: e.target.value            
       })
     
   }
   handleSocialChange = (index, e) =>{
    const social = [...this.state.social]
    social[index][e.target.name] = e.target.value;
    this.setState({
        social
    })
   }
   handleWorkExperience = (index , e) =>{
    const workExperience = [...this.state.workExperience]
    workExperience[index][e.target.name] = e.target.value;
    this.setState({
        workExperience
    })
   }
   addMoreWork = (e) =>{
       this.setState((prevState) =>({
           workExperience:[...prevState.workExperience, { company:"",
           jobTitle:"",
           location:"",
           startDate:"",
           endDate:"",
           role:"",}]
       }))
   }
   removeMoreWork = (index) =>{
       const workExperience = [...this.state.workExperience]
       workExperience.splice(index, 1);
       this.setState({
           workExperience
       })
   }
   addMoreSocial = (e) =>{
       this.setState((prevState) =>({
           social:[...prevState.social, {socialWebsite:"", socialLink:""}]
       }))
   }
   removeMoreSocial = (index) =>{
    const social = [...this.state.social]
    social.splice(index, 1);
    this.setState({
        social
    })
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
                   removeSocial = {this.removeMoreSocial}
                   states={this.state}
                   addSocial={this.addMoreSocial} 
                   />
               )
               case 2:
               return(
                   <WorkExperienceTips nextStep={this.nextStep}
                    skipStep={this.skipStep}
                   prevStep={this.prevStep}
                    />
               )
            case 3:
                return(
                    <WorkExperience
                    nextStep={this.nextStep}
                    remove={this.removeMoreWork}
                    add={this.addMoreWork}
                    handleWorkExperience={this.handleWorkExperience}
                    prevStep={this.prevStep}
                    states={this.state}/>
                )
            case 4:
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
