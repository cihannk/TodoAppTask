import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ModeNightIcon from '@mui/icons-material/ModeNight';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { getNightMode, setNightModeLocal } from '../localstorage/localstorageTodo';

const Container = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
`
const Title = styled.h1`
    color: gray;
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

    const handleNightMode = (isNightMode) => {
        if (isNightMode){
            setNightMode(true);
            setNightModeLocal(true);
        }else{
            setNightMode(false);
            setNightModeLocal(false);
        }
    }
  return (
    <Container>
        <Title>Todo App</Title>
        <div>
            {nightMode === true ?
            <NormalmodeButton onClick={() => handleNightMode(false)}>
                <WbSunnyIcon/>
            </NormalmodeButton> :
            <NightmodeButton onClick={() => handleNightMode(true)}>
                <ModeNightIcon/>
            </NightmodeButton>}
        
        </div>
        
    </Container>
  )
}

export default Header