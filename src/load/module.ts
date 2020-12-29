import {stat} from 'fs';
import {ConfigurationInterface} from '../interface/config';
import {
  ModuleInterface,
  KoaInterface,
  RouterInterface,
  staticInterface,
} from '../interface/module';

function loadModule(config: ConfigurationInterface): ModuleInterface {
  const Koa: typeof KoaInterface =
    config.koa.version === 'default' ? require('koa') : config.koa.version;
  const static_koa: typeof staticInterface =
    config.static.version === 'default'
      ? require('koa-static')
      : config.static.version;
  const Router: typeof RouterInterface =
    config.router.version === 'default'
      ? require('@koa/router')
      : config.router.version;

  return {Koa, static: static_koa, Router};
}

export = loadModule;
