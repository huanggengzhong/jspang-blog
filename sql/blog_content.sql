# Host: localhost  (Version: 5.5.53)
# Date: 2020-01-05 16:33:30
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

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
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "blog_content"
#

/*!40000 ALTER TABLE `blog_content` DISABLE KEYS */;
INSERT INTO `blog_content` VALUES (1,'测试文章','视频教程','这是文章简介\n','这是文章内容');
/*!40000 ALTER TABLE `blog_content` ENABLE KEYS */;
