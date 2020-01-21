'use strict'
/**
 * 客户端路由
 */
module.exports = app => {
  const { router, controller } = app
  router.get('/default/index', controller.default.home.index)
  router.get('/default/getArticleList', controller.default.home.getArticleList)
  router.get('/default/getArticleById', controller.default.home.getArticleById)
  // 动态传递参数,案例http://127.0.0.1:7001/default/getArticleById/2
  router.get('/default/getArticleById/:id', controller.default.home.getArticleById)
  router.get('/default/getTypeInfo', controller.default.home.getTypeInfo)
}
