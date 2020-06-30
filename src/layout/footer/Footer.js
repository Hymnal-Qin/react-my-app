import React from 'react';
// UI
import {Grid, GridCell} from '@components/grid';
// Module
import Clock from '@modules/Clock';
import {grey2} from '@components/values/colors';

const Footer = () => {
	return (
		<footer style={{
			padding: '0 2em',
			position: 'absolute',
			left: 0,
			right: 0,
			bottom: 0,
			maxWidth: '1012px !important',
			marginRight: 'auto',
			marginLeft: 'auto',
			color: `${grey2} !important`,
			font: `14px "Century Gothic", Futura, sans-serif`,
		}}>
			<Grid alignCenter={true} style={{marginTop: '1.5em'}}>
				<GridCell style={{textAlign: 'right', paddingRight: '1.0em', color: grey2}}>
					© 2019 App, Inc.
				</GridCell>

				<GridCell style={{textAlign: 'left', paddingLeft: '1.0em', color: grey2}}>
					<Clock/>
				</GridCell>
			</Grid>
		</footer>
	);
};

export default Footer;
