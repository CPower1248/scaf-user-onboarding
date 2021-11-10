import styled from "styled-components"

const LoginContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  width: 45%;
  height: 75%;

  border-radius: 15px;
  border: 1px solid black;
`

function Login () {
  return (
    <LoginContainer>
      Login
    </LoginContainer>
  )
}

export default Login
