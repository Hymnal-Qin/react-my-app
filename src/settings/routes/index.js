import home from "./home";
import other from "./other";
import admin from "./admin";
import user from "./user";

// Combined routes
export const routes = Object.assign(home, user, other, admin);
// Object.assign 用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
