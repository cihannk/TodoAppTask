import { useState, useEffect } from "react"; 
import MainTodoApp from "./components/MainTodoApp";
import UserGetName from "./components/UserGetName";
import { userNameExist } from "./localstorage/localstorageTodo";
import styled from "styled-components";

const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Roboto", sans-serif;
`

function App() {
  const [isUserNameExist, setIsUserNameExist] = useState(true);

  useEffect(()=>{
    const result = userNameExist();
    setIsUserNameExist(result);
  },[])

  return (
    <Container>
      {isUserNameExist === false ? <UserGetName setIsUserNameExist={setIsUserNameExist}/>: <MainTodoApp/>}
    </Container>
    
  );
}

export default App;
