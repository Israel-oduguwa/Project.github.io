import React, { Component } from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ReactToPrint from "react-to-print";
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';
import Interweave from "interweave";



const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  
export class Example extends Component {
    state={open:false}
    open = () =>{
        this.setState({
            open:true
        })
    }
    handleClose = () =>{
        this.setState({
            open:false
        })
    }
    render() {
        const { profile,
          lastName,
            profession,       
            address,
            city,
            state,
            zipCode,       
            PhoneNo,
            skills,
            accomplishments,
            accomplished,
            certifications,
            certified,
            projects,
            projectToggle,
            interest,
            interestToggle,
            languages,
            languagesToggle,            
            activities,
            activitiesToggle,
            addRating,
            education,
            workExperience,
            EmailAddress,
            firstName} =this.props.state
        return (
           <>
            <Card>
                <CardActionArea onClick={this.open}>
                <CardMedia
         
          image="https://cdn-images.zety.com/images/zety/landings/examples/teacher-resume-example@3x.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Simple Resume
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Simple but proffesional resume catvheds the Hr
          </Typography>
        </CardContent>
                </CardActionArea>
            </Card>
            <Dialog fullScreen open={this.state.open} TransitionComponent={Transition} onClose={this.handleClose}>
        
            <div  className="containersh" style={{background: "#fff",
    margin: "0px auto 0px", 
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    borderRadius: "3px",  
    width: "621px",
    padding:"0px 0px",
    lineHeight: "28px",
    }}>
        
    <div ref={el => (this.componentRef = el)} style={{display: "flex", justifyContent:"space-between", width: "100%"}} className="document">
        <div style={{width: "30%",  color:"#fff", backgroundColor: "rgb(3, 79, 144)"}} className="left-box">
            <div style={{padding: "15px 15px"}} className="nameProfession ">
                <div style={{fontSize: "26px"}} class="nameSpan">
               {
                 firstName ?
                 <h2>{firstName} {lastName} </h2>:
                 <h2>John Doe</h2>
               }
                </div>
                <div  className="profession">
                  {
                    profession ?
                    <Typography variant="subtitle"> {profession} </Typography>:
                    <Typography variant="subtitle">Profession</Typography>
                  }
                </div>
            </div>
            <div style={{padding:"0px 0px"}} className="contact">
                    <div class="heading" style={{background: "#003D73"}}>
                       <h5 style={{padding:"0 15px", color:"#fff!important"}}>
                          Contacts
                       </h5>
                      <div/>
                      </div>
                <div className="contactParams" style={{padding: "15px 15px", fontSize: "14px"}}>
               <div className="address">
                  <Typography style={{fontWeight:600}} variant="body1">
                    Address
                  </Typography>
               </div>
                
              {
                address ?
                <Typography variant="subtitle"> {city}, {state}</Typography>:
                <Typography variant="subtitle">Abeokuta , OG</Typography>
              }
               <div className="address">
               <Typography style={{fontWeight:600}} variant="body1">
                   Phone
                  </Typography>
               </div>
                
               {
                 PhoneNo ?  <Typography variant="subtitle">{PhoneNo}</Typography>:
                 <Typography variant="subtitle">phone no</Typography>
               } 
               <div className="address">
               <Typography style={{fontWeight:600}} variant="body1">
                    Email
                  </Typography>
               </div>
                
               {
                 EmailAddress ?  <Typography variant="subtitle">{EmailAddress}</Typography>:
                 <Typography variant="subtitle">YourName@email.com</Typography>
               }
                </div>
                </div>
            {
              skills ?
              <div style={{padding:"0px 0px"}} className="skill">
                    <div class="skills" style={{background: "#003D73"}}>
                        <span style={{fontSize:"18px", padding: "15px"}}>
                           Skills
                        </span>
                    </div>
                <div className="skillsParams" style={{fontSize:"14px", padding: "15px"}}>
                <ul style={{lineHeight:"28px"}}>
                {
                  skills.map((skill, index) =>(
                    <li key={index}>
                    {skill.body}
                     </li>
                  ))
                }
                </ul>
                </div>
                </div>:
                <> </>
            }
            {
              interestToggle ?
              <div style={{padding:"0px 0px"}} className="skill">
                    <div class="skills" style={{background: "#003D73"}}>
                        <span style={{fontSize:"18px", padding: "15px"}}>
                           Skills
                        </span>
                    </div>
                <div className="skillsParams" style={{fontSize:"14px", padding: "15px"}}>
                <Interweave content={interest}/>
                </div>
                </div>:
                <> </>

            }
            {
              certified ?
              <div style={{padding:"0px 0px"}} className="skill">
                    <div class="skills" style={{background: "#003D73"}}>
                        <span style={{fontSize:"18px", padding: "15px"}}>
                           Certifications
                        </span>
                    </div>
                <div className="skillsParams" style={{fontSize:"14px", padding: "15px"}}>
               <Interweave content={certifications}/>
                </div>
                </div>:
                <> </>
            }
        </div>
        
        <div className="right-box" style={{width: "70%"}}>
           <div className="casing" style={{lineHeight:"25px", padding: "0 15px"}}>
               {
                 profile ?
                 <div class="summary" style={{color: "rgb(116, 116, 116)", fontSize: "14px"}}>
                   <Interweave content={profile} />
               </div>:
               <> </>
               }
              {
                education ?
                <div className="educationSection">
                    <div className="education">
                            <hr/>
                            <div className="educationTitle" style={{padding: "0 2px"}}>
                                <span style={{color: "#003D73", fontWeight: 600, fontSize: "18px"}}>Education</span>
                            </div>
                            <hr/>
                            {
                              education.map((edu, index) =>(
                                <div className="educationDetails" style={{display: "flex", justifyContent:"space-between", width: "100%", height: "100%"}}>
                               <div className="timeDate" >
                                 <span>{edu.startDate} - {edu.graduationDate}</span>
                               </div>
                                <div class="degreeAndName" style={{width:"70%"}}>
                                   <span>{edu.Degree}</span>
                                    <div className="location">
                                      <span>{edu.schoolName} - {edu.schoolLocation}</span>
                                    </div>
                                </div>
                                
                            </div>
                              ))
                            }
                    </div>

              </div>:
              <> </>
              }
              
              {
                workExperience ?
                <div className="workSection">
                    <div className="job">
                            <hr/>
                            <div className="workExperiencTitle" style={{padding: "0 2px"}}>
                                <span style={{color: "#003D73", fontWeight: 600, fontSize: "18px"}}>WorkHistory</span>
                            </div>
                            <hr/>

                           {
                             workExperience.map((job,index)=>(
                                <div className="jobDetails" style={{display: "flex", justifyContent:"space-between", width: "100%", height: "100%"}}>
                               <div className="timeDate">
                                 <span>{job.startDate} - {job.endDate}</span>
                               </div>
                                <div class="degreeAndName" style={{width:"70%"}}>
                                    <span>{job.jobTitle}</span>
                                    <div className="location">
                                      <span>{job.company} - {job.location}</span>
                                    </div>
                                </div>
                                
                            </div>
                             ))
                           }
                    </div>

              </div>:
              <></>
              }
              
              

           </div>
          
        </div>
    </div>

    </div>
              <div className="container">
        <div className="row">
            <div className="col-md-12">
            <ReactToPrint
          trigger={() =><button>Print propto</button>}
          copyStyles={true}

          pageStyle='@page { size: auto; margin: 0mm; } @media print { body { -webkit-print-color-adjust: exact; padding: 40px !important; } }'
          content={() => this.componentRef}
        />
        <button onClick={this.handleClose}>Close</button>
            </div>
        </div>
    </div>
            </Dialog>
            
           </>
        
        )
    }
}

export default Example
