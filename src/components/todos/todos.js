import { useState, useEffect } from 'react';
import './todos.css';
import getTodos from '../../services/todo.service';


function Todos() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            try {
            const data = await getTodos();
            console.log(data);
            setTodos(data);
        } catch (err) {
            console.error(err);
        }
        }
        fetchData();
    }, [])
    

    return (
        <div className="todos-container">
            {
                todos.map((todo) => (
                    <div className='todo'>
                    <div className='title'>{todo.title}</div>
                    <div className='state'>{todo.completed === true ? '✓' : 'x'}</div>
                    </div>
            ))
            }
        </div>
    )
}

export default Todos;