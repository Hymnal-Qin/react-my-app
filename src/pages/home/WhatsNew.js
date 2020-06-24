/* eslint-disable react/no-unescaped-entities */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet/es/Helmet';

import { Grid, GridCell } from '../../components/grid';
import { H3 } from '../../components/typography';
import { grey, grey2, white } from '../../components/values/colors';
import { Link } from 'react-router-dom';
import { Button } from '../../components/button';
import { Icon } from '../../components/icon';

import crateRoutes from '../../routes/crate';
import userRoutes from '../../routes/user';
import { getList as getProductList } from '../../store/product/actions';
import Loading from '../../layout/Loading';
import EmptyMessage from '../../layout/EmptyMessage';
import ProductItem from '../../modules/product/Item';

class WhatsNew extends PureComponent {

  // Runs on client only
  componentDidMount() {
    this.props.getProductList();
  }

  render() {
    const { isLoading, list } = this.props.products;
    return (
      <div>
        {/* SEO */}
        <Helmet>
          <title>What's new - Crate</title>
        </Helmet>

        {/* Top title bar */}
        <Grid style={{ backgroundColor: grey }}>
          <GridCell style={{ padding: '2em', textAlign: 'center' }}>
            <H3 font="secondary">What's new</H3>

            <p style={{ marginTop: '1em', color: grey2 }}>Watch this space to keep updated with latest clothes and
              accessories we add to your crates.</p>
          </GridCell>
        </Grid>

        {/* Product list */}
        <Grid>
          <GridCell>
            {isLoading
              ? <Loading/>
              : list && list.length > 0
                ? list.map(product =>
                  <div key={product.id} style={{ margin: '2em', float: 'left' }}>
                    <ProductItem product={product}/>
                  </div>
                )
                : <EmptyMessage message='No products to show'/>}
          </GridCell>

        </Grid>

        {/* Bottom call to action bar */}
        <Grid style={{ backgroundColor: grey }}>
          <GridCell style={{ padding: '3em', textAlign: 'center' }}>
            <p style={{ marginBottom: '1em', color: grey2 }}>Like what you see?</p>

            {
              this.props.user.isAuthenticated
                ? <Link to={crateRoutes.list.path}>
                  <Button theme="primary">
                    Subscribe <Icon size={1.2} style={{ color: white }}>navigate_next</Icon>
                  </Button>
                </Link>
                : <Link to={userRoutes.login.path}>
                  <Button theme="primary">Start <Icon size={1.2} style={{ color: white }}>navigate_next</Icon></Button>
                </Link>
            }
          </GridCell>
        </Grid>
      </div>
    );
  }
}

WhatsNew.propTypes = {
  user: PropTypes.object.isRequired,
  products: PropTypes.object.isRequired,
  getProductList: PropTypes.func.isRequired,
};

const whatsNewState = (state) => ({
  user: state.user,
  products: state.products,
});

export default connect(whatsNewState, { getProductList })(WhatsNew);
