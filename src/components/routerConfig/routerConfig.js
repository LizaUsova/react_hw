import {Routes, Route} from "react-router-dom";
import routeNames from "./routeNames";
import TodoDetail from "../TodoDetail";
import TodoForm from "../form/TodoForm";

const routerConfig = [
    {
        path: routeNames.form,
        element: TodoForm
    },
    {
        path: routeNames.editItem,
        element: TodoDetail
    }
]

export default routerConfig;