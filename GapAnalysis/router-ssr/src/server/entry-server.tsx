import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from '../shared/App.js';

export async function render(url: string) {
  return {
    html: renderToString(
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    ),
  };
}
