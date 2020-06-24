import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// UI
import { primary as primaryGradient } from '../../components/values/gradients';
import { level1 } from '../../components/values/shadows';
import { Grid, GridCell } from '../../components/grid';
// Module
import Menu from './Menu';
import MenuItem from './MenuItem';
import Logo from './Logo';
// route
import userRoutes from '../../routes/user';
import * as admin from '../../routes/admin/dashboard';
import crateRoutes from '../../routes/crate';
import homeRoutes from '../../routes/home';

const Header = (props) => (
  <header
    style={{
      backgroundImage: primaryGradient,
      boxShadow: level1,
      padding: '0 2em',
      height: '5em',
      position: 'fixed',
      left: 0,
      right: 0,
      top: 0,
      zIndex: 1//悬浮在最顶层
    }}
  >
    <Grid alignCenter={true} style={{ marginTop: '1.5em' }}>
      <GridCell>
        {/* Logo */}
        <Logo style={{ float: 'left' }}/>

        {/* Left Menu */}
        <Menu style={{ float: 'left', marginTop: '0.5em', marginLeft: '2em' }}>
          <MenuItem to={homeRoutes.men.path}>Men</MenuItem>

          <MenuItem to={homeRoutes.women.path}>Women</MenuItem>

          <MenuItem to={homeRoutes.howItWorks.path}>How It Works</MenuItem>

          <MenuItem to={homeRoutes.whatsNew.path}>What's New</MenuItem>
        </Menu>
      </GridCell>

      <GridCell style={{ textAlign: 'right' }}>
        {/* Right Menu */}
        {props.user.isAuthenticated
          ? <Menu>
            {props.user.detail.role === 'ADMIN' && <MenuItem to={admin.dashboard.path} section="admin">Admin</MenuItem>}

            <MenuItem to={crateRoutes.list.path}>Crates</MenuItem>

            <MenuItem to={userRoutes.subscriptions.path}>Subscriptions</MenuItem>

            <MenuItem to={userRoutes.profile.path}>Profile</MenuItem>
          </Menu>
          : <Menu>
            <MenuItem to={userRoutes.login.path}>SignIn</MenuItem>

            <MenuItem to={userRoutes.register.path}>SignUp</MenuItem>
          </Menu>
        }
      </GridCell>
    </Grid>
  </header>
);
// Component Properties
Header.propTypes = {
  user: PropTypes.object.isRequired,
};

const headerState = (state) => ({
  user: state.user,
});

export default withRouter(connect(headerState, {})(Header));
