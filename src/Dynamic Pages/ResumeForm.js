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
            Loading:true,               
            firstName:"",
            profileImage:"https://firebasestorage.googleapis.com/v0/b/friendme-8be4c.appspot.com/o/177301763352.jpg?alt=media&token=363407fa-563d-462d-98a3-7072f10e1206",
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
            workExperience:[ { company:"",
            jobTitle:"",
            location:"",
            startDate:"",
            endDate:"",
            current:false,
            highlights:""}],
            education:[{
                schoolName:"",
                schoolLocation:"",
                Degree:"",
                startDate:"",
                graduationDate:"",
                currents:false,
                customDegree:"",
                field:"",
                
            }],
            skills:[{
                body:"",
                rating:""
            }],
            
            addRating:false,
            skillsExperience:false,
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

    componentDidMount(){ 
      const  auth = localStorage.getItem("auth") === 'true'
      const step = auth ? JSON.parse(localStorage.getItem("steps")) : this.state.step;
      const firstName = auth ? localStorage.getItem("firstName") : this.state.firstName;
   const lastName = auth ? localStorage.getItem("lastName") : this.state.lastName
   const profession  = auth ?    localStorage.getItem("profession") : this.state.profession
   const address  = auth ?    localStorage.getItem("address") : this.state.address
   const city  = auth ?   localStorage.getItem("city") : this.state.city
   const state  = auth ?   localStorage.getItem("state") : this.state.state
   const zipCode  = auth ?   localStorage.getItem("zipCode") : this.state.zipCode
   const phoneNO  = auth ?  localStorage.getItem("phoneNo") : this.state.PhoneNo
   const EmailAddress = auth ?   localStorage.getItem("EmailAddress") : this.state.EmailAddress
   const social  = auth ?  JSON.parse(localStorage.getItem("social")) : this.state.social
   const workExperience  = auth ?   JSON.parse(localStorage.getItem("workExperience")) : this.state.workExperience
   const education  = auth ?   JSON.parse(localStorage.getItem("education")) : this.state.education
   const skills  = auth ?   JSON.parse(localStorage.getItem("skills")) : this.state.skills
   const addRating  = auth ?  localStorage.getItem("addRating") : this.state.addRating
   const profile = auth ?  localStorage.getItem("profile") : this.state.profile
   const accomplishments  = auth ?  localStorage.getItem("accomplishments") : this.state.accomplishments
   const accomplished  = auth ?  localStorage.getItem("accomplished") : this.state.accomplished
   const certifications  = auth ?  localStorage.getItem("certifications") : this.state.certifications
   const certified  = auth ?  localStorage.getItem("certified") : this.state.certified
   const projects  = auth ?  localStorage.getItem("projects") : this.state.projects
   const projectToggle  = auth ?   localStorage.getItem("projectToggle") : this.state.projectToggle
      
        this.setState({
            step, auth
        })
        if(!this.state.auth){
            setTimeout(
                function() {              
               this.setState({
                   Loading:false
               })
            }.bind(this), 3000)
            console.log(workExperience)
            this.setState({
                firstName:firstName,
                lastName:lastName,
                profession:profession,
                address:address,
                city:city,
                state:state,
                zipCode:zipCode,
                PhoneNo:phoneNO,
                EmailAddress:EmailAddress,
                social:social,
                workExperience:workExperience,
                education:education,
                skills:skills,
                profile:profile,
                addRating:addRating,
                accomplishments:accomplishments,
                accomplished:accomplished,
                certifications:certifications,
                certified:certified,
                projects:projects,
                projectsToggle:projectToggle

            })
          } else{
             this.setState({
                 step
             })
            
          }
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
       localStorage.setItem("firstName", this.state.firstName);
       localStorage.setItem("lastName", this.state.lastName);
       localStorage.setItem("profession", this.state.profession);
       localStorage.setItem("address", this.state.address);
       localStorage.setItem("city", this.state.city);
       localStorage.setItem("state", this.state.lastName);
       localStorage.setItem("zipCode", this.state.zipCode);
       localStorage.setItem("phoneNo", this.state.phoneNo);
       localStorage.setItem("EmailAddress", this.state.EmailAddress);
       localStorage.setItem("social", JSON.stringify(this.state.social));
       localStorage.setItem("workExperience", JSON.stringify(this.state.workExperience));
       localStorage.setItem("education", JSON.stringify(this.state.education));
       localStorage.setItem("skills", JSON.stringify(this.state.skills))
       localStorage.setItem("addRating", this.state.addRating);
       localStorage.setItem("profile", this.state.profile);
       localStorage.setItem("accomplishments", this.state.accomplishments);
       localStorage.setItem("accomplished", this.state.accomplished);
       localStorage.setItem("certifications", this.state.certifications);
       localStorage.setItem("certified", this.state.certified);
       localStorage.setItem("projects", this.state.projects);
       localStorage.setItem("ProjectsToggle", this.state.ProjectsToggle);
   }
   prevStep = () =>{
       const { step } = this.state
       this.setState({
           step: step - 1
       })
       localStorage.setItem("resumeData", JSON.stringify(this.state))
       localStorage.setItem("steps", this.state.step - 1 )
       
       localStorage.setItem("condition", this.state.auth)
   }
   skipStep = () =>{
    const { step } = this.state
    this.setState({
        step: step + 2
    })
   }
   handleTogglesChange = (index, event) => {  
       const workExperience = [...this.state.workExperience]
       workExperience[index][event.target.name] = event.target.checked
    this.setState({
        workExperience
    })    
   }
   handleToggleChanges = (index, event) => {  
       const education = [...this.state.education]
       education[index][event.target.name] = event.target.checked
    this.setState({
        education
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
   handleWorkExperienceSummary = (value, index) =>{
    let work = [...this.state.workExperience];
    work[index] =  {...work[index], highlights: value}
    this.setState({
        workExperience: work
    })
    console.log(value)
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
                graduationDate:"",
                currents:false,
                customDegree:"",
                field:""
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
           current:false,
           highlights:""}]
       }))
   }
   handleSkillsRating = (value) =>{
       const skills = [...this.state.skills]
       const index = skills.findIndex(el => el.rating === "rating");
      skills[index] = {...skills[index], rating: value}
      this.setState({
          skills
      })
      console.log(value)
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
                   <>
                   {
                       this.state.Loading ?
                       <StartLoad />:
                       <BasicDetails
                       nextStep={this.nextStep}
                       handleChange={this.handleChange}
                       handleSocialChange ={this.handleSocialChange}
                       removeSocial = {this.removeMoreSocial}
                       states={this.state}
                       save
                       addSocial={this.addMoreSocial} 
                       />
                  
                   }
                   </>
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
                    handleRole={this.handleRole}
                    nextStep={this.nextStep}
                    remove={this.removeMoreWork}
                    add={this.addMoreWork}
                    summary={this.handleWorkExperienceSummary}
                    handleWorkExperience={this.handleWorkExperience}
                    current={this.handleTogglesChange}
                    prevStep={this.prevStep}
                    states={this.state}/>
                )
            case 4:
                return(
                    <EducationTips nextStep={this.nextStep}
                    skipStep={this.skipStep}
                   prevStep={this.prevStep}
                    />
                )
            case 5:
                return(
                    <Education
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    current={this.handleToggleChanges}
                    addEducation={this.addEducation}
                    eduInput={this.handleEduInput}
                    deleteEdu={this.deleteEducation}
                    states={this.state}/>
                )  
            case 6:
            return(
                <Skills
                nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    valuetext={this.handleSkillsRating}
                    handleToggle={this.handleToggleChange}
                skillInput={this.handleSkillInput}
                addSkills={this.addSkills}
                delSkills={this.delSkill}
                states={this.state}/>

            )     
            case 7:
            return(
                <ProfileTips
                nextStep={this.nextStep}
                    skipStep={this.skipStep}
                   prevStep={this.prevStep}/>

            )     
            case 8:
            return(
                <Profile
                nextStep={this.nextStep}
                    skipStep={this.skipStep}
                    handleProfile={this.handleProfile}
                    states={this.state}
                   prevStep={this.prevStep}/>
              
            )   
            case 9:
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
            case 10:
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
