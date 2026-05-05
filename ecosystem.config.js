// ecosystem.config.js
module.exports = {
  apps: [
    {
      name: "yupi-backend",          // 后端进程名称
      cwd: "./server",               // 后端工作目录 (从项目根目录开始)
      script: "npm",                 // 运行的脚本工具
      args: "run dev",               // 要执行的 npm 脚本
      env: {
        NODE_ENV: "production",       // 可以在这里设置环境变量
      },
    },
    {
      name: "yupi-frontend",         // 前端进程名称
      cwd: "./client",               // 前端工作目录
      script: "npm",               // 使用 serve 包
      args: "run dev",  // 参数：托管 dist 目录，端口 5173，支持 SPA 路由
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
