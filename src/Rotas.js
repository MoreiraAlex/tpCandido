import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Paginas/Home";
import Layout from "./Paginas/Layout";
import Todo from "./Paginas/Todo";
import TodoCreate from "./Paginas/Todo/create";
import TodoEdit from "./Paginas/Todo/update";

export default function Rotas(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home />}/>
                    <Route path="/todos" element={<Todo />}/>
                    <Route path="/todos/create" element={<TodoCreate />}/>
                    <Route path="/todos/update/:id" element={<TodoEdit />}/>
                    <Route path="*" element={<span>404</span>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}