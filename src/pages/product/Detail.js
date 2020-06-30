import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';

import { get } from "@store/product/actions";
import Loading from '@layout/Loading';
import { renderIf } from "@utils/helpers";
import homeRoutes from '@routes/home';
import { Helmet } from 'react-helmet/es/Helmet';
import { routeLocal } from '@routes';
import { Grid, GridCell } from '@components/grid';
import { H2, H3, H4 } from '@components/typography';
import Card from '@components/card/Card';
import { grey, grey2 } from "@components/values/colors";
import Related from '@modules/product/Related';

class Detail extends PureComponent {

  componentDidMount() {
    this.refresh(this.props.match.params.slug);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.slug !== this.props.match.params.slug) {
      this.refresh(nextProps.match.params.slug);
    }
  }

  refresh = (slug) => {
    this.props.get(slug);
  };

  render() {
    const { isLoading, item, error } = this.props.product;
    return <div>
      {!error
        ? isLoading
          ? <Loading/>
          : renderIf(item && item.id, () => (
            <div>
              {/* SEO */}
              <Helmet>
                <title>{`Product - ${item.name}`}</title>
                <meta name="description" content={`Product - ${item.name}`}/>
                <meta property="og:title" content={`Product - ${item.name}`}/>
                <meta property="og:image" content={routeLocal + item.image}/>
                <meta property="og:description" content={`Product - ${item.name}`}/>
              </Helmet>

              {/* Top title bar */}
              <Grid style={{ backgroundColor: grey }}>
                <GridCell style={{ padding: '2em', textAlign: 'center' }}>
                  <H3 font="secondary">Product</H3>
                </GridCell>
              </Grid>

              {/* Product Details */}
              <Grid gutter={true} alignCenter={true} style={{ padding: '2em' }}>
                {/* Left Content - Image */}
                <GridCell style={{ maxWidth: '35em' }}>
                  <Card>
                    <img src={routeLocal + item.image} alt={item.name} style={{ width: '100%' }}/>
                  </Card>
                </GridCell>

                {/* Right Content */}
                <GridCell style={{ textAlign: 'center' }}>
                  <H2 font="secondary">{item.name}</H2>

                  <H4 style={{ marginTop: '1em' }}>{item.description}</H4>

                  <p style={{ marginTop: '0.5em', color: grey2 }}>
                    Launched on {new Date(parseInt(item.createdAt)).toDateString()}
                  </p>
                </GridCell>
              </Grid>

              {/* Related products title bar */}
              <Grid style={{ backgroundColor: grey }}>
                <GridCell style={{ padding: '2em', textAlign: 'center' }}>
                  <H3 font="secondary">Related Products</H3>
                </GridCell>
              </Grid>

              {/* Related products list */}
              <Related productId={item.id}/>
            </div>
          ))
        : <Redirect to={homeRoutes.home.path}/>}
    </div>;
  }
}

Detail.propTypes = {
  product: PropTypes.object.isRequired,
  get: PropTypes.func.isRequired,
};

const detailState = (state) => ({
  product: state.product,
});

export default connect(detailState, { get })(withRouter(Detail));
