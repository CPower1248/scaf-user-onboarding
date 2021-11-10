import Login from "./components/Login"
import SignUp from "./components/SignUp"

import styled from "styled-components"
import './App.css';

const UOBContainer = styled.div`    
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  width: 75%;
  height: 50%;

  border-radius: 15px;
  border: 1px solid black;
`
// const SignUp = styled.div`
//   display: flex;
//   flex-flow: column;
//   justify-content: center;
//   align-items: center;

//   width: 45%;
//   height: 75%;

//   border-radius: 15px;
//   border: 1px solid black;
// `


function App() {
  return (
    <div className="App">
      <UOBContainer>
        <Login/>
        <SignUp/>
      </UOBContainer>
    </div>
  );
}

export default App;
