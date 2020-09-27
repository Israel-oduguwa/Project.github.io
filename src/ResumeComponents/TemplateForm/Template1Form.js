import React, { Component } from 'react';
import ReactToPrint from "react-to-print";
import Template1 from "../ResumeTemplates/Template1";

export class Template1Form extends Component {
    state={
        man:"ok",
        auth:false,
        color:"red"
      }
      handleChange = (e) =>{
        this.setState({
          [e.target.name]:e.target.value
        })
      }
      show = (e) =>{
          this.setState({
              auth:true
          })
      }
    render() {
        return (
            <div>
                   <input onChange={this.handleChange} name="man" />
                   <input onChange={this.handleChange} name="color" />
        <ReactToPrint
          trigger={() =><button>Print</button>}
          content={() => this.componentRef}
        />
        <ReactToPrint
          trigger={() =><button>Print2</button>}
          content={() => this.componentRef2}
        />
       
        <>
        <button onClick={this.show}>Print</button>
        </>
      {
          this.state.auth ?
           <div>
       <Template1 mans={this.state} ref={el => (this.componentRef = el)} />
       </div>:
       <p>Yhje</p>
      }
      <div ref={el  =>(this.componentRef2 = el)}>
        {this.state.man}
      </div>
      <div ref={el  =>(this.componentRef3 = el)}>
        {this.state.man} jThi is n e
      </div>
      <ReactToPrint
          trigger={() =><div>
            <h1>Print</h1>
          </div>}
          content={() => this.componentRef3}
        />
      </div>
          
        )
    }
}

export default Template1Form
