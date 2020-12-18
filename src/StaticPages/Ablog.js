import React, { Component } from 'react'
import { connect } from "react-redux";
import Interweave from "interweave";
import StaticPageNavBar from "../NavComponents/StaticPageNavbar";
import { withStyles } from '@material-ui/core/styles';
import { getBlog } from  "../Redux/Actions/dataAction";
import Typography from '@material-ui/core/Typography';
import PropTypes from "prop-types";
import Avatar from '@material-ui/core/Avatar';
const styles = (theme) =>({

})
export class Ablog extends Component {
  componentDidMount(){
    const blogId = this.props.match.params.blogId;
    this.props.getBlog(blogId)
  }
    render() {
      const { classes, data:{blog}} = this.props;
        return (
            <div className="LandingPageContainer">
              <StaticPageNavBar>
               {
                 blog ?
                 <div className="container">
                 <div className="article">
                 <div className="row justify-hcontent-center">
                   <div className="col-md-8 align-self-center text-center">
                   <div className="the-title">
                        <Typography variant="h4" gutterBottom>
                          {blog.title}
                        </Typography>
                    </div>
                    <div className="ai-and-an">
                    <Avatar alt={blog.fullName} src={blog.AuthorImage} />
                    <Typography variant="subtitle2">{blog.fullName}</Typography>
                    </div>
                   </div>
                    <div className="col-md-8 align-self-center">
                      <div className="tp">
                        <div className="bi">
                          <img src={blog.thumbnail} alt="topImage" className="bi-image"/>
                        </div>
                        <div className="m-a">
                          <Interweave content={blog.body}/>
                        </div>
                      </div>
                      
                    </div>
                    <div className="col-md-3">
                      hi
                    </div>
                 </div>
                  </div>
                </div>:
                <h1>Loading</h1>
               }
              </StaticPageNavBar>
            </div>
        )
    }
}
Ablog.propTypes = {
    classes: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    data:PropTypes.object.isRequired,
    // UI:PropTypes.object.isRequired,
   
  }
  const mapStateToProps = (state) => ({
    user: state.user,
    data:state.data
    // UI: state.UI
  })
export default connect(mapStateToProps, {getBlog})(withStyles(styles)(Ablog))
