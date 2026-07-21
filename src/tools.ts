export interface ToolItem {
  id: string;
  title: string;
  description: string;
  url: string;
  icon: string;
  color: string;
  tag?: string;
}

export const tools: ToolItem[] = [
  {
    id: "shop-review",
    title: "AI 探店点评生成器",
    description: "基于 AI 智能生成探店点评文案，支持多种风格和平台",
    url: "/dp",
    icon: "shop",
    color: "#f59e0b",
    tag: "热门",
  },
  {
    id: "pansou",
    title: "PanSou 网盘搜索",
    description:
      "高性能网盘资源搜索API服务，支持TG频道和插件搜索，多频道多插件并发搜索、结果智能排序和网盘类型分类，Docker集成前后端一键启动",
    url: "/ps",
    icon: "search",
    color: "#3b82f6",
  },
];
