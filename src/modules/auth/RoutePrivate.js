import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import userRoutes from '../../routes/user';

//Component
const RoutePrivate = (props) =>
  //是否登录  是 进入角色权限判断  否 进入登录页
  props.user.isAuthenticated
    //当前路由是否需要判断权限  是 进入权限判断  否 进入页面
    ? props.role
    //根据路由配置的权限 判断登录用户角色是否符合  是 进入页面  否  进入登录
      ? props.user.detail.role === props.role
        ? <Route {...props} component={props.component}/>
        : <Redirect to={userRoutes.login.path}/>
      : <Route {...props} component={props.component}/>
    : <Redirect to={userRoutes.login.path}/>
;

RoutePrivate.propTypes = {
  user: PropTypes.object.isRequired,
};

const routePrivateState = (state) => ({
  user: state.user,
});

export default connect(routePrivateState, {})(RoutePrivate);
