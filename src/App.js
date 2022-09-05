import { useState, useEffect } from "react"; 
import MainTodoApp from "./components/MainTodoApp";
import UserGetName from "./components/UserGetName";
import { userNameExist } from "./localstorage/localstorageTodo";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

function App() {
  const [isUserNameExist, setIsUserNameExist] = useState(true);

  useEffect(()=>{
    const result = userNameExist();
    setIsUserNameExist(result);
  },[])

  return (
    <Container>
      {isUserNameExist === false && <UserGetName/>}
      <MainTodoApp/>
    </Container>
    
  );
}

export default App;
