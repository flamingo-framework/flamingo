import loadConfiguration = require('./load/config');
import {ConfigurationInterface} from './interface/config';

class Flamingo {
  readonly config: ConfigurationInterface;
  constructor() {
    console.log('Hello World from Flamingo!');
    this.config = loadConfiguration();
  }
}
const flamingo = new Flamingo();
export {flamingo};
