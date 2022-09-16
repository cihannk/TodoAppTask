import React, { useEffect, useState } from 'react';
import TodoEdit from "./TodoEdit";
import styled from "styled-components";
import { updateTodo } from '../api/todoOperations';

const TodoMaster = styled.div`
  width: 100%;
  height: 20vh;
  padding: 1em;
  border: 1px solid #D9D9D9;
  border-radius: 1em;
  background-color: #e6e6e6;
  margin-bottom: 1em;

`

const TodoContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`

const TodoIdContainer = styled.div`
    height: 20%;
    width: 100%;

`
const TodoId = styled.span`
      font-size: 1.5em;
      color: #a8a7a7;
`
const TodoContent = styled.div`
    width: 100%;
    height: 50%;
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
  width: 90%;
  height: 90%;
  font-size: 1em;
  overflow: hidden;
`

const TodoButtonsContainer = styled.div`
    height: 30%;
    display: flex;
    align-items: center;
    padding: 1em;
    justify-content: space-between;
`

const TodoButtons = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  
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
    margin-right: 2%;
`
const TodoDeleteButton = styled.button`
  width: 30%;
    height: 100%;
    background-color: #e22c2c;
    border-radius: 1em;
    border: 0px;
    &:hover{
      background-color: #ffffff;
      color: #e22c2c;
    }
    color: white;
`

function Todo({todoObj, handleDelete, nightMode}) {

  const [editMode, setEditMode] = useState(false);
  const [todo, setTodo] = useState(todoObj);

  const handleEdit = () =>{
    setEditMode(true);
  }

  const handleCheckBoxChange = async e =>{
    const tempTodo = {...todo, isCompleted: !todo.isCompleted};
    setTodo(tempTodo);
    await updateTodo(todo.id, tempTodo);
  }

  return (
    <TodoMaster>
      {editMode === true ? <TodoEdit setTodo={setTodo} setEdit={setEditMode} todo={todo}/> : <TodoContainer>
      <TodoIdContainer>
        <TodoId>#TODO {todo.id}</TodoId>
        </TodoIdContainer>
      <TodoContent>
        <TodoContentTextArea disabled rows={3} cols={60} value={todo.content}/>
      </TodoContent>
        <TodoButtonsContainer>
        <TodoCheckBoxContainer>
          <input type={'checkbox'} checked={todo.isCompleted === true ? "checked" : ""} onChange={e => handleCheckBoxChange(e)}/>
          <TodoCheckboxText>Yapıldı</TodoCheckboxText>
        </TodoCheckBoxContainer>

        <TodoButtons>
          <TodoEditButton onClick={() => handleEdit()}>Düzenle</TodoEditButton>
          <TodoDeleteButton onClick={() => handleDelete(todo.id)}>Sil</TodoDeleteButton>
        </TodoButtons>
        
        
        </TodoButtonsContainer>

        </TodoContainer>}
    </TodoMaster>
    
  )
}

export default Todo