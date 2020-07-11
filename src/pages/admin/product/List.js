import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Helmet } from 'react-helmet/es/Helmet';
import { Grid, GridCell } from '@components/grid';
import { Link } from 'react-router-dom';
import admin from '@routes/admin';
import { Button } from '@components/button';
import { Icon } from '@components/icon';
import { black, white } from '@components/values/colors';

import EmptyMessage from '@layout/EmptyMessage';
import AdminMenu from '@pages/admin/Menu';

import { getList as getProductList, remove as removeProduct } from '@store/product/actions';
import { routeImage } from '@routes/index';
import Loading from '@layout/Loading';


const List = (props) => {

	const [state, setState] = useState({ isLoading: false })

	useEffect(() => {
		props.getProductList();
	}, []);

	const remove = (id) => {
		let check = window.confirm('Are you sure you want to delete this product?');
		if (check) {
			setState({ isLoading: true})
			console.log('remove')
			props.removeProduct({ id })
				.then((data) => {
					console.log('remove' + data)
					if (data) props.getProductList(false);
				})
				.then(() => {
					setState({ isLoading: false})
				});
		}
	};

	const { isLoading, list } = props.products;
	return (
		<div>
			{/* SEO */}
			<Helmet>
				<title>Products - Admin - Crate</title>
			</Helmet>

			{/* Top menu bar */}
			<AdminMenu/>

			{/* Page Content */}
			<div>
				{/* Top actions bar */}
				<Grid alignCenter={true} style={{ padding: '1em' }}>
					<GridCell style={{ textAlign: 'right' }}>
						<Link to={admin.productCreate.path}>
							<Button theme='secondary' style={{ marginTop: '1em' }}>
								<Icon size={1.2} style={{ color: white }}>add</Icon> Add
							</Button>
						</Link>
					</GridCell>
				</Grid>

				<Grid alignCenter={true} style={{ padding: '1em' }}>
					<GridCell>
						<table className='striped'>
							<thead>
							<tr>
								<th>Image</th>
								<th>Name</th>
								<th>Description</th>
								<th>Created at</th>
								<th>Updated at</th>
								<th style={{ textAlign: 'center' }}>Actions</th>
							</tr>
							</thead>

							<tbody>
							{
								isLoading
									? <tr>
										<td colSpan='6'>
											<Loading message="loading products..."/>
										</td>
									</tr>
									: (
										list.length > 0
											? list.map(({ id, image, name, description, createdAt, updatedAt }) => (
												<tr key={id}>
													<td>
														<img src={routeImage + image} alt={name} style={{ width: 100 }}/>
													</td>

													<td>
														{name}
													</td>

													<td>
														{description}
													</td>

													<td>
														{new Date(parseInt(createdAt)).toDateString()}
													</td>

													<td>
														{new Date(parseInt(updatedAt)).toDateString()}
													</td>

													<td style={{ textAlign: 'center' }}>
														<Link to={admin.productEdit.path(id)}>
															<Icon size={2} style={{ color: black }}>mode_edit</Icon>
														</Link>

														<span style={{ cursor: 'pointer' }} onClick={() => remove(id)}>
												<Icon size={2} style={{ marginLeft: '0.5em' }}>delete</Icon>
											</span>
													</td>
												</tr>
											))
											: <tr>
												<td>
													<EmptyMessage message="No products to show."/>
												</td>
											</tr>
									)
							}
							</tbody>

						</table>
					</GridCell>
				</Grid>
			</div>
		</div>
	);
};

List.propTypes = {
	products: PropTypes.object.isRequired,
	getProductList: PropTypes.func.isRequired,
	removeProduct: PropTypes.func.isRequired,
};

const listState = (state) => ({
	products: state.products,
});

export default connect(listState, { getProductList, removeProduct })(List);
