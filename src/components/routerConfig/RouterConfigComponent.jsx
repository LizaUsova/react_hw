import routerConfig from "./routerConfig";
import {Route, Routes} from "react-router-dom";
import TodoForm from "../form/TodoForm";
import TodoDetail from "../TodoDetail";

const RouterConfigComponent = () => {

    const routes = () => {
        routerConfig.map(({path, element: Element}) => {
            return <Route path={path} element={<Element />} />
        })
    }

    return <Routes>
        {routes}

        <Route
            path="*"
            element={
            <main>
                <p>There's nothing here!</p>
            </main>
        }
     />
    </Routes>
}

export default RouterConfigComponent