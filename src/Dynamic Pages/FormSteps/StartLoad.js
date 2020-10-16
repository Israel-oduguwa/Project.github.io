import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';


export class StartLoad extends Component {
    render() {
        return (
           <div className="containerLoad ">
               <CircularProgress />
           </div>
        )
    }
}

export default StartLoad
