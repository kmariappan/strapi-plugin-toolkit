/* eslint-disable @typescript-eslint/ban-types */
import { entityController } from './entity.controller';

type PluginControllers = {
  [key: string]: Function | Object;
};

const controllers: PluginControllers = {
  entityController,
};

export default controllers;
