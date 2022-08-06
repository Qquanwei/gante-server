import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};

  config.io = {
    init: {},
    namespace: {
      '/': {
        connectionMiddleware: ['sharedb'],
        packetMiddleware: []
      }
    }
  }

  return config;
};
