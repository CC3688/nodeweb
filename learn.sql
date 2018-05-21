CREATE TABLE `aboutus_table` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(200) NOT NULL,
  `content` text NOT NULL,
  `pic_src` varchar(300) NOT NULL,
  `href` varchar(300) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

 CREATE TABLE `admin_table` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(32) NOT NULL,
  `password` varchar(32) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

CREATE TABLE `banner_table` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(32) NOT NULL COMMENT '大标题',
  `description` varchar(300) NOT NULL COMMENT '描述文字',
  `href` varchar(300) NOT NULL COMMENT '点击链接',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;


CREATE TABLE `blog_table` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `pic_src` varchar(300) NOT NULL,
  `pic_big_src` varchar(255) NOT NULL,
  `summary` varchar(500) NOT NULL,
  `content` text NOT NULL,
  `post_time` int(11) NOT NULL,
  `author` varchar(32) NOT NULL,
  `n_view` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

CREATE TABLE `contact_table` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `street` varchar(50) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `fax` varchar(20) NOT NULL,
  `email` int(11) NOT NULL,
  `weibo` int(11) NOT NULL,
  `wx` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;


CREATE TABLE `custom_evaluation_table` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(32) NOT NULL COMMENT '标题',
  `description` varchar(300) NOT NULL COMMENT '评价的详情',
  `src` varchar(300) NOT NULL COMMENT '用户头像',
  PRIMARY KEY (`id`),
  KEY `id` (`id`)
  
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

CREATE TABLE `intro_table` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` int(11) NOT NULL COMMENT '大标题',
  `description` int(11) NOT NULL COMMENT '描述文字',
  `href` int(11) NOT NULL COMMENT '点击链接',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

CREATE TABLE `msg_table` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(16) NOT NULL,
  `email` varchar(64) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `subject` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

CREATE TABLE `news_table` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL COMMENT '标题',
  `summary` varchar(500) NOT NULL COMMENT '简介',
  `ico_src` varchar(300) NOT NULL COMMENT '产品小图标',
  `big_pic_src` varchar(300) NOT NULL COMMENT '详情大图',
  `content` text NOT NULL COMMENT '内容',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;