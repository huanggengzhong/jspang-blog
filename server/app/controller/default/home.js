'use strict'

const Controller = require('egg').Controller

class HomeController extends Controller {
  // async index() {
  //   const { ctx } = this
  //   ctx.body = '客户端 api 接口'
  // }

  //获取数据库用户表的数据
  async index() {
    // 测试链接数据库
    // let result =await this.app.mysql.get('blog_content',{})
    // this.ctx.body=result;

    this.ctx.body = 'api hi'
  }
  async getArticleList() {
    let sql = `
    SELECT article.id as id,
    article.title as title,
    article.introduce as introduce,
    FROM_UNIXTIME(article.addTime,'%Y-%m-%d %H:%I:%S') as addTime,
    article.view_count as view_count,
    article.typeName as typeName
    FROM article LEFT JOIN type ON article.type_id=type.Id`

    const results = await this.app.mysql.query(sql)
    this.ctx.body = { data: results }
  }
  async getArticleById() {
    //先配置路由的动态传值，然后再接收值
    let id = this.ctx.params.id
    console.log(id)

    let sql = `
            SELECT article.id as id,
        article.title as title,
        article.introduce as introduce,
        article.article_content as article_content,
        FROM_UNIXTIME(article.addTime,'%Y-%m-%d %H:%i:%s' ) as addTime,
        article.view_count as view_count ,
        type.typeName as typeName ,
        type.id as typeId 
        FROM article LEFT JOIN type ON article.type_id = type.Id 
        WHERE article.id=${id}`

    const result = await this.app.mysql.query(sql)

    this.ctx.body = { data: result }
  }
  // 得到类别和名称接口
 
    async getTypeInfo(){

      const result = await this.app.mysql.select('type')
      this.ctx.body = {data:result}

  }
}

module.exports = HomeController
