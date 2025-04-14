import { styled } from "styled-components";

export const LoginFormCard = styled.div`
  padding: 48px 64px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 16.14px;
  box-shadow: 0px 0px 2px 0px rgba(6, 9, 13, 0.2),
    1px 2px 4px 0px rgba(6, 9, 13, 0.2);
  margin: 0 auto;

  h1 {
    align-self: flex-start;
    font-size: ${({ theme }) => theme.typography.size["50"]};
  }

  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;
