import React from 'react';

// UI
import { Grid, GridCell } from '../../components/grid';

// Module
import Clock from '../../modules/Clock';
import styled from 'styled-components';
import { primary } from '../../components/values/gradients';
import { level1 } from '../../components/values/shadows';
import { grey2 } from '../../components/values/colors';

const Footer = (props) => {
  const Footer = styled.footer`
		// background-image: ${primary};
		//box-shadow: ${level1};
		//padding: 0 2em;
		
		//position: fixed;
	  left: 0;
		right: 0;
		bottom: 0;
	
    max-width: 1012px !important;
    margin-right: auto;
    margin-left: auto;
    color: ${grey2} !important;
    font: 14px "Century Gothic", Futura, sans-serif;
	`;
  return (
    <Footer>
      <Grid alignCenter={true} style={{ marginTop: '1.5em' }}>
        <GridCell style={{ textAlign: 'right', paddingRight: '1.0em', color: grey2 }}>
          © 2019 App, Inc.
        </GridCell>

        <GridCell style={{ textAlign: 'left', paddingLeft: '1.0em', color: grey2 }}>
          <Clock/>
        </GridCell>
      </Grid>
    </Footer>
  );
};

export default Footer;
