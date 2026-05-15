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
];
