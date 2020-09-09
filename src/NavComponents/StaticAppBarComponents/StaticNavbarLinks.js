import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
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
        return (
          
                 <div className={classes.navLinks}>
                 <Typography  variant="body1" noWrap>
           Resume Templates
          </Typography>
                  <Typography  variant="body1" noWrap>
           Cv Templates
          </Typography>
                  <Typography  variant="body1" noWrap>
           CoverLetter
          </Typography>
                  <Typography  variant="body1" noWrap>
           Blog
          </Typography>
                  <Typography  variant="body1" noWrap>
           About
          </Typography>
                  <Typography  variant="body1" noWrap>
           Registar
          </Typography>
                  <Typography  variant="body1" noWrap>
          Signin
          </Typography>
                 </div>
          
        )
    }
}
StaticNavbarLinks.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(StaticNavbarLinks)
