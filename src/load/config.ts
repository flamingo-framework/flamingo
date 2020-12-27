import {
  ConfigurationInterface,
  ConfigKoaInterface,
  ConfigStaticInterface,
  ConfigRouterInterface,
} from '../interface/config';

function loadConfigFile(name: string, path: string) {
  try {
    return require?.main?.require(path);
  } catch (e) {
    console.error(`Can't load configuration for module "${name}"`);
    throw e;
  }
}

function loadConfiguration(): ConfigurationInterface {
  const koa: ConfigKoaInterface = loadConfigFile('koa', './config/koa');

  const router: ConfigRouterInterface = loadConfigFile(
    'router',
    './config/router'
  );

  const static_: ConfigStaticInterface = loadConfigFile(
    'static',
    './config/static'
  );

  return {
    koa,
    router,
    static: static_,
  };
}

export = loadConfiguration;
