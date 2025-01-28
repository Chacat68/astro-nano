// 从 @types 导入类型定义
import type { Site, Metadata, Socials } from "@types";

// 网站基本配置
export const SITE: Site = {
  NAME: "CHACAT-WorkPage",                // 网站名称
  EMAIL: "chawf56@outlook.com",   // 联系邮箱
  NUM_POSTS_ON_HOMEPAGE: 3,          // 首页显示的博客文章数量
  NUM_WORKS_ON_HOMEPAGE: 2,          // 首页显示的工作经历数量
  NUM_PROJECTS_ON_HOMEPAGE: 3,       // 首页显示的项目数量
};

// 首页元数据
export const HOME: Metadata = {
  TITLE: "首页",
  DESCRIPTION: "CHACAT 工作经历展示。",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "分享我热衷的各类主题文章集合。",
};

export const WORK: Metadata = {
  TITLE: "工作",
  DESCRIPTION: "我的工作经历和成就展示。",
};

export const PROJECTS: Metadata = {
  TITLE: "项目",
  DESCRIPTION: "我的项目集合，包含代码仓库和演示链接。",
};

// 社交媒体链接配置
export const SOCIALS: Socials = [
  { 
    NAME: "twitter-x",               // Twitter/X 社交平台
    HREF: "https://x.com/Chacat68",
  },
  { 
    NAME: "github",                  // GitHub 代码仓库
    HREF: "https://github.com/Chacat68"
  },
  // { 
  //   NAME: "linkedin",                // LinkedIn 职业社交平台
  //   HREF: "https://www.linkedin.com/in/markhorn-dev",
  // }
];
