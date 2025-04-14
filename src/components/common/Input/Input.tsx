import React, { forwardRef, type InputHTMLAttributes } from "react";
import styled, { css } from "styled-components";
import { Theme } from "../../theme";
import { Text } from "../Typography/Text";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  fullWidth?: boolean;
}

interface StyledInputWrapperProps {
  hasError?: boolean;
  isFocused?: boolean;
  fullWidth?: boolean;
  theme: Theme;
}

const InputWrapper = styled.div<{ fullWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "437px")};
  position: relative;
`;

const StyledInputWrapper = styled.div<StyledInputWrapperProps>`
  position: relative;
  width: 100%;

  ${({ hasError, isFocused, theme }) => css`
    & input {
      width: 100%;
      height: ${theme.layout.input.height};
      padding: 0 ${theme.spacing.input.padding};
      border: 1px solid
        ${hasError
          ? theme.colors.input.invalid
          : isFocused
          ? theme.colors.input.focused
          : theme.colors.input.resting};
      border-radius: ${theme.borderRadius.md};
      font-family: ${theme.typography.family.ui};
      font-size: ${theme.typography.size.md};
      color: ${theme.colors.input.label};
      outline: none;
      transition: border-color ${theme.transition.normal},
        box-shadow ${theme.transition.normal};

      &::placeholder {
        color: ${theme.colors.input.placeholder};
      }

      ${isFocused &&
      !hasError &&
      css`
        box-shadow: ${theme.shadows.focus};
      `}
    }
  `}
`;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, fullWidth = false, type = "text", ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      if (props.onFocus) {
        props.onFocus(e);
      }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      if (props.onBlur) {
        props.onBlur(e);
      }
    };

    return (
      <InputWrapper fullWidth={fullWidth}>
        <Text
          as="label"
          variant="label"
          htmlFor={props.id || label}
          marginBottom="4px"
        >
          {label}
        </Text>
        <StyledInputWrapper hasError={!!error} isFocused={isFocused}>
          <input
            id={props.id || label}
            ref={ref}
            type={type}
            onFocus={handleFocus}
            onBlur={handleBlur}
            aria-invalid={!!error}
            aria-required={!!props.required}
            aria-disabled={!!props.disabled}
            role="textbox"
            aria-describedby={error ? `${props.id || label}-error` : undefined}
            {...props}
          />
        </StyledInputWrapper>
        {error && (
          <Text
            variant="error"
            id={`${props.id || label}-error`}
            marginTop="4px"
            role="alert"
          >
            {error}
          </Text>
        )}
      </InputWrapper>
    );
  }
);

Input.displayName = "Input";

export default Input;
