import React, { Component } from 'react'

export class WorkExperience extends Component {
    back = (e) =>{
        e.preventDefault()
      this.props.prevStep()
    }
    render() {
        return (
            <div>
                Hello
                <button onClick={this.back}>Back</button>
            </div>
        )
    }
}

export default WorkExperience
