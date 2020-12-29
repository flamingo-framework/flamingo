import {KoaInterface, RouterInterface, staticInterface} from './module';

interface ConfigEnablableInterface {
  enable: boolean;
}

/* KOA */
export interface ConfigKoaInterface {
  version: 'default' | typeof KoaInterface;
}
/* ROUTER */
export interface ConfigRouterInterface extends ConfigEnablableInterface {
  version: 'default' | typeof RouterInterface;
}

/* STATIC */
interface staticOptionsInterface extends staticInterface.Options {
  [key: string]: any;
}
export interface ConfigStaticInterface extends ConfigEnablableInterface {
  version: 'default' | typeof staticInterface;

  path: string;
  opts?: staticOptionsInterface;
}

/* CONFIGURATION */
export interface ConfigurationInterface {
  koa: ConfigKoaInterface;
  router: ConfigRouterInterface;
  static: ConfigStaticInterface;
}
