import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { render } from './src/server/entry-server';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, 'public')));


const template = fs.readFileSync(path.join(__dirname, 'index.template.html'), 'utf8');


let serverRenderer: (url: string) => Promise<{ html: string }>;
(async () => {

serverRenderer = render;
})();


app.get('*', async (req, res) => {
if (!serverRenderer) return res.status(500).send('Server not built');


const { html } = await serverRenderer(req.url);
const page = template
.replace('__APP_HTML__', html)
.replace('__REQUEST_PATH__', req.url);


res.status(200).send(page);
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));