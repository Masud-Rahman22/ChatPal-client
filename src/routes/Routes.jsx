import {
    createBrowserRouter,
} from "react-router-dom";
import { Login } from "../pages/Login/Login";


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Login></Login>,
    },
]);

export default Routes;