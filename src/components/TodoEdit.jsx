import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { updateTodo } from '../api/todoOperations';

const TodoEditContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 20%;
    padding: 1em;
    margin-bottom: 1em;
    background-color: #e6e6e6;
`
const TodoEditButtons = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`
const TodoEditInput = styled.input`
    width: 70%;
    background-color: transparent;
    padding: 1em;
    border-radius: 0.5em;

`

const TodoEditButton = styled.button`
    width: 25%;
    background-color: transparent;
    &:hover{
        background-color: white;
    }
    border: 1px solid black;
    border-radius: 0.5em;
    padding: 1em;

`


function TodoEdit({todo, setEdit, setTodo}) {
    const [editContent, setEditContent] = useState(todo.content);

    useEffect(()=>{
        document.getElementById("todoEditInput").setAttribute("value", todo.content);
    },[]);

  const handleClick = async () => {
    setTodo({...todo, content: editContent});
    setEdit(false);
    await updateTodo(todo.id, {"content": editContent, "isCompleted": todo.isCompleted});
  }

  const handleChange = e =>{
    setEditContent(e.target.value);
  }
  return (
    <TodoEditContainer>
        <TodoEditButtons>
            <TodoEditInput id="todoEditInput" type={'text'} onChange={e => handleChange(e)}></TodoEditInput>
            <TodoEditButton onClick={() => handleClick()}>Değiştir</TodoEditButton>
        </TodoEditButtons>
        
    </TodoEditContainer>
  )
}

export default TodoEdit