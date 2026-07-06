# 部署说明

当前项目是纯静态网页，部署时只需要这些文件：

- `index.html`
- `manifest.webmanifest`
- `icon.svg`
- `_headers`
- `vercel.json`

## 最推荐路线

先用 GitHub + Cloudflare Pages 或 Vercel：

1. 新建 GitHub 仓库。
2. 上传本项目文件。
3. 在 Cloudflare Pages 或 Vercel 里导入这个仓库。
4. 不需要构建命令。
5. 发布目录使用项目根目录。

以后修改功能时：

```text
本地改文件 -> 检查 -> 上传/推送 -> 公网页面自动更新
```

## 不想先用 GitHub

可以先上传 `deploy-package.zip` 里的静态文件到支持静态网页的托管平台。

## 数据提醒

第一版数据保存在浏览器 `localStorage`。公网部署后，不同浏览器、不同手机的数据仍然是分开的。换设备前请在页面里导出 JSON。
