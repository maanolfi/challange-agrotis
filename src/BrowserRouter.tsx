import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Forms from "./pages/Forms";
import ErrorPage from "./pages/error-page"
const router = createBrowserRouter([
    {
        path: "/",
        element: <Forms />,
        errorElement: <ErrorPage />,
    },
]);

export default function BrowserRouter() {
    return <RouterProvider router={router} />
}