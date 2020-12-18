import React, { Component } from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';
// import Interweave from "interweave";
import { saveAs } from 'file-saver';
import axios from "axios"



const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  
export class Example extends Component {
    state={open:false, 
      pdfUrl:"",
      pdfName:""
    }
   
    open = () =>{
        this.setState({
            open:true,
           
        })
    }
    createAndDownloadPdf = () => {
      axios.post(`https://us-central1-resume-builder-startup.cloudfunctions.net/api/create-pdf/creativeResume`, this.props.state)
      .then((res) => { 
       
    
        this.setState({
          pdfUrl:res.data.PdfDownloadLink,
        })
        this.setState({
          pdfName:res.data.StorageName,
        })
      }).then(()=> axios.get(`https://cors-anywhere.herokuapp.com/${this.state.pdfUrl}`,{ responseType: 'blob' }
       ))
       .then((res) =>{
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
       
        saveAs(pdfBlob, `${this.props.state.firstName} Resume.pdf`)
       }).then(() => axios.delete(`https://us-central1-resume-builder-startup.cloudfunctions.net/api/delete-pdf/${this.state.pdfName}`)).then((res) =>{
         
       })
   }
    handleClose = () =>{
        this.setState({
            open:false
        })
    }
    render() {
        // const { profile,
        //   lastName,
        //     profession,       
        //     address,
        //     city,
        //     state,
        //     zipCode,       
        //     PhoneNo,
        //     skills,
        //     accomplishments,
        //     accomplished,
        //     certifications,
        //     certified,
        //     projects,
        //     projectToggle,
        //     interest,
        //     interestToggle,
        //     languages,
        //     languagesToggle,            
        //     activities,
        //     activitiesToggle,
        //     addRating,
        //     education,
        //     workExperience,
        //     EmailAddress,
        //     firstName} =this.props.state
        return (
           <>
           <div className="container">
           <Card>
                <CardActionArea onClick={this.open}>
                <CardMedia
         style={{height:"280px"}}
          image=""
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Simple Resume
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           This Resume is Simple and elegant for HighSchool and college students
          </Typography>
        </CardContent>
                </CardActionArea>
            </Card>
            <Dialog fullScreen open={this.state.open} TransitionComponent={Transition} onClose={this.handleClose}>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-7">
                  <div  className="containersh" style={{background: "#fff",
    margin: "0px auto 0px", 
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    borderRadius: "3px",  
    // width: "700px",
    padding:"0px 0px",
    // lineHeight: "28px",
    }}>
        
    

    </div>
                  </div>
                  <div className="col-md-5">
                 
        <Button variant="contained" onClick={this.createAndDownloadPdf}>Download Resume</Button>
                  </div>
                </div>
              </div>
         
            </Dialog>
           </div>
            
           </>
        
        )
    }
}

export default Example
