import React from "react";
import { renderToString } from "react-dom/server";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { routes } from "../routes/routes.js";

export function render(url: string) {
  const memoryRouter = createMemoryRouter(routes, { initialEntries: [url] });

  const html = renderToString(<RouterProvider router={memoryRouter} />);
  return { html };
}
