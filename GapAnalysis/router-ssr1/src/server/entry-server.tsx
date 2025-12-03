import React from "react";
import { renderToString } from "react-dom/server";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { routes } from "../routes/routes.js"; // тут твої маршрути у вигляді масиву RouteObject

export async function render(url: string) {
  // Створюємо маршрутизатор у пам'яті для SSR
  const memoryRouter = createMemoryRouter(routes, {
    initialEntries: [url],
  });

  const html = renderToString(<RouterProvider router={memoryRouter} />);
  return { html };
}