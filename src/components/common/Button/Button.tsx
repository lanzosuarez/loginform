import { type ButtonHTMLAttributes, type ElementType, forwardRef } from "react";
import styled, { css } from "styled-components";
import { Theme } from "../../theme";

export type ButtonVariant = "primary" | "secondary" | "link" | "link-bold";

export type ButtonSize = "medium" | "xs" | "sm";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  isLoading?: boolean;
  as?: ElementType;
  href?: string;
}

const getButtonStyles = (theme: Theme) => ({
  primary: css`
    background-color: ${theme.colors.primary.base};
    color: ${theme.colors.white};
    border: none;

    &:hover {
      background-color: ${theme.colors.primary.hover};
    }

    &:active {
      background-color: ${theme.colors.primary.active};
    }
  `,
  secondary: css`
    background-color: transparent;
    color: ${theme.colors.primary.base};
    border: 2px solid ${theme.colors.secondary.text};

    &:hover {
      background-color: ${theme.colors.secondary.base};
    }

    &:active {
      background-color: ${theme.colors.secondary.active};
    }
  `,
  link: css`
    text-decoration: underline;
    background-color: transparent;
    color: ${theme.colors.link.base};
    border: none;
    padding: 0; /* No padding for link */
    width: auto; /* Width determined by content */
    height: auto; /* Height determined by content */
    font-weight: ${theme.typography.weight.regular};
    line-height: ${theme.typography.lineHeight["35"]};

    &:hover {
      color: ${theme.colors.link.hover};
    }

    &:active {
      color: ${theme.colors.link.active};
    }
  `,
  "link-bold": css`
    text-decoration: underline;
    background-color: transparent;
    color: ${theme.colors.link.base};
    border: none;
    padding: 0; /* No padding for link */
    width: auto; /* Width determined by content */
    height: auto; /* Height determined by content */
    font-weight: ${theme.typography.weight.semibold};
    line-height: 21px;

    &:hover {
      color: ${theme.colors.link.hover};
    }

    &:active {
      color: ${theme.colors.link.active};
    }
  `,
});

const getButtonSizes = (theme: Theme) => ({
  medium: css<ButtonProps>`
    width: ${(props) =>
      props.variant?.includes("link") ? "auto" : theme.layout.button.width};
    height: ${(props) =>
      props.variant?.includes("link") ? "auto" : theme.layout.button.height};
    border-radius: ${theme.borderRadius.md};
    padding: ${(props) =>
      props.variant?.includes("link") ? "0" : theme.spacing.md};
    font-size: ${theme.typography.size["40"]};
    line-height: ${theme.typography.lineHeight["40"]};
    letter-spacing: ${theme.typography.letterSpacing.sparse};
  `,
  sm: css<ButtonProps>`
    width: ${(props) =>
      props.variant?.includes("link") ? "auto" : theme.layout.button.width};

    border-radius: ${theme.borderRadius.md};
    padding: ${(props) =>
      props.variant?.includes("link") ? "0" : theme.spacing.md};
    font-size: ${theme.typography.size["35"]};
    line-height: ${theme.typography.lineHeight["35"]};
    letter-spacing: ${theme.typography.letterSpacing.sparse};
  `,
  xs: css<ButtonProps>`
    width: ${(props) =>
      props.variant?.includes("link") ? "auto" : theme.layout.button.width};

    border-radius: ${theme.borderRadius.md};
    padding: ${(props) =>
      props.variant?.includes("link") ? "0" : theme.spacing.md};
    font-size: ${theme.typography.size["30"]};
    line-height: ${theme.typography.lineHeight["30"]};
    letter-spacing: ${theme.typography.letterSpacing.sparse};
  `,
});

const StyledButton = styled.button<ButtonProps>`
  font-family: ${({ theme }) => theme.typography.family.ui};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transition.normal};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  outline: none;
  vertical-align: middle;
  gap: ${({ theme }) => theme.spacing.input.gap};

  /* Apply variant styles */
  ${({ theme, variant }) => variant && getButtonStyles(theme)[variant]};

  /* Apply size styles */
  ${({ theme, size }) => size && getButtonSizes(theme)[size]};

  /* Full width option - only apply to non-link variants */
  ${(props) =>
    props.fullWidth &&
    !props.variant?.includes("link") &&
    css`
      width: 100%;
    `};

  /* Focus state - for keyboard navigation */
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary.base};
    outline-offset: 2px;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.white},
                0 0 0 4px ${({ theme }) => theme.colors.primary.base};
  }

  /* Disabled state */
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  /* Loading state */
  ${(props) =>
    props.isLoading &&
    css`
      opacity: 0.8;
      cursor: wait;
    `};
`;

// Using forwardRef instead of React.FC
export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      variant = "primary",
      size = "medium",
      fullWidth = false,
      isLoading = false,
      as,
      href,
      children,
      ...props
    },
    ref
  ) => {
    // If href is provided, use an anchor tag by default
    const ComponentToRender = href && !as ? "a" : as || "button";

    return (
      <StyledButton
        as={ComponentToRender}
        ref={ref}
        variant={variant}
        size={size}
        fullWidth={fullWidth}
        isLoading={isLoading}
        href={href}
        disabled={isLoading || props.disabled}
        aria-busy={isLoading}
        aria-disabled={isLoading || props.disabled}
        // If it's a link styled as button, we need role="button"
        role={href ? "button" : undefined}
        {...props}
      >
        {children}
        {isLoading && (
          <span className="sr-only" role="status">
            Loading...
          </span>
        )}
      </StyledButton>
    );
  }
);

// Add display name for better debugging
Button.displayName = "Button";

export default Button;
