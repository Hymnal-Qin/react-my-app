import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Card } from '../../components/card';
import { black, grey2, white } from '../../components/values/colors';
import { H4 } from '../../components/typography';

import { routeLocal } from '../../routes';
import productRoutes from '../../routes/product';

const Item = (props) => {
  const { name, slug, description, image } = props.product;
  return (
    <Link to={productRoutes.product.path(slug)}>
      <Card style={{ width: '18em', margin: '2.5em auto', backgroundColor: white }}>
        <img src={routeLocal + image} alt={name} style={{ width: '100%' }}/>

        <div style={{ padding: '1em 1.2em' }}>
          <H4 font='secondary' style={{ color: black }}>{name}</H4>

          <p style={{ color: grey2, marginTop: '1em' }}>{description}</p>
        </div>
      </Card>
    </Link>
  );
};

Item.propTypes = {
  product: PropTypes.object.isRequired,
};


export default Item;
