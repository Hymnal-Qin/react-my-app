import React from 'react';
import PropTypes from 'prop-types';

import { grey3 } from '../components/values/colors';

const EmptyMessage = (props) => 
  <p style={{ textAlign: 'center', color: grey3, flex: 1, padding: 10 }}>{props.message}</p>
;

EmptyMessage.propTypes = {
  message: PropTypes.string,
};

EmptyMessage.defaultProps = {
  message: 'No data to show',
};

export default EmptyMessage;
