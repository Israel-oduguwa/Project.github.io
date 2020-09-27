import React, { Component } from 'react';
import ResumeForm from "./ResumeForm";

export class ResumeBuilder extends Component {
    state={
        isLoading:'true'
    }
    componentDidMount() {
        this.setState({isLoading: false})
    }
    render() {
        return (
           <>
            {
                this.state.isLoading ?
                <h1>Loading</h1>:
                <ResumeForm/>
            }
           </>
        )
    }
}

export default ResumeBuilder
