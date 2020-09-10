import React, { Component } from 'react';
import StaticPageNavBar from "../NavComponents/StaticPageNavbar";

export class About extends Component {
    render() {
        return (
            <div className="LandingPageContainer">
            <StaticPageNavBar >
                About us
            </StaticPageNavBar>
        </div>
        )
    }
}

export default About
