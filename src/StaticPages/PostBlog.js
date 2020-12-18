import React, { Component } from 'react';
import './blog.css';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
import AppBar from '@material-ui/core/AppBar';
import Icon from '@material-ui/core/Icon';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import CircularProgress from "@material-ui/core/CircularProgress";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";
// import { ImageResize } from 'quill-image-resize-module';
import  ImageResize  from 'quill-image-resize-module-react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import Card from "@material-ui/core/Card";
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import { connect } from "react-redux";
import { postBlog } from  "../Redux/Actions/dataAction";
import CancelIcon from '@material-ui/icons/Cancel';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import axios from "axios";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
const styles = (theme) =>({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        padding: theme.spacing(0.5),
        margin: 0,
      },
      chip: {
        margin: theme.spacing(0.5),
      },
      input: {
        display: 'none',
      },
});
Quill.register('modules/imageResize', ImageResize);

export class PostBlog extends Component {
    state={
        body:"",
        loading:false,
        // language:"",
        category:["category" ],
        description:"",
        title:"",
        thumbnailImage:"",
        imageName:"",
        caption:""
    }
    type = (value) =>{
        this.setState({
            body:value
        })
    }
    handleChange= (e) =>{
      this.setState({
        [e.target.name]:e.target.value
      })
    }
    handlePost = () =>{
      localStorage.setItem('blog', this.state.body);
      const newBlog ={
        body:this.state.body,
        title:this.state.title,
        category:this.state.category,
        description:this.state.description,
        thumbnail:this.state.thumbnailImage
      }
      this.props.postBlog(newBlog)
  }
    handlePostImageChange = (e) =>{
      this.setState({
          loading:true
      })   
       const image = e.target.files[0];
      const formData = new FormData();
      formData.append('image', image, image.name);
     
     
      axios.post('/create-pdf/resumeImage' , formData)
      .then((res) =>{
          this.setState({
              thumbnailImage:res.data.url,
            imageName:res.data.imageName,
              loading:false
          })
         
      })
      .catch((err) =>{
          console.log(err)
      })
   }
   PostTimelineImage = (e) =>{
    const file = document.getElementById("postImage");
     file.click()
   
 }
    componentDidMount(){
        // const blog = localStorage.getItem("blog")
        // this.setState({
        //     body:blog
        // })
    } 
    
    addCategory = (e) =>{
        const val = e.target.value;
    if (e.key === 'Enter' && val) {
      if (this.state.category.find(category => category.toLowerCase() === val.toLowerCase())) {
        return;
      }
      this.setState({ category: [...this.state.category, val]});
      this.tagInput.value = null;
    } else if (e.key === 'Backspace' && !val) {
      this.deleteCat(this.state.category.length - 1);
    }
    }
    deleteCat = (index) =>{
        const category = [...this.state.category]
        category.splice(index, 1)
        // setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
        this.setState({
            category
        })
    }
    modules = {
        toolbar: [
        //   [{ 'header': '1'}, { 'header': '2'},],
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'size': ['small', false, 'large', 'huge'] }],
          ['bold', 'italic', 'underline', 'blockquote','code-block'],
         
          [{'list': 'ordered'}, {'list': 'bullet'}, 
    
          {'indent': '-1'}, {'indent': '+1'}, 
         ],
         [{ 'direction': 'rtl' }], 
         [{ 'font': [] }],
         [{ 'script': 'sub'}, { 'script': 'super' }],
          ['link', 'image', 'video'],
         
          [{ 'color': [] }, { 'background': [] }],  
          [{ 'align': [] }],
          ['clean']      
        ],
       
        imageResize: {
            parchment: Quill.import('parchment')
            // See optional "config" below
        },
        clipboard: {
          // toggle to add extra line breaks when pasting HTML:
          matchVisual: false,
        }
      }
    
    formats = [
        'header', 'font', 'size','clean','direction','script','video','code-block',
        'align','image','link',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet',  'indent',
        'color', 'background'
      ]
    render() {
        const { classes } = this.props
        return (
           <>
           <AppBar>
               <Toolbar>
                   <h4>BlogPost</h4>
               </Toolbar>
           </AppBar>
           <div className="container-fluid container2">
               <div className="row">
                   <div className="col-md-9">
                   <div className="title-box">
                   <TextField id="title" label="Title" name="title" onChange={this.handleChange} variant="outlined" fullWidth />
                   </div>
                   <br/>
                 <div className="rich-text">
               <div className="rich-text-wall">
               <ReactQuill 
          theme="snow"
         onChange={this.type}
          modules={this.modules}
          formats={this.formats}
          bounds={'.app'}
          value={this.state.body}
          placeholder=""
         />
               </div>
                 </div>
                   </div>
        <div className="col-md-3">
            <div className="right-panel">

                <div className="meta-wall">
                   <div className="row">
                   <div className="col-md-6 col-sm-6">
                        <div className="language">
                            <Select name="language" id="language" label="language">
                            <MenuItem value="Website">English</MenuItem>
          <MenuItem value="Facebook">French</MenuItem>
         
                            </Select>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <div className="publish">
                        <Button onClick={this.handlePost} variant="contained" color="primary" endIcon={<ExpandMoreOutlinedIcon/>} >
                        Publish
                        </Button> 
                       
                        </div>
                    </div>
                  
                          <div className="col-md-12 scheme-input">
                          <Typography variant="subtitle" gutterBottom>Description</Typography>
                            <TextareaAutosize
      onChange={this.handleChange}
      name="description"
      aria-label="maximum height"
      placeholder="Short description of the article"
    //   defaultValue="L
    />
                          </div>
                      <div className="col-md-12 cont">
                      <div className="categories">
                      <Typography variant="subtitle" gutterBottom>Categories</Typography>
                        <Paper component="ul" className={classes.root}>
                        {
                            this.state.category.map((cat, index) =>(
                                <li key={index}>
                                <Chip
                                 
                                  label={cat}
                                  onDelete={() => this.deleteCat(index)}
                                  className={classes.chip}
                                />
                              </li>
                            ))
                        }
    <TextField className="categoryText" label="New category" onKeyDown={this.addCategory} ref={c => { this.tagInput = c ; }}   id="standard-size-small"  size="small" />
    </Paper>

                        </div>
                      </div>
                       <div className="col-md-12 conts">
                       <Typography variant="subtitle" gutterBottom>Thumbnail Image</Typography>
                       <input type="file" id="postImage" accept="images/*"
                      className={classes.postImage}
                      multiple
                      onChange={this.handlePostImageChange}
                      hidden="hidden"
                      />
      <label htmlFor="contained-button-file">
        <Button
         onClick={this.PostTimelineImage}  
        variant="contained" color="default" endIcon={<PhotoCamera/>} component="span">
          Upload Image
        </Button>
      </label>
      <br/>
      {
                   this.state.thumbnailImage === "" && !this.state.loading ?
                   <p></p>:
                  this.state.loading  ?
                  <CircularProgress/>:
                   <>
                   <Tooltip title="cancelImage">
                   <IconButton 
                  //  onClick={this.cancelImage}o
                   className={classes.coverButton}>
                       <CancelIcon style={{fontSize:"4vh"}} />
                   </IconButton>
               </Tooltip>
               <Card>
                   <CardMedia
                   image={this.state.thumbnailImage}
                   className="card-image2"/>
                </Card>
                   </>
               }
                       </div>
                        <div className="col-md-12 cont">
                        <TextField label="Caption" onChange={this.handleChange} name="caption"  fullWidth variant="outlined" />
                        
                        </div>
                   </div>
                </div>
            </div>
        </div>
                  
               </div>
           </div>
           </>
        )
    }
}

PostBlog.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  // UI:PropTypes.object.isRequired,
  postBlog:PropTypes.func.isRequired
}
const mapStateToProps = (state) => ({
  user: state.user,
  // UI: state.UI
})
export default connect(mapStateToProps, { postBlog })(withStyles(styles)(PostBlog))
