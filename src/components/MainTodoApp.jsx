import React, {useState, useEffect} from 'react'
import { getTodos } from '../api/todoOperations';
import Todo from './Todo';

function MainTodoApp() {
    const [todos, setTodos] = useState([]);

    const saveTodosToState = async () =>  {
        const result= await getTodos();
        console.log(result.data);
        setTodos(result.data);

    }

    useEffect(()=>{
        saveTodosToState();
    }, []);

  return (
    <div>
        {todos && todos.map(todo => <Todo id={todo.id} todo={todo}/>)}
    </div>
  )
}

export default MainTodoApp