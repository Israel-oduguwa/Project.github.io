import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles";


const styles = theme => ({
});

 class ProductNameLogo extends Component { 
    render() {
      const { classes } = this.props;
        return (
          <>
                <Typography className={classes.root} variant="h6" noWrap>
           Rema Builder
          </Typography>
            </>
        )
    }
}
ProductNameLogo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductNameLogo)
