import { styled } from "styled-components";
import { Button, Heading, Input } from "..";
import { Text } from "../common/Typography/Text";
import { LoginFormCard } from "./Card";
import userSvg from "../../assets/user.svg";
import { FC, useState } from "react";
import { useLogin } from "./LoginProvider";

const SwitchAccount = styled.div`
  width: 437px;
  padding: 12px 16px;
  background-color: #f8fbff;
  border: 1px solid #a1b1de;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const OtherWay = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const OTPNotice = styled.div`
  align-self: flex-start;
`;

const NeedHelp = styled.div`
  display: flex;
  gap: 4px;
  align-self: flex-start;
`;

const LoginForm: FC<{ username: string }> = () => {
  const { username, setFormComplete } = useLogin();
  const [isEnterCode, setIsEnterCode] = useState(false);
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string>();

  const handleLogin = () => {
    if (isEnterCode) {
      if (code) {
        setFormComplete(true);
        return;
      }

      setErrorMessage("Code is required");
    } else {
      if (password) {
        setFormComplete(true);
        return;
      }

      setErrorMessage("Password is required");
    }
  };

  return (
    <LoginFormCard>
      <Heading>Log in to your account</Heading>
      <SwitchAccount>
        <div>
          <img src={userSvg} alt="Switch Account" />
          <Text variant="label">{username}</Text>
        </div>
        <Button size="xs" variant="link-bold">
          Switch Account
        </Button>
      </SwitchAccount>
      {isEnterCode && (
        <OTPNotice>
          <Text variant="body">
            We've sent a 6 digit code to your email. Enter it below to log in.
          </Text>
        </OTPNotice>
      )}
      <InputContainer>
        {!isEnterCode ? (
          <Input
            value={password}
            onChange={(e) => {
              setErrorMessage("");
              setPassword(e.target.value);
            }}
            error={errorMessage}
            label="Password"
            type="password"
            autoComplete="current-password"
          />
        ) : (
          <Input
            minLength={6}
            error={errorMessage}
            value={code}
            onChange={(e) => {
              setErrorMessage("");
              const numericValue = e.target.value.replace(/[^0-9]/g, "");
              setCode(numericValue);
            }}
            label="Code"
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
          />
        )}
        <Button onClick={handleLogin} fullWidth>
          Login
        </Button>
      </InputContainer>
      {!isEnterCode && (
        <>
          <Text variant="body">or</Text>
          <OtherWay>
            <Text variant="body">
              Go passwordless and we'll send you an email
            </Text>
            <Button
              onClick={() => {
                setIsEnterCode((prev) => !prev);
                setErrorMessage("");
              }}
              fullWidth
              variant="secondary"
            >
              Log in with a code
            </Button>
          </OtherWay>
        </>
      )}
      {!isEnterCode ? (
        <NeedHelp>
          <Text variant="help">Need Help?</Text>
          <Button role="button" variant="link" size="sm">
            Forgot Password
          </Button>
        </NeedHelp>
      ) : (
        <NeedHelp>
          <Text variant="help">Didn't get an email?</Text>
          <Button role="button" variant="link" size="sm">
            Resend Code
          </Button>
        </NeedHelp>
      )}
    </LoginFormCard>
  );
};

export default LoginForm;
