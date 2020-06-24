import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet/es/Helmet';
import { connect } from 'react-redux';
import { Grid, GridCell } from '../../components/grid';
import { grey, grey2, grey3, white } from '../../components/values/colors';
import H3 from '../../components/typography/H3';
import { Icon } from '../../components/icon';
import { textLevel1 } from '../../components/values/shadows';
import { H4 } from '../../components/typography';
import { routeLocal } from '../../routes';
import { Link } from 'react-router-dom';
import crateRoutes from '../../routes/crate';
import userRoutes from '../../routes/user';
import { Button } from '../../components/button';

const HowItWorks = (props) => (
  <div>
    {/* SEO */}
    <Helmet>
      <title>How it works? - Crate</title>
    </Helmet>

    {/* Top title bar */}
    <Grid style={{ backgroundColor: grey }}>
      <GridCell style={{ padding: '2em', textAlign: 'center' }}>
        <H3 font='secondary'>How it works</H3>

        <p style={{ marginTop: '1em', color: grey2 }}>Just 3 easy steps to subscribe and receive your monthly
          subscription
          of trendy clothes and accessories</p>
      </GridCell>
    </Grid>

    {/* 1 - Fill Out Your Style Profile */}
    <Grid>
      <GridCell justifyCenter style={{ textAlign: 'center', padding: '8em 0' }}>
        <Icon size={4} style={{ color: grey3, textShadow: textLevel1 }}>looks_one</Icon>

        <H4 style={{ marginTop: '0.5em', textTransform: 'uppercase' }}>Subscribe to your crate</H4>

        <p style={{ marginTop: '0.5em', color: grey3 }}>Choose one or multiple crates as per your need.</p>
      </GridCell>

      <GridCell style={{ background: `url('${routeLocal}/images/stock/how-it-works/1.jpg') center top no-repeat` }}/>
    </Grid>

    {/* 2 - Receive a Fix Delivery */}
    <Grid>
      <GridCell style={{ background: `url('${routeLocal}/images/stock/how-it-works/2.jpg') center top no-repeat` }}/>

      <GridCell justifyCenter style={{ textAlign: 'center', padding: '8em 0' }}>
        <Icon size={4} style={{ color: grey3, textShadow: textLevel1 }}>looks_two</Icon>

        <H4 style={{ marginTop: '0.5em', textTransform: 'uppercase' }}>Receive a Fix Delivery</H4>

        <p style={{ marginTop: '0.5em', color: grey3 }}>Get 3 to 5 pieces of clothing or accessories delivered to your
          door.</p>
      </GridCell>
    </Grid>

    {/* 3 - Keep what you want */}
    <Grid>
      <GridCell justifyCenter style={{ textAlign: 'center', padding: '8em 0' }}>
        <Icon size={4} style={{ color: grey3, textShadow: textLevel1 }}>looks_3</Icon>

        <H4 style={{ marginTop: '0.5em', textTransform: 'uppercase' }}>Keep what you want</H4>

        <p style={{ marginTop: '0.5em', color: grey3 }}>Only pay for what you keep. Returns are easy and free.</p>
      </GridCell>

      <GridCell style={{ background: `url('${routeLocal}/images/stock/how-it-works/3.jpg') center top no-repeat` }}/>
    </Grid>

    {/* Bottom call to action bar */}
    <Grid style={{ backgroundColor: grey }}>
      <GridCell style={{ padding: '3em', textAlign: 'center' }}>
        {props.user.isAuthenticated
          ? <Link to={crateRoutes.list.path}>
            <Button theme='primary'>Subscribe <Icon size={1.2} style={{ color: white }}>navigate_next</Icon></Button>
          </Link>
          : <Link to={userRoutes.login.path}>
            <Button theme='primary'>Start <Icon size={1.2} style={{ color: white }}>navigate_next</Icon></Button>
          </Link>
        }
      </GridCell>
    </Grid>
  </div>
);

HowItWorks.propTypes = {
  user: PropTypes.object.isRequired,
};

const howItWorksState = (state) => ({
  user: state.user,
});

export default connect(howItWorksState, {})(HowItWorks);
