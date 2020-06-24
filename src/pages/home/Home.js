import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// UI
import Button from '@components/button/Button';
import { Grid, GridCell } from '@components/grid';
import { H1, H4 } from '@components/typography';
// UI values
import { textLevel1 } from '@components/values/shadows';
import { white } from '@components/values/colors';
// module
// route
import { routeLocal } from '../../routes';
import crateRoutes from '../../routes/crate';
import userRoutes from '../../routes/user';
import Onboarding from './Onboarding';

const Home = (props) =>
  <div>
    <Grid
      alignCenter
      style={{
        backgroundImage: `url('${routeLocal}/images/cover.jpg')`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        height: 'calc(100vh - 5em)',
        textAlign: 'center',
        color: white,
      }}>
      {/* SEO */}
      <Helmet>
        <title>Monthly supply of clothes and accessories for Men and Women - Crate</title>
      </Helmet>

      {/* Content */}
      <GridCell>
        <H1 font="secondary" style={{ textShadow: textLevel1 }}>
          Crate
        </H1>

        <H4 style={{ textShadow: textLevel1, marginTop: '0.5em' }}>
          Your monthly subscription of trendy clothes and accessories
        </H4>

        {/*	Call to action */}
        {props.user.isAuthenticated
          ? <Link to={crateRoutes.list.path}>
            <Button theme="secondary" style={{ marginTop: '1em' }}>
              Get Subscription
            </Button>
          </Link>
          : <Link to={userRoutes.login.path}>
            <Button theme="secondary" style={{ marginTop: '1em' }}>
              Get Started
            </Button>
          </Link>
        }
      </GridCell>
    </Grid>

    {/* Onboarding */}
    <Onboarding/>
  </div>
;

// Component Properties
Home.propTypes = {
  user: PropTypes.object.isRequired,
};

// Component State
const homeState = (state) => ({
  user: state.user,
});

export default connect(homeState, {})(Home);
