import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  io: {
    enable: true,
    package: 'egg-socket.io'
  }
};

export default plugin;
