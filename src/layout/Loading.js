import React from 'react';
import { grey2 } from '../components/values/colors';

const Loading = (props) => (
  <p style={{ color: grey2, textAlign: 'center', padding: '2em' }}>{props.message ? props.message : 'loading...'}</p>
);

export default Loading;
