'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  mysql:{
    enable:true,
    package:'egg-mysql'
  }
};

// 插件配置
// modexports.mysql={
//   enable:true,
//   packag:'egg-mysql'
// }

