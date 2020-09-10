import React, { Component } from 'react'
// Static Navbar
import StaticPageNavBar from "../NavComponents/StaticPageNavbar";

export class LandingPage extends Component {
    render() {
        const toggle = this.props.darkToggle
        return (
            <div className="LandingPageContainer">
                <StaticPageNavBar toggleDark={toggle}>
            
                </StaticPageNavBar>
            </div>
        )
    }
}

export default LandingPage
