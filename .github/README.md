# 有事问孙哥 · AI 答疑站

> **🌐 在线体验：[sunge.app](https://sunge.app)** —— 你的爱情、事业、搞钱问题，孙哥思维给你答疑解惑。

本仓库 fork 自孙哥的[《我的女友景甜》原仓库](https://github.com/HEJustinSun/my-girlfriend-jingtian-latex)（XeLaTeX 排版工程，原文和 PDF 都在根目录），并在 [`apps/`](https://github.com/imsai-sh/my-girlfriend-jingtian-latex/tree/main/apps) 目录把孙哥炼化成了一个 AI：

- 网友在网页上跟"孙哥"聊天，回答由**你本机的 agent CLI**（Claude Code / Codex）生成
- 不做 agent 循环、不收 API Key、对话不经过任何服务器——书里那个说"不要把这五千万美元给她"的 Claude，现在在你自己的机器上给你算账
- 孙哥人设是标准 Agent Skill 格式，核心思维常驻 + 爱情/事业/搞钱/吃瓜话题叠加

**⭐ 觉得好玩请点个 Star**——孙哥说过，花的每一分钱都要让全世界听到响；你点的每一个 star，都是不花钱的响。

## 快速开始

1. 打开 [sunge.app](https://sunge.app)
2. 按页面提示跑一条安装命令，装一个只监听 `127.0.0.1` 的本地小桥（零依赖单文件，[开源可审计](https://github.com/imsai-sh/my-girlfriend-jingtian-latex/tree/main/apps/bridge)，重复执行即升级）
3. 回到网页，选 Claude Code 或 Codex，开聊

前提：本机已装并登录过 [Claude Code](https://claude.com/claude-code) 或 [Codex](https://developers.openai.com/codex/cli) 任意一个。

## 🤝 贡献你的"孙哥思维 skill"（不用写代码）

我们支持多 skills，你贡献的话题 skill 合并后会**自动出现在网站话题栏**：

1. 照着 [`topic-love/SKILL.md`](https://github.com/imsai-sh/my-girlfriend-jingtian-latex/blob/main/apps/web/public/skills/topic-love/SKILL.md) 的样子，新建 `apps/web/public/skills/topic-<id>/SKILL.md`
2. 在 [`manifest.json`](https://github.com/imsai-sh/my-girlfriend-jingtian-latex/blob/main/apps/web/public/skills/manifest.json) 注册话题名和示例问题
3. 提 PR

代码贡献（新 CLI 适配、UI 打磨、Windows 体验完善）同样欢迎。架构细节、开发与部署文档见 [`apps/README.md`](https://github.com/imsai-sh/my-girlfriend-jingtian-latex/blob/main/apps/README.md)。

## 免责

本站为戏仿娱乐项目：纯属虚构，如有雷同实属巧合；不构成任何投资建议。
对话内容直接从浏览器发往你本机的 CLI，不经过站点服务器。

---

*原书《我的女友景甜》的编译方法见根目录 [README.md](https://github.com/imsai-sh/my-girlfriend-jingtian-latex/blob/main/README.md)；GitHub 主页优先渲染 `.github/README.md`，故上游原文件在本 fork 中保持原样未动。*
