import { useState, useEffect } from "react"; 
import MainTodoApp from "./components/MainTodoApp";
import UserGetName from "./components/UserGetName";
import { getNightMode, userNameExist } from "./localstorage/localstorageTodo";
import styled from "styled-components";



function App() {
  const [isUserNameExist, setIsUserNameExist] = useState(true);
  const [nightMode, setNightMode] = useState(true);


  useEffect(()=>{
    const result = userNameExist();
    setIsUserNameExist(result);

    const isNightMode = getNightMode();
    console.log("isNightMode", isNightMode);
    setNightMode(isNightMode);
  },[])

  const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Roboto", sans-serif;
  background-color: ${nightMode === true && 'rgb(21, 32, 43)'};

  `

  return (
    <Container>
      {isUserNameExist === false ? <UserGetName setIsUserNameExist={setIsUserNameExist}/>: <MainTodoApp nightMode={nightMode} setNightMode={setNightMode}/>}
    </Container>
    
  );
}

export default App;
