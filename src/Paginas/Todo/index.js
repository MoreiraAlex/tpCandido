import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Todo() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await axios.get(process.env.REACT_APP_API);
      const data = await response.data;
      setTodos(data.todos); 
    };
    
    fetchTodos();
  }, []);

  async function handleDelete (id){
    try {
        const response = await axios.delete(`${process.env.REACT_APP_API}/${id}`)
        const data = await response.data
        alert(`Tarefa ${data.id} deletada com sucesso!`)
    } catch (error) {
        console.log(error)
        alert("Falha ao deletar Tarefa")
    }
  };

  return (
    <div>
      <h1>Tarefas</h1>
      <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Task</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.length === 0 ? (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>Loading...</td>
            </tr>
          ) : (
            todos.map(todo => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.todo}</td>
                <td style={{ color: todo.completed ? 'green' : 'red' }}>
                  {todo.completed ? 'Completed' : 'Pending'}
                </td>
                <td>
                  <Link to={`update/${todo.id}`}>Editar</Link>
                  <button onClick={() => handleDelete(todo.id)}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
