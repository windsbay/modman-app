import {ADMIN_ROUTE, FRIENDS_ROUTE, INDEX_ROUTE, TASK_ROUTE} from "./utils/consts";
import Index from "./pages/Index/Index";
import Friends from "./pages/Friends/Friends";
import Tasks from "./pages/Tasks/Tasks";
import Admin from "./pages/Admin/Admin";

export const publicRoutes = [
    {
        path: INDEX_ROUTE,
        Component: Index
    },
    {
        path: FRIENDS_ROUTE,
        Component: Friends
    },
    {
        path: TASK_ROUTE,
        Component: Tasks
    },
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
]