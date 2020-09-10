import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Link from 'react-router-dom/Link';
import PropTypes from 'prop-types';

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
    render() {
        const {classes} = this.props
        // const darkModes = this.props.darkMode
        return (
          
                 <div className={classes.navLinks}>
         <Typography className="navBarLinks" component={Link} to="/resume-templates"  variant="body1" color="inherit" noWrap>
           Resume Templates
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
          
        )
    }
}
StaticNavbarLinks.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(StaticNavbarLinks)
