import React, { useEffect, useState } from 'react';
import TodoEdit from "./TodoEdit";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from "styled-components";
import { updateTodo } from '../api/todoOperations';

const TodoContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 20%;
    border: 1px solid #D9D9D9;
    border-radius: 1em;
    padding: 1em;
    margin-bottom: 1em;
    background-color: #e6e6e6;
`
const TodoIdContainer = styled.div`
    height: 20%;
    font-size: 1.5em;
    color: #a8a7a7;
`
const TodoContent = styled.div`
    height: 40%;
    font-size: 2em;
    color: #0C0C0D;
    padding: 1em;
`
const TodoContentTextArea = styled.textarea`
  resize: none;
  background-color: transparent;
  border: 0em;
  padding: 0;
  margin: 0;
`

const TodoButtons = styled.div`
    height: 30%;
    display: flex;
    align-items: center;
    padding: 1em;
    justify-content: space-between;
`

const TodoCheckBoxContainer = styled.div`
  width: 8%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const TodoCheckboxText = styled.span`
padding: 0;
margin: 0;
  font-size: 1em;
  font-weight: 600;
`

const TodoEditButton = styled.button`
    width: 30%;
    height: 100%;
    background-color: transparent;
    border-radius: 1em;
    border: 1px solid lightgrey;
    &:hover{
      background-color: lightgrey;
    }
`

function Todo({todoObj}) {

  const [editMode, setEditMode] = useState(false);
  const [todo, setTodo] = useState(todoObj);
  const handleClick = () =>{
    setEditMode(true);
  }
  const handleCheckBoxChange = async e =>{
    const tempTodo = {...todo, isCompleted: !todo.isCompleted};
    setTodo(tempTodo);
    await updateTodo(todo.id, tempTodo);
  }
  return (
    
    <TodoContainer>
      {editMode === true ? <TodoEdit setTodo={setTodo} setEdit={setEditMode} todo={todo}/> : <div>
        <TodoIdContainer>TODO #{todo.id}</TodoIdContainer>
        <TodoContent>
          {todo.content}
        </TodoContent>
        <TodoButtons>
        <TodoCheckBoxContainer>
          <input type={'checkbox'} checked={todo.isCompleted === true ? "checked" : ""} onChange={e => handleCheckBoxChange(e)}/>
          <TodoCheckboxText>Yapıldı</TodoCheckboxText>
        </TodoCheckBoxContainer>

        <TodoEditButton onClick={() => handleClick()}>Düzenle</TodoEditButton>
        
        </TodoButtons>
      </div>}
      
        
    </TodoContainer>
  )
}

export default Todo