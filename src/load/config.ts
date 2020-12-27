import {
  ConfigurationInterface,
  ConfigStaticInterface,
  ConfigRouterInterface,
} from '../interface/config';

class Config {
  readonly storage: ConfigurationInterface;
  constructor() {
    const router: ConfigRouterInterface = this.load(
      'router',
      './config/router'
    );

    const static_: ConfigStaticInterface = this.load(
      'static',
      './config/static'
    );

    this.storage = {
      router,
      static: static_,
    };
  }

  private load(name: string, path: string) {
    try {
      return require?.main?.require(path);
    } catch (e) {
      console.error(`Can't load configuration for module "${name}"`);
      throw e;
    }
  }
}

export {Config};
