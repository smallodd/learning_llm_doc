import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "zh-CN",
  title: "小奇的大模型学习笔记",
  description: "大语言模型、RAG、智能体与 AI 应用开发知识库",
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: "RAG", link: "/RAG基础/01RAG基础" },
      { text: "智能体", link: "/Agent智能体/Agent智能体" },
      {
        text: "框架",
        items: [
          { text: "LangGraph", link: "/LangGraph框架/LangGraph框架" },
          { text: "LlamaIndex", link: "/LlamaIndex框架/LlamaIndex框架" },
          { text: "Coze", link: "/Coze可视化AI开发框架/Coze可视化AI开发框架" }
        ]
      },
      { text: "MCP", link: "/MCP-模型上下文协议/MCP-模型上下文协议" },
      { text: "FastAPI", link: "/FastAPI/FastAPI" }
    ],
    sidebar: [
      {
        text: "RAG 基础",
        collapsed: false,
        items: [
          { text: "RAG 基础", link: "/RAG基础/01RAG基础" },
          { text: "LangChain 框架初识", link: "/RAG基础/02langchain框架初识" },
          { text: "RAG 进阶", link: "/RAG基础/03RAG进阶" },
          { text: "Advanced RAG", link: "/RAG基础/04Advanced RAG" },
          { text: "RAG 评估与应用框架", link: "/RAG基础/05RAG评估与应用框架" },
          { text: "RAG 项目实战", link: "/RAG基础/06RAG项目实战" }
        ]
      },
      {
        text: "智能体与协议",
        collapsed: false,
        items: [
          { text: "Agent 智能体", link: "/Agent智能体/Agent智能体" },
          { text: "MCP 模型上下文协议", link: "/MCP-模型上下文协议/MCP-模型上下文协议" }
        ]
      },
      {
        text: "AI 开发框架",
        collapsed: false,
        items: [
          { text: "LangGraph 框架", link: "/LangGraph框架/LangGraph框架" },
          { text: "LlamaIndex 框架", link: "/LlamaIndex框架/LlamaIndex框架" },
          { text: "LlamaIndex 案例演示", link: "/LlamaIndex案例演示/LlamaIndex案例演示" },
          { text: "Coze 可视化 AI 开发框架", link: "/Coze可视化AI开发框架/Coze可视化AI开发框架" }
        ]
      },
      {
        text: "应用开发",
        collapsed: false,
        items: [{ text: "FastAPI", link: "/FastAPI/FastAPI" }]
      }
    ],
    outline: {
      level: [2, 3],
      label: "本页目录"
    },
    search: {
      provider: "local"
    },
    docFooter: {
      prev: "上一篇",
      next: "下一篇"
    },
    lastUpdated: {
      text: "最后更新于"
    },
    returnToTopLabel: "返回顶部",
    sidebarMenuLabel: "目录",
    darkModeSwitchLabel: "主题"
  }
});
