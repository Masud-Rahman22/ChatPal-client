import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../pages/FirstPage/Main";
import ProtectedRoute from "./ProtectedRoute";


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
    },
    {
        path: '/home',
        element: <ProtectedRoute><Home></Home></ProtectedRoute>
    }
]);

export default Routes;