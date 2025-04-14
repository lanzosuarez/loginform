import { useState } from "react";
import { Button, Heading, Input } from "..";
import { LoginFormCard } from "./Card";
import { useLogin } from "./LoginProvider";

const Welcome = () => {
  const { setUsername } = useLogin();
  const [username, setUsernameState] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleContinue = () => {
    if (!username) {
      setError("Username is required");
      return;
    }
    setUsername(username);
  };

  return (
    <LoginFormCard>
      <Heading>Welcome Back!</Heading>

      <Input
        error={error}
        value={username}
        onChange={(e) => {
          setError("");
          setUsernameState(e.target.value);
        }}
        label="Username"
        id="username-input"
        name="username"
        autoComplete="username"
        required
        placeholder="Enter your username"
        aria-label="Username input field"
      />
      <Button onClick={handleContinue} fullWidth>
        Continue
      </Button>
    </LoginFormCard>
  );
};

export default Welcome;
