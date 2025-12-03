import express from 'express';
import type { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { render } from './src/server/entry-server.js'; // render асинхронний

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Статика фронтенду
app.use(express.static(path.join(__dirname, 'dist')));

// SSR маршрут (замість '*')
app.get('*', async (req: Request, res: Response) => {
  try {
    const { html: appHtml } = await render(req.url);

    const template = fs.readFileSync(
      path.join(__dirname, 'dist', 'index.html'),
      'utf-8'
    );

    const html = template
      .replace('__APP_HTML__', appHtml)
      .replace('__REQUEST_PATH__', req.url);

    res.send(html);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`SSR server running at http://localhost:${PORT}`);
});