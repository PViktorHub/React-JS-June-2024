import { jsx as _jsx } from "react/jsx-runtime";
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from '../shared/App';
hydrateRoot(document.getElementById('root'), _jsx(BrowserRouter, { children: _jsx(App, {}) }));
