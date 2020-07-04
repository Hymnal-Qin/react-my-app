import React from 'react';
import PropTypes from 'prop-types';

import { Grid, GridCell } from '@components/grid';
import { Tile as ImageTile } from '@components/image';
import { level1 } from '@components/values/shadows';

import { routeLocal } from '@routes';

const Adornment = (props) =>
	<GridCell>
		<Grid gutter alignCenter>
			<GridCell gutter justifyCenter>
				<ImageTile width={300} height={530} shadow={level1} image={`${routeLocal}${props.images[0]}`} />
			</GridCell>
			<GridCell gutter>
				<Grid>
					<GridCell justifyCenter>
						<ImageTile width={170} height={250} shadow={level1} image={`${routeLocal}${props.images[1]}`} />
					</GridCell>
				</Grid>
				<Grid>
					<GridCell justifyCenter>
						<ImageTile
							width={170}
							height={250}
							shadow={level1}
							style={{ marginTop: '1.9em' }}
							image={`${routeLocal}${props.images[2]}`}
						/>
					</GridCell>
				</Grid>
			</GridCell>
		</Grid>
	</GridCell>
;

Adornment.propTypes = {
	images: PropTypes.array.isRequired,
};

Adornment.defaultProps = {
	images: ['/images/stock/women/1.jpg', '/images/stock/women/2.jpg', '/images/stock/women/3.jpg'],
};

export default Adornment;
