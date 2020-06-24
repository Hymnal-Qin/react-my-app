import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getRelatedList as getProductRelatedList } from '../../store/product/actions';
import { Grid, GridCell } from '../../components/grid';
import Loading from '../../layout/Loading';
import EmptyMessage from '../../layout/EmptyMessage';
import ProductItem from './Item';
import { productsRelated } from '../../store/product/state';

class Related extends PureComponent {

  componentDidMount() {
    this.refresh(this.props.productId);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.productId !== this.props.productId) {
      this.refresh(nextProps.productId);
    }
  }

  refresh = (productId) => {
    this.props.getProductRelatedList(productId);
  };

  render() {
    const { isLoading, list } = this.props.productsRelated;
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
  }
}

Related.propTypes = {
  productId: PropTypes.number.isRequired,
  productsRelated: PropTypes.object.isRequired,
  getProductRelatedList: PropTypes.func.isRequired,
};

const relatedState = (state) => ({
  productsRelated: state.productsRelated,
});

//eslint-disable-next-line no-undef
export default connect(relatedState, { getProductRelatedList })(withRouter(Related));
