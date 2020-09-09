import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import Slide from '@material-ui/core/Slide';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import StaticNavbarLinks from "./StaticAppBarComponents/StaticNavbarLinks";

// AppBar components
import ProductNameLogo from "./StaticAppBarComponents/ProductNameLogo";

// style
const useStyles = makeStyles((theme) => ({
    root: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),    
    },
    grow:{
      flexGrow: 1,
    }
  }));
  function ScrollTop(props) {
    const { children, window } = props;
    const classes = useStyles();
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
    });
    const handleClick = (e) => {
        const anchor = (e.target.ownerDocument || document)
        .querySelector('#back-to-top-anchor');   
      
        if (anchor) {
          anchor.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' });
        }      
      };
      return (
        <Zoom in={trigger}>
          <div onClick={handleClick} role="presentation" className={classes.root}>
            {children}
          </div>
        </Zoom>
      );
    }
    ScrollTop.propTypes = {
        children: PropTypes.element.isRequired,
        window: PropTypes.func,
      };
      
      
// The Hide on scroll function
function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });  
    return (
      <Slide appear={false} direction="down" in={!trigger }>
        {children}
      </Slide>
    );
  }
  HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
  };

export default ({props, children})=> {
  const classes = useStyles();
  return (<React.Fragment>
    <CssBaseline />
    <HideOnScroll {...props}>
    <div className={classes.grow}>
         <AppBar>
            <Toolbar >
              <ProductNameLogo/>
              <div className={classes.grow} />
              <StaticNavbarLinks/>
            </Toolbar>
          </AppBar>
         </div>
    </HideOnScroll>
    <Toolbar id="back-to-top-anchor" />
    <Container style={{ width: "100%", overflow: "hidden" }}>
      <Box my={2}>
        {children}
      </Box>
    </Container>
    <ScrollTop {...props}>
      <Fab color="secondary" size="small" aria-label="scroll back to top">
        <KeyboardArrowUpIcon />
      </Fab>
    </ScrollTop>
  </React.Fragment>);
}
