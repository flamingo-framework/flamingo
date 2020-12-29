import KoaInterface = require('koa');
import RouterInterface = require('@koa/router');
import staticInterface = require('koa-static');

export {KoaInterface};
export {RouterInterface};
export {staticInterface};

/* MODULES */
export interface ModuleInterface {
  Koa: typeof KoaInterface;
  Router: typeof RouterInterface | undefined;
  static: typeof staticInterface | undefined;
}
