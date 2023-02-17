import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Login from "../Pages/Authentication/Login/Login";
import Everything from "../Pages/Everything/Everything";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
        path:"/",
        element: <Main />,
        children : [
            {
                path:"/",
                element : <Home />
            },
            {
                path:"everything",
                element : <Everything />
            },
            {
               path:"login",
               element : <Login />
            },
        ]
    }
]);

export default router