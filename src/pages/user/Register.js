import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SignUp from '../../modules/user/SignUp';
import { Helmet } from 'react-helmet';
import Adornment from '../../modules/Adornment';
import { Grid, GridCell } from '../../components/grid';
import AuthCheck from '../../modules/auth/AuthCheck';

const Register = () =>
  <Grid alignCenter style={{ padding: '2em' }}>
    {/* SEO */}
    <Helmet>
      <title>Create an account</title>
    </Helmet>

    {/* Left Content - Image Collage */}
    <Adornment images={['/images/stock/men/1.jpg', '/images/stock/women/2.jpg', '/images/stock/women/3.jpg']}/>

    <GridCell justifyCenter style={{ textAlign: 'center' }}>
      <SignUp/>
    </GridCell>

    {/* Auth Check */}
    <AuthCheck/>
  </Grid>
;

export default Register;
