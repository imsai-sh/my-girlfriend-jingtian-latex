import { Hono } from 'hono';
import type { Context } from 'hono';

type Bindings = {
  ASSETS: { fetch: typeof fetch };
};
type AppEnv = { Bindings: Bindings };

const app = new Hono<AppEnv>();

// 静态资源模板化：把桥/安装脚本里的 __SITE_ORIGIN__ 替换为当前站点 origin，
// 这样 curl <站点>/install.sh 拿到的脚本天然知道从哪里下载桥、桥知道信任哪个 origin。
function serveTemplated(assetPath: string, contentType: string) {
  return async (c: Context<AppEnv>) => {
    const origin = new URL(c.req.url).origin;
    const res = await c.env.ASSETS.fetch(new Request(new URL(assetPath, origin)));
    // SPA not_found_handling 会把缺失资源 fallback 成 index.html（200 + text/html），必须识别为 404
    if (!res.ok || res.headers.get('content-type')?.includes('text/html')) {
      return c.text('asset not found', 404);
    }
    const body = (await res.text()).replaceAll('__SITE_ORIGIN__', origin);
    return new Response(body, {
      headers: { 'Content-Type': contentType, 'Cache-Control': 'no-cache' },
    });
  };
}

app.get('/install.sh', serveTemplated('/install.sh', 'text/x-shellscript; charset=utf-8'));
app.get('/install.ps1', serveTemplated('/install.ps1', 'text/plain; charset=utf-8'));
app.get('/bridge.mjs', serveTemplated('/bridge.mjs', 'text/javascript; charset=utf-8'));

// 其余请求全部交给静态资源（SPA fallback 由 assets 配置处理）
app.all('*', (c) => c.env.ASSETS.fetch(c.req.raw));

export default app;
