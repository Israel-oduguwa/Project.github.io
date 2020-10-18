import React, { Component } from 'react';
import BasicDetails from "./FormSteps/BasicDetails";
import WorkExperienceTips from "./FormSteps/WorkExperienceTips";
import WorkExperience from "./FormSteps/WorkExperience";
import EducationTips from "./FormSteps/EducationTips";
import Education from "./FormSteps/Education";
import Skills from "./FormSteps/Skills";
import ProfileTips from "./FormSteps/ProfileTips";
import Profile from "./FormSteps/Profile";
import ChooseTemplates from "./FormSteps/ChooseTemplates";
import Extra from "./FormSteps/Extra";
import StartLoad from "./FormSteps/StartLoad";
export class ResumeForm extends Component {
    state={ 
            step: 1,                 
            firstName:"",
            auth:false,
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
            highlights:""

            }],
            education:[{
                schoolName:"",
                schoolLocation:"",
                Degree:"",
                startDate:"",
                graduationDate:""
            }],
            skills:[{
                body:"",
                rating:""
            }],
            profile:"",
            accomplishments:"",
            accomplished:false,
            certifications:"",
            certified:false,
            projects:"",
            projectToggle:false,
            interest:"",
            interestToggle:false,
            languages:"",
            languagesToggle:false,            
            activities:"",
            activitiesToggle:false,
            customTitle:"",
            customToggle:false,
            custom:"",
    }
   handleProjects = (value) =>{
       this.setState({
           projects:value
       })
   }
   handleInterest = (value) =>{
       this.setState({
        interest:value
       })
   }
   handleLanguages = (value) =>{
       this.setState({
           languages:value
       })
   }
   handleActivities = (value) =>{
       this.setState({
           activities:value
       })
   }
   handleCustom = (value) =>{
       this.setState({
           custom:value
       })
   }
    componentDidMount(){
     
      const  auth = localStorage.getItem("auth") === 'true'
      const step = auth ? JSON.parse(localStorage.getItem("steps")) : this.state.step
        this.setState({
            step, auth
        })
        
        if(this.state.step === 1 ){
            setTimeout(function() { 
               
               this.setState({
                   step: 2
               })
            }.bind(this), 4000)
          }else{
              console.log("HI")
          }
    }
    handleAccomp = (value) =>{
        this.setState({
            accomplishments:value
        })
    }
    handleCert = (value) =>{
        this.setState({
            certifications:value
        })
    }
    handleToggleChange = (event) => {  
        this.setState({
            [event.target.name]: event.target.checked
        })     
    
        
       };
   // The change step metthod
   nextStep = () =>{
       const { step } = this.state
       this.setState({
           step: step + 1,
          
       })
       this.setState({
           auth:true
       })
       localStorage.setItem("resumeData", JSON.stringify(this.state))
       console.log(JSON.parse(localStorage.getItem("resumeData")))
       localStorage.setItem("steps", this.state.step + 1)
       localStorage.setItem("auth", this.state.auth)
   }
   prevStep = () =>{
       const { step } = this.state
       this.setState({
           step: step - 1
       })
       localStorage.setItem("steps", this.state.step - 1 )
       localStorage.setItem("condition", this.state.auth)
   }
   skipStep = () =>{
    const { step } = this.state
    this.setState({
        step: step + 2
    })
   }
   handleProfile = (value) =>{
       this.setState({
           profile:value
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
   handleEduInput = (index, e) =>{
       const Edu =[...this.state.education]
       Edu[index][e.target.name] = e.target.value;
       this.setState({
           Edu
       })
   }
   handleSkillInput = (index, e) =>{
       const skill =[...this.state.skills]
      skill[index][e.target.name] = e.target.value;
       this.setState({
          skill
       })
   }
   addSkills = () =>{
       this.setState((prevState) => ({
           skills:[...prevState.skills, {
               body:""
           }]
       }))
   }
   delSkill = (index) =>{
       const skills = [...this.state.skills]
       skills.splice(index, 1)
       this.setState({
           skills
       })
   }
   handleWorkExperience = (index , e) =>{
    const workExperience = [...this.state.workExperience]
    workExperience[index][e.target.name] = e.target.value;
    this.setState({
        workExperience
    })
   }
   addEducation = () =>{
       this.setState((prevState) => ({
           education:[...prevState.education, {
            schoolName:"",
            schoolLocation:"",
            Degree:"",
            startDate:"",
            graduationDate:""
        } ]
       }))
   }
   deleteEducation = (index) =>{
    const education = [...this.state.education]
    education.splice(index, 1);
    this.setState({
        education
    })
   }
   addMoreWork = (e) =>{
       this.setState((prevState) =>({
           workExperience:[...prevState.workExperience, { company:"",
           jobTitle:"",
           location:"",
           startDate:"",
           endDate:"",
           highlights:""}]
       }))
   }
   
   handleRole = (value) =>{
    const workExperience = [...this.state.workExperience]
       const index = workExperience.findIndex(el => el.highlights === "highlights");
       workExperience[index] = {...workExperience[index], highlights: value}
       this.setState({
           workExperience
       })
    console.log(value)
   }
 handleRoleInput = (index, e) =>{
     const role = [...this.state.workExperience.map(roles => roles.highlights)]
     role[index][e.target.name] = e.target.value;
     this.setState({
         role
     })
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
                   <StartLoad />
               )
           case 2:
               return(
                   <BasicDetails
                   nextStep={this.nextStep}
                   handleChange={this.handleChange}
                   handleSocialChange ={this.handleSocialChange}
                   removeSocial = {this.removeMoreSocial}
                   states={this.state}
                   save
                   addSocial={this.addMoreSocial} 
                   />
               )
               case 3:
               return(
                   <WorkExperienceTips nextStep={this.nextStep}
                    skipStep={this.skipStep}
                   prevStep={this.prevStep}
                    />
               )
            case 4:
                return(
                    <WorkExperience
                    handleRole={this.handleRole}
                    nextStep={this.nextStep}
                    remove={this.removeMoreWork}
                    add={this.addMoreWork}
                    handleWorkExperience={this.handleWorkExperience}
                    prevStep={this.prevStep}
                    states={this.state}/>
                )
            case 5:
                return(
                    <EducationTips nextStep={this.nextStep}
                    skipStep={this.skipStep}
                   prevStep={this.prevStep}
                    />
                )
            case 6:
                return(
                    <Education
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    addEducation={this.addEducation}
                    eduInput={this.handleEduInput}
                    deleteEdu={this.deleteEducation}
                    states={this.state}/>
                )  
            case 7:
            return(
                <Skills
                nextStep={this.nextStep}
                    prevStep={this.prevStep}
                skillInput={this.handleSkillInput}
                addSkills={this.addSkills}
                delSkills={this.delSkill}
                states={this.state}/>

            )     
            case 8:
            return(
                <ProfileTips
                nextStep={this.nextStep}
                    skipStep={this.skipStep}
                   prevStep={this.prevStep}/>

            )     
            case 9:
            return(
                <Profile
                nextStep={this.nextStep}
                    skipStep={this.skipStep}
                    handleProfile={this.handleProfile}
                    states={this.state}
                   prevStep={this.prevStep}/>
              
            )   
            case 10:
                return(
                   <Extra
                   nextStep={this.nextStep}
                    skipStep={this.skipStep}
                    states={this.state}
                    handleToggle={this.handleToggleChange}
                    handleCert={this.handleCert}
                    handleAccomp={this.handleAccomp}
                    handleProject={this.handleProjects}
                    handleLanguages={this.handleLanguages}
                    handleInterest={this.handleInterest}
                    handleActivities={this.handleActivities}
                    handleCustom={this.handleCustom}
                    prevStep={this.prevStep}/>
                )  
            case 11:
                return(
                    <ChooseTemplates  nextStep={this.nextStep}
                    skipStep={this.skipStep}
                    states={this.state} 
                    prevStep={this.prevStep} />
                )
                default:
                    return(
                       <h3>hi</h3>
                    )
           
       }
    }
}

export default ResumeForm
