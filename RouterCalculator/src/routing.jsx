import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout.jsx";
import { ErrorPage } from "./error.jsx";
import { Addition } from "./operations/addition";
import { Subtraction } from "./operations/subtraction";
import { Multiplying } from "./operations/multiplying";
import { Division } from "./operations/division";



export const routing = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement: <ErrorPage/>,
        children:[
            {
                index: true,
                element: <Addition/>
            },
            {
                path: "/addition/:element1/:element2",
                element: <Addition/>
            },
            {
                path: "/subtraction/:element1/:element2",
                element: <Subtraction/>
            },
            {
                path: "/multiplying/:element1/:element2",
                element: <Multiplying/>
            },
            {
                path: "/division/:element1/:element2",
                element: <Division/>
            },
        ],
    }
]);