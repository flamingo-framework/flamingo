import loadConfiguration = require('./load/config');
import loadModule = require('./load/module');
import {ConfigurationInterface, ModuleInterface} from './interface/config';
import Koa = require('koa');

class Flamingo {
  readonly config: ConfigurationInterface;
  readonly module: ModuleInterface;
  readonly app: Koa;
  constructor() {
    this.config = loadConfiguration();
    console.log('Flamingo: configuration loaded', this.config);
    this.module = loadModule(this.config);
    console.log('Flaming: module loaded', this.module);
    this.app = new this.module.Koa();
  }
}
const flamingo = new Flamingo();
export {flamingo};
