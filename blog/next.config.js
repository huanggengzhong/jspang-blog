//这个是配置文件在nextjs官网搜索zeit,在对应的github中就可以找到,jspang官网中是多加了一层判断
const withCSS = require('@zeit/next-css')
if(typeof require !=='undefined'){
    require.extensions['css']=file=>{}
}
module.exports = withCSS({
    /* config options here */
})