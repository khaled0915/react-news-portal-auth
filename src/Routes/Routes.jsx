import { createBrowserRouter } from "react-router-dom";
import Roots from "../Layout/Roots";
import Home from "../Pages/Home/Home";

const routes = createBrowserRouter([
    {

        path : '/',
        element : <Roots></Roots>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            }
        ]
    }
])

export default routes;