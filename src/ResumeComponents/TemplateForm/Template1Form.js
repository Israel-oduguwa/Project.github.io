import React, { Component } from 'react';
import ReactToPrint from "react-to-print";
import Template1 from "../ResumeTemplates/Template1";

export class Template1Form extends Component {
    state={
        man:"ok",
        auth:false
      }
      handleChange = (e) =>{
        this.setState({
          man:e.target.value
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
                   <input onChange={this.handleChange}/>
        <ReactToPrint
          trigger={() =><button>Print</button>}
          content={() => this.componentRef}
        />
        <>
        <button onClick={this.show}>Print</button>
        </>
      {
          this.state.auth ?
           <div style={{display:"none"}}>
       <Template1 mans={this.state.man} ref={el => (this.componentRef = el)} />
       </div>:
       <p>Yhje</p>
      }
      </div>
          
        )
    }
}

export default Template1Form
