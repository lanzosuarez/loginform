import LoginForm from "./LoginForm";
import { LoginProvider, useLogin } from "./LoginProvider";
import ResetForm from "./ResetForm";
import Welcome from "./Welcome";

const LoginContainer = () => {
  const { username, isFormComplete } = useLogin();

  // Show different components based on login state
  const showWelcome = !username;
  const showLoginForm = username;
  const showResetForm = isFormComplete;

  return (
    <div className="login-container">
      {showWelcome && <Welcome />}
      {(showLoginForm && !isFormComplete) && <LoginForm username={""} />}
      {showResetForm && <ResetForm />}
    </div>
  );
};

export const Login = {
  Root: () => (
    <LoginProvider>
      <LoginContainer />
    </LoginProvider>
  ),
};
