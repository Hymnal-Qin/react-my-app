import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Grid, GridCell } from '@components/grid';

import Loading from '@layout/Loading';
import EmptyMessage from '@layout/EmptyMessage';
import ProductItem from './Item';

import { getRelatedList as getProductRelatedList } from '@store/product/actions';

const Related = ({ productId, getProductRelatedList, productsRelated }) => {

	useEffect(() => {
		getProductRelatedList(productId);
	}, [productId]);

	const { isLoading, list } = productsRelated;
	return (
		<div>
			{/* Related product list */}
			<Grid>
				<GridCell>
					{isLoading
						? <Loading/>
						: list && list.length > 0
							? list.map(product => (
								<div key={product.id} style={{ margin: '2em', float: 'left' }}>
									<ProductItem product={product}/>
								</div>
							))
							: <EmptyMessage message="No related products to show."/>}
				</GridCell>

			</Grid>
		</div>
	);
};

Related.propTypes = {
	productId: PropTypes.number.isRequired,
	productsRelated: PropTypes.object.isRequired,
	getProductRelatedList: PropTypes.func.isRequired,
};

const relatedState = (state) => ({
	productsRelated: state.productsRelated,
});

export default connect(relatedState, { getProductRelatedList })(withRouter(Related));
