/// <reference types="react-scripts" />
//import dotenv from 'dotenv';
// dotenv 从文件加载环境变量
// Load .env.development

// Load .env
require('dotenv').config();

// URL
export const APP_URL = process.env.REACT_APP_URL;
export const APP_URL_API = process.env.REACT_APP_URL_API;

// Environment
export const NODE_ENV = process.env.NODE_ENV;
/**
 * development 开发环境
 * production 正式环境
 */

// Port
export const PORT = process.env.PORT || 3000;

// .env.development 配置文件读取
/**
 配置IP和端口号
 APP_URL 当前client的IP和端口号
 APP_URL_API 接口server的IP和端口号
 **/

//server port
export const EXPRESS_PORT = process.env.EXPRESS_PORT
