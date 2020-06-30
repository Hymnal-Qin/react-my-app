import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { renderIf } from '@utils/helpers';
// UI
import { level2 } from '@components/values/shadows';
import { black, white } from '@components/values/colors';
import { Icon } from '../components/icon';
// Module
import Header from './header/Header';
import { messageHide } from '@store/common/actions';
import Footer from "@layout/footer/Footer";
import AlertMessage from "@layout/AlertMessage";

const Layout = (props) =>
  <section  style={{ height: '100%' }}>
    {/* 自定义头布局 */}
    <Header/>

    {/* Page Content */}
    <main style={{
      marginTop: '5em',
      display: 'block',
      position: 'absolute',
      overflow: 'auto',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
    }}>{props.children}</main>

    {/* Message 自定义消息弹窗 */}
    {renderIf(props.common.message.open, () =>
		<AlertMessage text={props.common.message.text} onClick={props.messageHide} ac/>
    )}

    {/* 自定义尾部布局 */}
    <Footer />
  </section>
;

// Component Properties
Layout.propTypes = {
  common: PropTypes.object.isRequired,
  messageHide: PropTypes.func.isRequired,
};

// Component Properties
//Layout.defaultProps = {
//	common: {
//		message: { text: '知道了', open: true },
//	},
//	messageHide: {},
//};

const commonState = (state) => ({
  common: state.common,
});

export default connect(commonState, { messageHide })(Layout);
