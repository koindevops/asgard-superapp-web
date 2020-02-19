import PATH_URL from "./path";
import Home from "../page/home";
import MainLayout from "../layouts/MainLayout";

const routes = [
    {
        path : PATH_URL.HOME,
        component : Home,
        layout: MainLayout
    }
]

export default routes;