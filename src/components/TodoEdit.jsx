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

const TodoEditButton = styled.input`
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


  const handleSubmit = async e => {
    if (editContent.length < 3 ){
        setEdit(false);
    }
    else{
        e.preventDefault();
        setTodo({...todo, content: editContent});
        setEdit(false);
        await updateTodo(todo.id, {"content": editContent, "isCompleted": todo.isCompleted});
    }
    
  }

  const handleChange = e =>{
    setEditContent(e.target.value);
  }
  return (
    <form onSubmit={e => handleSubmit(e)}>
    <TodoEditContainer>
        <TodoEditButtons>
            <TodoEditInput minLength={3} id="todoEditInput" type={'text'} onChange={e => handleChange(e)}></TodoEditInput>
            <TodoEditButton type="submit" value="Değiştir"/>
        </TodoEditButtons>
    </TodoEditContainer>
    </form>
  )
}

export default TodoEdit