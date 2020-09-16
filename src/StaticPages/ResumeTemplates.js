import React, { Component } from 'react';
import StaticPageNavBar from "../NavComponents/StaticPageNavbar";
import Template1Form from "../ResumeComponents/TemplateForm/Template1Form";
export class ResumeTemplates extends Component {
    render() {
        return (
            <div className="LandingPageContainer">
            <StaticPageNavBar>
            Resume Templates
            <Template1Form/>
            </StaticPageNavBar>
        </div>
        )
    }
}

export default ResumeTemplates
