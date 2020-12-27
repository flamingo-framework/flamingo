import {Config} from './load/config';

// import Router = require('@koa/router');

class Flamingo {
  constructor() {
    console.log('Hello World from Flamingo!');
    const config = new Config();
    console.log(config);
  }
}
const flamingo = new Flamingo();
export {flamingo};
