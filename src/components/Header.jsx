import React, { useState } from 'react'
import styled from 'styled-components'
import ModeNightIcon from '@mui/icons-material/ModeNight';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

const Container = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
`
const Title = styled.h1`

`
const NightmodeButton = styled.div`
    display: flex;
    align-items: center;
    &:hover{
        color: gray;
    }
`

const NormalmodeButton = styled.div`
    display: flex;
    align-items: center;
    &:hover{
        color: gray;
    }
    color: white;
`

function Header({setNightMode, nightMode}) {
  return (
    <Container>
        <Title>Todo App</Title>
        <div>
            {nightMode === true ?
            <NormalmodeButton onClick={() => setNightMode(false)}>
                <WbSunnyIcon/>
            </NormalmodeButton> :
            <NightmodeButton onClick={() => setNightMode(true)}>
                <ModeNightIcon/>
            </NightmodeButton>}
        
        </div>
        
    </Container>
  )
}

export default Header