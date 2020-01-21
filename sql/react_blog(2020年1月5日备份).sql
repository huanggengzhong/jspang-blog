# Host: localhost  (Version: 5.5.53)
# Date: 2020-01-05 23:39:12
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "article"
#

DROP TABLE IF EXISTS `article`;
CREATE TABLE `article` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `type_id` int(11) NOT NULL DEFAULT '0',
  `title` varchar(255) DEFAULT NULL,
  `article_content` text,
  `introduce` text,
  `addTime` int(11) NOT NULL DEFAULT '0',
  `view_count` int(11) DEFAULT NULL,
  `typeName` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

#
# Data for table "article"
#

/*!40000 ALTER TABLE `article` DISABLE KEYS */;
INSERT INTO `article` VALUES (1,1,'p09：博客详细页面制作1-编写基本页面结构','文章主体内容:这个配置时，你要先确认你已经有一台安装mysql的服务器或者是主机，当然你也可以在自己的开发机上进行安装，因为我使用的php Study这个集成开发环境（作php用的）。所以我\n，当然你也可以在自己的开发机上进行安装，因为我使用的php Study这个集成开发环境（作php用的）。所以我的机器上，当然你也可以在自己的开发机上进行安装，因为我使用的php Study这个集成开发环境（作php用的）。所以我的机器上，当然你也可以在自己的开发机上进行安装，因为我使用的php Study这个集成开发环境（作php用的）。所以我的机器上的机器上是安装的','文章简介，text类型',1578220954,1,NULL),(2,2,'p09：博客详细页面制作1-编写基本页面结构','文章主体内容:这个配置时，你要先确认你已经有一台安装mysql的服务器或者是主机，当然你也可以在自己的开发机上进行安装，因为我使用的php Study这个集成开发环境（作php用的）。所以我\n，当然你也可以在自己的开发机上进行安装，因为我使用的php Study这个集成开发环境（作php用的）。所以我的机器上，当然你也可以在自己的开发机上进行安装，因为我使用的php Study这个集成开发环境（作php用的）。所以我的机器上，当然你也可以在自己的开发机上进行安装，因为我使用的php Study这个集成开发环境（作php用的）。所以我的机器上的机器上是安装的','文章简介，text类型',1548220954,2,NULL);
/*!40000 ALTER TABLE `article` ENABLE KEYS */;

#
# Structure for table "blog_content"
#

DROP TABLE IF EXISTS `blog_content`;
CREATE TABLE `blog_content` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `introduce` text,
  `content` text,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

#
# Data for table "blog_content"
#

/*!40000 ALTER TABLE `blog_content` DISABLE KEYS */;
INSERT INTO `blog_content` VALUES (1,'测试文章34','视频教程','这是文章简介\n','这是文章内容');
/*!40000 ALTER TABLE `blog_content` ENABLE KEYS */;

#
# Structure for table "type"
#

DROP TABLE IF EXISTS `type`;
CREATE TABLE `type` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `typeName` varchar(255) NOT NULL DEFAULT '',
  `orderNum` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "type"
#

/*!40000 ALTER TABLE `type` DISABLE KEYS */;
INSERT INTO `type` VALUES (1,'视频教程',1),(2,'大胖逼逼唠',2),(3,'快乐生活',3);
/*!40000 ALTER TABLE `type` ENABLE KEYS */;
