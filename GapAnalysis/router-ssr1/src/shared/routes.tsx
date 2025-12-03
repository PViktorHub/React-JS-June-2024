import { createBrowserRouter } from "react-router-dom";
import App from "../shared/App.js";
import About from "../pages/About.js";
import Home from "../pages/Home.js";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> }
    ],
  },
]);