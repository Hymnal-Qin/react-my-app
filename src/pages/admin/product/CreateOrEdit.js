import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Helmet } from 'react-helmet/es/Helmet';
import { Link, withRouter } from 'react-router-dom';

import AdminMenu from '@pages/admin/Menu';
import { Grid, GridCell } from '@components/grid';
import { Button } from '@components/button';
import { Icon } from '@components/icon';
import { H4 } from '@components/typography';
import { Input, Select, Textarea } from '@components/input';

import { renderIf, slug } from '@utils/helpers';

import { routeImage } from '@routes/index';
import { white } from '@components/values/colors';
import admin from '@routes/admin';

import {
	createOrUpdate as productCreateOrUpdate,
	getById as getProductById,
	getTypes as getProductTypes,
} from '@store/product/actions';
import { getGenders as getUserGenders } from '@store/user/actions';
import { upload } from '@store/common/actions';


const CreateOrEdit = (props) => {
	const [state, setState] = useState({
		isLoading: false,
		product: {
			id: 0,
			name: '',
			slug: '',
			description: '',
			type: 0,
			gender: 0,
			image: '',
		},
		productTypes: [],
		userGenders: [],
	});

	useEffect(() => {
		props.getProductTypes()
			.then((types) => {
				if (types) {
					let product = state.product
					product.type = types[0].id
					setState(state => ({...state, productTypes: types, product: product}))
				}
			});
		props.getUserGenders()
			.then((userGenders) => {
				if (userGenders) {
					let product = state.product
					product.gender = userGenders[0].id
					setState(state => ({...state, userGenders: userGenders, product: product}))
				}
			});

		// Get product details (edit case)
		const getProduct = (productId) => {
			props.getProductById(productId)
				.then((data) => {
					if (data) setState(state => ({ ...state, product: data }));
				});
		};
		getProduct(parseInt(props.match.params.id));
	}, []);

	const onChange = (e) => {
		let product = state.product;
		product[e.target.name] = e.target.value;
		if (e.target.name === 'name') {
			product.slug = slug(e.target.value);
		}
		if (e.target.name === 'type' || 'gender') {
			product[e.target.name] = parseInt(e.target.value);
		}
		console.log(product);
		setState(state => ({ ...state, product: product }));
	};

	const onUpload = (e) => {
		setState(state => ({ ...state, isLoading: true }));
		let data = new FormData();
		data.append('file', e.target.files[0]);
		props.upload(data)
			.then((data) => {
				if (data) {
					let product = state.product;
					product.image = `/images/uploads/${data.file}`;
					setState(state => ({ ...state, product: product }));
				}
			})
			.then(() => {
				setState(state => ({ ...state, isLoading: false }));
			});
	};

	const onSubmit = (e) => {
		e.preventDefault();
		setState(state => ({ ...state, isLoading: true }));
		props.productCreateOrUpdate(state.product)
			.then((data) => {
				if (data) props.history.push(admin.productList.path);
			})
			.then(() => setState(state => ({ ...state, isLoading: false })));
	};

	return (
		<div>
			{/* SEO	*/}
			<Helmet>
				<title>Product / Create or Edit - Admin - Crate</title>
			</Helmet>

			{/* Top menu bar */}
			<AdminMenu/>

			{/* Page content	*/}
			<div>
				{/* Top actions bar */}
				<Grid alignCenter={true} style={{ padding: '1em' }}>
					<GridCell style={{ textAlign: 'left' }}>
						<Link to={admin.productList.path}>
							<Button>
								<Icon size={1.2}>arrow_back</Icon> Back
							</Button>
						</Link>
					</GridCell>
				</Grid>

				{/* Product list */}
				<Grid alignCenter={true} style={{ padding: '1em' }}>
					<GridCell>
						<H4 font='secondary' style={{ marginBottom: '1em', textAlign: 'center' }}>
							{props.match.params.id === undefined ? 'Create' : 'Edit'} Product
						</H4>

						{/* Form */}
						<form onSubmit={(e) => onSubmit(e)}>
							<div style={{ width: '25em', margin: '0 auto' }}>
								{/* Name */}
								<Input
									type='text'
									fullWidth
									placeholder='Name'
									required='required'
									name='name'
									autoComplete='off'
									value={state.product.name}
									onChange={(e) => onChange(e)}
								/>

								{/* Description	*/}
								<Textarea
									fullWidth
									placeholder='Description'
									required='required'
									name='description'
									value={state.product.description}
									onChange={(e) => onChange(e)}
									style={{ marginTop: '1em' }}
								/>

								{/*	Type */}
								<Select
									fullWidth
									required='required'
									name='type'
									value={state.product.type}
									onChange={(e) => onChange(e)}
									style={{ marginTop: '1em' }}
								>
									{
										state.productTypes.length > 0
											? state.productTypes.map((type) => (
												<option value={type.id} key={type.id}>{type.name}</option>
											))
											: <option disabled='disabled' selected='selected'>Select type</option>
									}
								</Select>

								{/*	Gender */}
								<Select
									fullWidth
									required='required'
									name='gender'
									value={state.product.gender}
									onChange={(e) => onChange(e)}
									style={{ marginTop: '1em' }}
								>
									{
										state.userGenders.length > 0
											? state.userGenders.map((gender) => (
												<option value={gender.id} key={gender.id}>{gender.name}</option>
											))
											: <option disabled='disabled' selected='selected'>Select gender</option>
									}
								</Select>

								{/* Update File	*/}
								<div style={{ marginTop: '1em' }}>
									<Input
										type='file'
										name='file'
										multiple='multiple'
										required={state.product.id === 0}
										onChange={(e) => onUpload(e)}
									/>
								</div>

								{/*	Upload image */}
								{renderIf(state.product.image !== '', () => (
									<img src={routeImage + state.product.image} alt='Product Image'
											 style={{ width: 200, marginTop: '1em' }}/>
								))}
							</div>

							{/* Form submit	*/}
							<div style={{ marginTop: '2em', textAlign: 'center' }}>
								<Button type='submit' theme='secondary' disabled={state.isLoading}>
									<Icon size={1.2} style={{ color: white }}>check</Icon> Save
								</Button>
							</div>
						</form>
					</GridCell>
				</Grid>
			</div>
		</div>
	);
};

CreateOrEdit.propTypes = {
	productCreateOrUpdate: PropTypes.func.isRequired,
	getProductById: PropTypes.func.isRequired,
	getProductTypes: PropTypes.func.isRequired,
	getUserGenders: PropTypes.func.isRequired,
	upload: PropTypes.func.isRequired,
};

export default connect(null, {
	productCreateOrUpdate,
	getProductById,
	getProductTypes,
	getUserGenders,
	upload,
})(withRouter(CreateOrEdit));
