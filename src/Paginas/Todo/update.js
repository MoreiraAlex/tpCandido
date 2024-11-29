import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function TodoEdit(){
    const [data, setData] = useState([])
    const todo = useRef("")
    const completed = useRef(false)
    const { id } = useParams()

    useEffect(() => {
        const fetchTodo = async () => {
          const response = await axios.get(`${process.env.REACT_APP_API}/${id}`);
          const data = await response.data;
          setData(data); 
        };          
        fetchTodo();
      }, []);

    
    async function HandleTodo(e) {
        e.preventDefault()

        try {
            const response = await axios.put(`${process.env.REACT_APP_API}/${id}`, {
                id: id,
                todo: todo.current.value,
                completed: completed.current.value,
            })

            const data = await response.data
            alert(`Tarefa ${data.id} editada com sucesso!`)
        } catch (error) {
            console.log(error)
            alert("Falha ao editar Tarefa")
        }
    }

    return (
        <section>
            <h1>Tarefa {data.id}</h1>
            <form onSubmit={HandleTodo}>
                <label>
                    Tarefa: <input ref={todo} type="text" defaultValue={data.todo} required/>
                </label>
                <label>
                    Completa: <input ref={completed} type="checkbox" defaultChecked={data.completed} />                
                </label>
                <button type="submit">Enviar</button>
            </form>
            <Link className="todo-back" to='/todos'>Voltar</Link>
        </section>
    )
}