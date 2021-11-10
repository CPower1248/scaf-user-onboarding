import styled from "styled-components"

const SignUpContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  width: 45%;
  height: 75%;

  border-radius: 15px;
  border: 1px solid black;
`

function SignUp () {
  return (
    <SignUpContainer>
      Sign Up
    </SignUpContainer>
  )
}

export default SignUp
