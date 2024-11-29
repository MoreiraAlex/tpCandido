import { Link, Outlet } from "react-router-dom";
import './Layout.css'

export default function Layout(){
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/todos">Tarefas</Link></li>
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}