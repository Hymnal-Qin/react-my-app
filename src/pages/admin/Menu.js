import React from 'react';

import { Grid, GridCell } from '@components/grid';
import { black, grey } from '@components/values/colors';
import Menu from '@layout/header/Menu';
import MenuItem from '@layout/header/MenuItem';
import admin from '@routes/admin';

const AdminMenu = () => (
	<Grid style={{ backgroundColor: grey }}>
		<GridCell style={{ padding: '2em', textAlign: 'center' }}>
			<Menu>
				<MenuItem to={admin.dashboard.path} type='primary' style={{ color: black }}>Dashboard</MenuItem>
				<MenuItem to={admin.productList.path} section='products' type='primary' style={{ color: black }}>Products</MenuItem>
			</Menu>
		</GridCell>
	</Grid>
);
export default AdminMenu;
