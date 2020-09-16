import React, { Component } from 'react';

export class Template1 extends Component {
    state={
        name:"suarez"
      }
    render() {
        return (
            <div style={{display:"flex", justifyContent:"space-around"}}>
   
      <div>Man</div>
     
    <div>{this.props.mans}</div>
  </div>
     
        )
    }
}

export default Template1
