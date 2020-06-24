import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

// UI
import { Grid, GridCell } from '@components/grid';
import Adornment from '@modules/Adornment';

// Module
import SignIn from '@modules/user/SignIn';
import AuthCheck from '@modules/auth/AuthCheck';

const Login = () =>
  <Grid alignCenter style={{ padding: '2em' }}>
    {/* SEO */}
    <Helmet>
      <title>Login to your account</title>
    </Helmet>

    {/* Left Content - Image Collage */}
    <Adornment images={['/images/stock/women/1.jpg', '/images/stock/men/2.jpg', '/images/stock/men/3.jpg']}/>

    <GridCell justifyCenter style={{ textAlign: 'center' }}>
      <SignIn/>
    </GridCell>

    {/* Auth Check */}
    <AuthCheck/>
  </Grid>
;

export default Login;
