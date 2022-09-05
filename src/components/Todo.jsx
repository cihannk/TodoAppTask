import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from "styled-components";

const TodoContainer = styled.div`
    border: 1px solid red;
    width: 50vw;
    height: 10vh;
`

function Todo({todo}) {

  return (
    <TodoContainer>
        <span>{todo.id}</span>
        <span>{todo.content}</span>
        <span>{todo.isCompleted}</span>
    </TodoContainer>
  )
}

export default Todo