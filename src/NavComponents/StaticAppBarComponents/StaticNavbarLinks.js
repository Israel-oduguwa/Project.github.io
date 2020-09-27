import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Link from 'react-router-dom/Link';
import PropTypes from 'prop-types';
// NavBar Drawer
import IconButton from '@material-ui/core/IconButton';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const styles = (theme) =>({
   grow:{
    flexGrow: 1,
   },
   navLinks: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
    justifyContent:"space-around",
    width:"54%"
  },
})

export class StaticNavbarLinks extends Component {
        state={
                anchor:false
            }
        
           handleOpen = () =>{
            this.setState({
                anchor:true
            })
           }
            handleClose = () =>{
                this.setState({
                    anchor:false
                })
            }
          toggleDrawer = (event) => {
                if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
                  return;
                }
                this.setState({
                    anchor:true
                })
            }
    render() {
        const {classes} = this.props
        // const darkModes = this.props.darkMode
        return (         
                <>
                 <div className={classes.navLinks}>
         <Typography className="navBarLinks" component={Link} to="/resume"  variant="body1" color="inherit" noWrap>
           Resume Builder
          </Typography>                  
                  <Typography className="navBarLinks" component={Link} to="/coverletter-templates" variant="body1" color="inherit" noWrap>
           CoverLetter
          </Typography>
                  <Typography className="navBarLinks" component={Link} to="/blog" variant="body1" color="inherit" noWrap>
           Blog
          </Typography>
                  <Typography className="navBarLinks" component={Link} to="/about-us"  variant="body1" color="inherit" noWrap>
           About
          </Typography>
                  <Typography className="navBarLinks" component={Link} to="/register"  variant="body1" color="inherit" noWrap>
           Registar
          </Typography>
                  <Typography className="navBarLinks" component={Link} to="/singIn"  variant="body1" color="inherit" noWrap>
          Signin
          </Typography>
          {/* <button onClick={darkModes}>DarkMode</button> */}
         
                 </div>
                 <IconButton onClick={this.handleOpen} className="MenuButton"><MenuIcon/></IconButton>
                 <SwipeableDrawer
            anchor="left"
            className="NavDrawer"
            open={this.state.anchor}
            onClose={this.handleClose}
            onOpen={this.handleOpen}>
                     <div             
              role="presentation"
              className={classes.List}            
            >
                    <List>
                    <ListItem button component={Link} onClick={this.handleClose} to="/resume">
                    <ListItemText primary="Resume Builder"/>
                    </ListItem>
                    <Divider/>
                    <ListItem button component={Link} onClick={this.handleClose} to="/coverletter-templates">
                    <ListItemText primary="Cover Letter" />
                    </ListItem>
                    <Divider/>
                    <ListItem button component={Link} onClick={this.handleClose} to="/blog">
                    <ListItemText primary="Blog" />
                    </ListItem>
                    <Divider/>
                    <ListItem button component={Link} onClick={this.handleClose} to="/about-us">
                    <ListItemText primary="About" />
                    </ListItem>
                    </List>
            </div>
            </SwipeableDrawer>
           
          </>
        )
    }
}
StaticNavbarLinks.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(StaticNavbarLinks)
