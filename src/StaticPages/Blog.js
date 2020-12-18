import React, { Component } from 'react';
import StaticPageNavBar from "../NavComponents/StaticPageNavbar";
import { connect } from "react-redux";
import Interweave from "interweave";
import Typography from '@material-ui/core/Typography';
import Link from 'react-router-dom/Link';
import { withStyles } from '@material-ui/core/styles';
import { getAllBlog } from  "../Redux/Actions/dataAction";
import PropTypes from "prop-types";
const styles = (theme) =>({

})
export class Blog extends Component {
    // state={
    //     body:""
    // }
    componentDidMount(){
        this.props.getAllBlog()
        // const blog = localStorage.getItem("blog")
        // this.setState({
        //     body:blog
        // })
    } 
    render() {
        const { classes, data:{blogs, loading}} = this.props
        
        return (
            <div className="LandingPageContainer">
            <StaticPageNavBar>
            <div className="container">
                {/* <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        <Interweave content={this.state.body} />
                        </div>
                    </div>
                </div> */}
                <div class="row">
                    <div className="header">This is the blog siyte</div>
                    <div className="column-blog"></div>
                    <div className="row-blog">
                        <div className="row">
                            <div className="col-md-8">
                               {
                                 !loading ||  blogs ? 
                                   <div>
                                   {
                                       blogs.map((blog) =>{
                                           let urlTitle = blog.title;
                                           urlTitle = urlTitle.replace(/\s+/g, '-');
                                           const url = `/${urlTitle}/${blog.blogId}`
                                           return(
                                            <React.Fragment key={blog.blogId}>
                                            <div className="wall">
                                    <div className="blog-card">
                                        <div className="rx">
                                            <div className="ry">
                                                <div className="ry-left">
                                                    <div className="user-info"></div>
                                                   <Link to={url} >
                                                   <div className="link" >
                                                        <Typography   variant="h6" gutterBottom>
                                                       {blog.title}
                                                        </Typography>
                                                        <div className="description">
                                                            <Typography variant="subtitle2">
                                                            {blog.description}
                                                            </Typography>
                                                        </div>
                                                    </div></Link>
                                                </div>
                                                <div className="ry-right">
                                                    <img src={blog.thumbnail} style={{width:"70%", height:"100%"}} alt={blog.userId}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                       </React.Fragment>
                                           )
                                       })
                                   }
                                </div>: <h2>Loading ...</h2>
                               }
                            </div>
                            <div className="col-md-4">
                            okay the space i want for postiion sticky to stcik
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </StaticPageNavBar>
        </div>
        )
    }
}
Blog.propTypes = {
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
export default connect(mapStateToProps, {getAllBlog})(withStyles(styles)(Blog))
