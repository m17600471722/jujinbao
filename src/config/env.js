/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 *
 */

// let baseUrl = '//192.168.2.245:1001';
let baseUrl = "";
let routerMode = "hash";
let imgBaseUrl = "";

if (process.env.NODE_ENV == "development") {
  //测试环境地址
  baseUrl = 'http://61.170.170.234:8100/';
  // baseUrl = "http://47.103.137.19/api/";
  imgBaseUrl = "/img/";
} else if (process.env.NODE_ENV == "production") {
  //生产环境地址
  // baseUrl = "http://47.103.137.19/api/";
  baseUrl = 'http://61.170.170.234:8100/';
}

export { baseUrl, routerMode, imgBaseUrl };
