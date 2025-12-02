import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
export default function App() {
    return (_jsxs("div", { children: [_jsxs("nav", { children: [_jsx(Link, { to: "/", children: "Home" }), " | ", _jsx(Link, { to: "/about", children: "About" })] }), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/about", element: _jsx(About, {}) })] })] }));
}
