import { Button, Heading } from "..";
import { LoginFormCard } from "./Card";
import { useLogin } from "./LoginProvider";

const ResetForm = () => {
  const { resetForm } = useLogin();
  return (
    <LoginFormCard>
      <Heading>Login complete!</Heading>
      <Button onClick={resetForm} variant="secondary">
        Reset form
      </Button>
    </LoginFormCard>
  );
};

export default ResetForm;
