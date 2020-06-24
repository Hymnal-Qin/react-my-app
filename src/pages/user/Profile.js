import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { logout } from '../../store/user/actions';
import { Helmet } from 'react-helmet/es/Helmet';
import { Grid, GridCell } from '../../components/grid';
import { grey, grey2 } from '../../components/values/colors';
import { H3, H4 } from '../../components/typography';
import { Link } from 'react-router-dom';
import userRoutes from '../../routes/user';
import { Button } from '../../components/button';

const Profile = (props) =>
  <div>
    {/*	SEO */}
    <Helmet>
      <title>My Profile - Crate</title>
    </Helmet>

    {/*	Top title bar */}
    <Grid style={{ backgroundColor: grey }}>
      <GridCell style={{ padding: '2em', textAlign: 'center' }}>
        <H3 font="secondary">My profile</H3>
      </GridCell>
    </Grid>

    <Grid>
      <GridCell style={{ padding: '2em', textAlign: 'center' }}>
        <H4 style={{ marginBottom: '0.5em' }}>{props.user.detail.username}</H4>

        <p style={{ color: grey2, marginBottom: '2em' }}>{props.user.detail.email}</p>

        <Link to={userRoutes.subscriptions.path}>
          <Button theme='primary'>Subscriptions</Button>
        </Link>

        <Button theme='secondary' onClick={props.logout} style={{ marginLeft: '1em' }}>Logout</Button>
      </GridCell>
    </Grid>
  </div>
;

Profile.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

const profileState = (state) => ({
  user: state.user,
});

export default connect(profileState, { logout })(Profile);
