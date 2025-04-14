import { styled } from "styled-components";
import { Login } from "./components/login/LoginContainer";

const LoginFormContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  justify-content: center;
`;

function App() {
  return (
    <LoginFormContainer>
      <Login.Root />
    </LoginFormContainer>
  );
}

export default App;
