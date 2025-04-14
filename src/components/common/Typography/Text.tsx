import styled, { css } from "styled-components";
import { Theme } from "../../theme";

type TextVariant = "label" | "body" | "error" | "help";
type TextSize = "xs" | "sm" | "md";
type TextWeight = "regular" | "medium" | "semibold";

export interface TextProps {
  variant?: TextVariant;
  size?: TextSize;
  weight?: TextWeight;
  color?: string;
  marginBottom?: string;
  marginTop?: string;
}

const getTextStyles = (theme: Theme) => ({
  label: css`
    font-size: ${theme.typography.size[35]};
    line-height: ${theme.typography.lineHeight[35]};
    font-weight: ${theme.typography.weight.semibold};
    color: ${theme.colors.input.label};
  `,
  body: css`
    font-size: ${theme.typography.size[35]};
    line-height: ${theme.typography.lineHeight[35]};
    color: ${theme.colors.text.body};
  `,
  error: css`
    font-size: ${theme.typography.size.sm};
    color: ${theme.colors.input.errorMessage};
  `,
  help: css`
    font-size: ${theme.typography.size[35]};
    line-height: ${theme.typography.lineHeight[35]};
    color: ${theme.colors.text.secondary};
  `,
});

export const Text = styled.p<TextProps>`
  font-family: ${({ theme }) => theme.typography.family.ui};
  margin: 0;

  ${({ variant = "body", theme }) => variant && getTextStyles(theme)[variant]};

  ${({ weight, theme }) =>
    weight &&
    css`
      font-weight: ${theme.typography.weight[weight]};
    `};
  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `};
  ${({ marginBottom }) =>
    marginBottom &&
    css`
      margin-bottom: ${marginBottom};
    `};
  ${({ marginTop }) =>
    marginTop &&
    css`
      margin-top: ${marginTop};
    `};
`;

export default Text;
