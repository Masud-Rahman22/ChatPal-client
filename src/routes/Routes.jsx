import {
    createBrowserRouter,
} from "react-router-dom";
import { Login } from "../pages/Login/Login";
import Home from "../pages/Home/Home";


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Login></Login>,
    },
    {
        path: '/home',
        element: <Home></Home>
    }
]);

export default Routes;