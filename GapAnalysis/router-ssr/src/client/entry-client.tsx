import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from '../shared/App';


hydrateRoot(
document.getElementById('root')!,
<BrowserRouter>
<App />
</BrowserRouter>
);