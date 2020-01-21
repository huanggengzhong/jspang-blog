// 详情页
import React, { useState } from 'react'
import Header from './../components/Header'
import Head from 'next/head'
import { Row, Col, Icon, Breadcrumb } from 'antd'
import Author from './../components/Author'
import Ad from './../components/Ad'
import Footer from './../components/Footer'
import './../static/style/pages/detail.css'

const Detail = () => {
  return (
    <div>
      <Head>
        <title>播客详情页</title>
      </Head>
      <Header></Header>
      <Row type="flex" justify="center" className="comm-main">
        <Col xs={24} sm={24} md={10} lg={15} xl={12}>
          <div className="bread-div">
            <Breadcrumb>
              <Breadcrumb.Item>
                <a href="/">首页</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>视频列表</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div>
            <div className="detailed-title">
              React实战视频教程-技术胖Blog开发(更新08集)
            </div>
            <div className="list-icon center">
              <span>
                <Icon type="calendar" />
                2020年1月18日
              </span>
              <span>
                <Icon type="folder" />
                视频教程
              </span>
              <span>
                <Icon type="fire" />
                5498人
              </span>
            </div>
            <div className="detailed-content">
              详细内容
            </div>
          </div>
        </Col>
        <Col xs={0} sm={0} md={7} lg={5} xl={4} className="comm-right">
          <Author />
          <Ad />
        </Col>
      </Row>
      <Footer />
    </div>
  )
}
export default Detail
