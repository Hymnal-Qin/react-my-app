import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Grid, GridCell } from '@components/grid';
import { Helmet } from 'react-helmet/es/Helmet';
import Adornment from '@modules/Adornment';
import { H2, H5 } from '@components/typography';
import { Button } from '@components/button';

import userRoutes from '@routes/user';
import crateRoutes from '@routes/crate';

const Men = (props) =>
  <Grid alignCenter style={{ padding: '2em' }}>

    {/* SEO */}
    <Helmet>
      <title>Monthly supply of clothes and accessories for Men - Crate</title>
    </Helmet>

    {/* Left Content - Image Collage */}
    <Adornment images={['/images/stock/men/1.jpg', '/images/stock/men/2.jpg', '/images/stock/men/3.jpg']}/>

    {/* Right Content */}
    <GridCell justifyCenter style={{ textAlign: 'center' }}>
      <H2 font="secondary">Monthly crates for Men</H2>

      <H5 style={{ marginTop: '0.5em' }}>
        Save time. Look great. The personal styling service customized to your fit, lifestyle & spending preferences.
      </H5>

      {/* Call to action */}
      {
        props.user.isAuthenticated
          ? <Link to={crateRoutes.list.path}>
            <Button theme="secondary" style={{ marginTop: '1em' }}>Get Subscription</Button>
          </Link>
          : <Link to={userRoutes.login.path}>
            <Button theme="secondary" style={{ marginTop: '1em' }}>Get Started</Button>
          </Link>
      }
    </GridCell>
  </Grid>
;

Men.propTypes = {
  user: PropTypes.object.isRequired,
};

const menState = (state) => ({
  user: state.user,
});

export default connect(menState, {})(Men);
