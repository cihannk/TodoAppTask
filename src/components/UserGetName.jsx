import React, { useState } from 'react'
import styled from 'styled-components';
import { addUsername } from '../localstorage/localstorageTodo';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.span`
  font-size: 3em;
  margin-bottom: 0.5em;
`
const Input = styled.input`
  padding: 1em 4em;
  font-family: sans-serif;
  border: 1px solid lightgrey;
  border-radius: 0.5em;
  font-size: 1em;
  font-weight: 600;
  margin-bottom: 1em;

`
const Button = styled.button`
  margin-top: 0.5em;
  padding: 1em 4em;
  border: 1px solid black;
  border-radius: 0.4em;
  background-color: transparent;
  &:hover{
    background-color: #acacac;
    border: 0em
  }
  font-weight: 600;
`


function UserGetName({setIsUserNameExist}) {
  const [name, setName] = useState("");

  const handleClick = (e) => {
    addUsername(name);
    setIsUserNameExist(true);
  }

  return (
      <Container>
        <Title>
          Kullanıcı adın
        </Title>
        <Input type="text" onChange={ch => setName(ch.target.value)}></Input>
        <Button onClick={(e => handleClick())}>Onayla</Button>
    </Container>
    
  )
}

export default UserGetName