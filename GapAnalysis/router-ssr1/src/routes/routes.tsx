import React from 'react';
import App from '../shared/App.js';
import Home from '../pages/Home.js';
import About from '../pages/About.js';
import { RouteObject } from 'react-router-dom';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> }
    ]
  }
];