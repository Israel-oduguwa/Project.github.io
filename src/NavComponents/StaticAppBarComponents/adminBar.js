import React, { Component } from 'react';
import Badge from '@material-ui/core/Badge';
import { connect } from "react-redux";
import IconButton from '@material-ui/core/IconButton';
import PropTypes from "prop-types";
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';

export class adminBar extends Component {
    render() {

        const {classes, user:{credentials:{ imageUrl, userId} } } = this.props
        return (
            <>
            <IconButton aria-label="show 17 new notifications">
              <Badge badgeContent={1} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Avatar alt={userId} src={imageUrl} />
            {/* <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
             
            >
              <AccountCircle />
            </IconButton> */}
            </>
        )
    }
}

adminBar.propTypes ={
    classes: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    // UI:PropTypes.object.isRequired,
    
}
const mapStateToProps = (state) => ({
    user: state.user,
    // UI: state.UI
})

export default connect(mapStateToProps)(adminBar)
