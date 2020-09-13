import React, { Component } from 'react';
// Static Navbar
import StaticPageNavBar from "../NavComponents/StaticPageNavbar";
import TopIntro from "../LandingPageComponents/TopIntro";
import RightIntro from "../LandingPageComponents/RightIntro";
import LandingPageStep2 from "../LandingPageComponents/LandingPageStep2";
import LandingPageStep3 from "../LandingPageComponents/LandingPageStep3";
import LandingPageStep4 from "../LandingPageComponents/LandingPageStep4";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { PdfDocument } from "../LandingPageComponents/projotype";

export class LandingPage extends Component {
    state={
        auth:false
    }
    auth = () =>{
        this.setState({
            auth:true
        })
    }
    render() {
        const toggle = this.props.darkToggle
        return (
            <div className="LandingPageContainer">
                <StaticPageNavBar toggleDark={toggle}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <TopIntro/>
                        </div>
                        <div className="col-md-7">
                        <RightIntro/>
                        </div>
                    </div>

                </div>
                <div className="LandingPage2">
                    <LandingPageStep2/>
                </div>
                
                <div className="LandingPage2">
                    <LandingPageStep3/>
                </div>
                <div className="LandingPage2">
                   <LandingPageStep4/>
                </div>
             
                   <PDFDownloadLink
                   document={<PdfDocument data={1}/>}
                   fileName="movielist.pdf"
                   style={{
                   textDecoration: "none",
                   padding: "10px",
                   color: "#4a4a4a",
                   backgroundColor: "#f2f2f2",
                   border: "1px solid #4a4a4a"
                   }}
                   >
               Download
                   </PDFDownloadLink>
               
                </StaticPageNavBar>
            </div>
        )
    }
}

export default LandingPage
