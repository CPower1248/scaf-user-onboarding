import { Link, Routes, Route } from "react-router-dom"

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

function App() {
  return (
    <div className="App">
      <UOBContainer>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>

        <Routes>
          <Route exact path={"/login"} component={Login} />
          <Route exact path={"/signup"} component={SignUp} />
        </Routes>
      </UOBContainer>
    </div>
  );
}

export default App;
