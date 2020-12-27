import Koa = require('koa');
import Router = require('@koa/router');
import static_ = require('koa-static');

/* KOA */
export interface ConfigKoaInterface {
  version: 'default' | typeof Koa;
}
/* ROUTER */
export interface ConfigRouterInterface {
  active: boolean;
  version: 'default' | typeof Router;
}

/* STATIC */
// in the future more options might be added
interface static_options extends static_.Options {
  [key: string]: any;
}
export interface ConfigStaticInterface {
  active: boolean;
  version: 'default' | typeof static_;

  path: string;
  opts?: static_options;
}

/* CONFIGURATION */
export interface ConfigurationInterface {
  koa: ConfigKoaInterface;
  router: ConfigRouterInterface;
  static: ConfigStaticInterface;
}
