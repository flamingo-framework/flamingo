import {
  ConfigurationInterface,
  ConfigStaticInterface,
} from '../interface/config';

class Config {
  // readonly storage: ConfigurationInterface;
  constructor() {
    const static_: ConfigStaticInterface = this.load(
      'static',
      './config/static'
    );

    console.log(static_);
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
