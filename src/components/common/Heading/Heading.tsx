import styled from "styled-components";

interface HeadingProps {
  size?: "xs";
}

export const Heading = styled.h1<HeadingProps>`
  font-family: ${({ theme }) => theme.typography.family.heading};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};

  ${({ size = "xs", theme }) => {
    const styles = theme.typography.headings[size];
    return `
      font-size: ${styles.fontSize};
      line-height: ${styles.lineHeight};
      letter-spacing: ${styles.letterSpacing};
    `;
  }}
`;

Heading.displayName = "Heading";

export default Heading;
