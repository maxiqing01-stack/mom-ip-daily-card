import http from "node:http";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const port = Number(process.env.PORT || 4173);
const types = {
  ".html": "text/html; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".svg": "image/svg+xml; charset=utf-8",
};

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url || "/", `http://${req.headers.host}`);
    const requested = url.pathname === "/" ? "/index.html" : url.pathname;
    const safeName = path.basename(decodeURIComponent(requested));

    if (!["index.html", "manifest.webmanifest", "icon.svg"].includes(safeName)) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }

    const file = path.join(root, safeName);
    const data = await readFile(file);
    res.writeHead(200, { "Content-Type": types[path.extname(file)] || "text/plain" });
    res.end(data);
  } catch (error) {
    res.writeHead(500);
    res.end(String(error));
  }
});

server.listen(port, "0.0.0.0", () => {
  console.log(`母婴 IP 今日拍摄卡: http://localhost:${port}/index.html`);
});
