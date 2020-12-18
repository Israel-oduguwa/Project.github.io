import React, { Component } from 'react'
import DashBoard from "../AdminComponent/DashBoard";
import { connect } from "react-redux";
import Typography from '@material-ui/core/Typography';
import PropTypes from "prop-types";
export class allJobPost extends Component {
    state ={
        theme:false,
      }
      handleTheme = () =>{
        if (this.state.theme === false) {
          this.setState({
            theme:true
          })
        } else {
          this.setState({
            theme:false
          })
        }
      }
    render() {
      const { classes , user:{ credentials :{ jobPosts }}} = this.props
        return (
              
          <DashBoard>
               <div className="container">
                   <div className="row">
                       <div className="col-md-12">
                            <Typography variant="h4" gutterBottom>Job Posts</Typography>
                       </div>
                       {
                           jobPosts ? 
                           <>
                           </>:
                           <div className="col-md-12 text-center">
                               <Typography variant="h5" gutterBottom>No Job Post Yet</Typography>
                           </div>
                       }
                   </div>
               </div>
          </DashBoard>
        )
    }
}
allJobPost.propTypes ={
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  // UI:PropTypes.object.isRequired,
}
const mapStateToProps = (state) => ({
  user: state.user,
  // UI: state.UI
})
export default connect(mapStateToProps)(allJobPost)
