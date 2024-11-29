import axios from "axios";
import { useRef } from "react";
import { Link } from "react-router-dom";

export default function TodoCreate(){
    const todo = useRef("")
    
    async function HandleTodo(e) {
        e.preventDefault()

        try {
            const response = await axios.post(`${process.env.REACT_APP_API}/add`, {
                todo: todo.current.value,
                completed: false,
                userId: 5, //Tirar esse campo 
            })

            const data = await response.data
            alert(`Tarefa ${data.id} cadastrada!`)
        } catch (error) {
            console.log(error)
            alert("Falha ao cadastrar Tarefa")
        }
    }

    return (
        <>
            <h1>Nova Tarefa</h1>
            <form onSubmit={HandleTodo}>
                Tarefa: <input ref={todo} type="text" required/>
                <button type="submit">Enviar</button>
            </form>
            <Link to='/todos'>Voltar</Link>
        </>
    )
}