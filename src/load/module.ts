import Koa = require('koa');
import Router = require('@koa/router');
import static_ = require('koa-static');

import {ModuleInterface} from '../interface/config';
import {ConfigurationInterface} from '../interface/config';

function loadModule(config: ConfigurationInterface): ModuleInterface {
  const Koa_: typeof Koa =
    config.koa.version === 'default' ? Koa : config.koa.version;
  const static__: typeof static_ =
    config.static.version === 'default' ? static_ : config.static.version;
  const Router_: typeof Router =
    config.router.version === 'default' ? Router : config.router.version;

  return {Koa: Koa_, static: static__, Router: Router_};
}

export = loadModule;
