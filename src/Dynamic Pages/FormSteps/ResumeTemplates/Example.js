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
import Interweave from "interweave";

import Typography from '@material-ui/core/Typography';

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
            <div ref={el => (this.componentRef = el)} className="container1">
            <div className="header">
      <div className="full-name">
        <h2 className="Name">Frank Shelby</h2> 
        <div className="profession">
        <h5 >Master Electrician</h5>
        </div>
      </div>

      
      
   
    </div>  
    <div className="body">
    <div className="row">
      <div className="col-md-8">
      <div className="left-hand">
          <div className="profile">
              <p style={{fontWeight:"500"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptas, sunt ipsa expedita repudiandae recusandae in aspernatur eveniet incidunt dignissimos.</p>
            </div>
            <div className="experience">
              <h5>Experience</h5>
              <hr/>
              <div className="row">
                <div className="col-md-2">
                  2012-03 - present
                </div>
                <div className="col-md-9">
                  <div className="experience-title">
                    <h6>Master electrician</h6>
                  </div>
                  <div className="company">
                    <p>ABC company and CO</p>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab iure, commodi cum magni nulla, fugit numquam iusto, tempora repellat cumque non repellendus deleniti pariatur? Inventore quas obcaecati consequatur sequi possimus!
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-2">
                  2012-03 - present
                </div>
                <div className="col-md-9">
                  <div className="experience-title">
                    <h6>Master electrician</h6>
                  </div>
                  <div className="company">
                    <p>ABC company and CO</p>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab iure, commodi cum magni nulla, fugit numquam iusto, tempora repellat cumque non repellendus deleniti pariatur? Inventore quas obcaecati consequatur sequi possimus!
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-2">
                  2012-03 - present
                </div>
                <div className="col-md-9">
                  <div className="experience-title">
                    <h6>Master electrician</h6>
                  </div>
                  <div className="company">
                    <p>ABC company and CO</p>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab iure, commodi cum magni nulla, fugit numquam iusto, tempora repellat cumque non repellendus deleniti pariatur? Inventore quas obcaecati consequatur sequi possimus!
                  </p>
                </div>
              </div>
            </div>
      </div>
      </div>
      <div className="col-md-4">
        <div className="right-side">
          <div className="personal-info">
            <h5>Personal Info</h5>
            <hr/>
            <div className="Details">
             <h6>Address</h6>
             <p>1 Amos be balogun street euwoliwo sagamu, ogunstate Nigeria.</p>
            </div>
            <h6>Phone</h6>
            <p>08084868224</p>
            <h6>E-mail</h6>
            <p>oduguwa.israel22@gmail.com</p>
            <h6>Website</h6>
            <p>israel.com</p>
           
            <h5>Skills</h5>
            <hr/>
            <div className="skills">
              <li>
                <span>html</span> <span>
                  <span className="progress" style={{height:'7px'}} >
                    <div className="progress-bar" role="progressbar" style={{width:"25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                  </span>
                </span>
              </li>
              <li>
                <span>css</span> <span>
                  <span className="progress" style={{height:'7px'}} >
                    <div className="progress-bar" role="progressbar" style={{width:"25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                  </span>
                </span>
              </li>
            </div>
            <h5>Languages</h5>
            <div className="languages">
                <hr/>
              <li>English</li>
              <li>French</li>
            </div>
            
            <h5>Interests</h5>
            <hr/>
            <div className="interests">
              <Interweave content={profile} />
            </div>
          </div>
        </div>
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
