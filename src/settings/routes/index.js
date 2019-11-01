import home from "./home";
import other from "./other";
import admin from "./admin";
import user from "./user";
import {APP_URL, APP_URL_API} from "../config/env";

// Combined routes
export const routes = Object.assign(home, user, other, admin);
// Object.assign 用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
export const routeLocal = APP_URL

// API
export const routeApi = APP_URL_API
// API Image
export const routeImage = APP_URL_API

