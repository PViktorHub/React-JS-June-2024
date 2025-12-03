import express, { Request, Response } from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { render } from "../src/server/entry-server.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

const distPath = path.join(__dirname, "..", "client");
app.use(express.static(distPath));

app.get("/:path(*)", async (req: Request, res: Response) => {
  try {
    const template = fs.readFileSync(
      path.join(distPath, "index.html"),
      "utf-8"
    );

    const { html: appHtml } = await render(req.url);

    const finalHtml = template.replace(`<!--ssr-outlet-->`, appHtml);

    res.setHeader("Content-Type", "text/html");
    res.end(finalHtml);
  } catch (e) {
    console.error("SSR error:", e);
    res.status(500).send("SSR error");
  }
});

app.listen(PORT, () =>
  console.log(`SSR server: http://localhost:${PORT}`)
);
