import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../pages/FirstPage/Main";


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
    },
    {
        path: '/home',
        element: <Home></Home>
    }
]);

export default Routes;