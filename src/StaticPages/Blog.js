import React, { Component } from 'react';
import StaticPageNavBar from "../NavComponents/StaticPageNavbar";

export class Blog extends Component {
    render() {
        return (
            <div className="LandingPageContainer">
            <StaticPageNavBar>
            Blog
            </StaticPageNavBar>
        </div>
        )
    }
}

export default Blog
