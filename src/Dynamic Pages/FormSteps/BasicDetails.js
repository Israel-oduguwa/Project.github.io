import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
export class BasicDetails extends Component {
  continue = (e) =>{
      e.preventDefault()
      this.props.nextStep()
  }
    
    render() {
        const { details } = this.props
        return (
           <>
             <div className="form-Bar">
            <AppBar color="appBar" position="static">
              <Toolbar>              
                <Typography variant="h6" className="form-logo">
                  Israel
                </Typography>
                <Typography variant="h6">
                    Basic Details
                </Typography>
              </Toolbar>
            </AppBar>
            <button onClick={this.continue}>Next</button>
          </div>
           </>
        )
    }
}

export default BasicDetails
