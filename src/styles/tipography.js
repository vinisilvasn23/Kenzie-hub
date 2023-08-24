import styled, { css } from "styled-components";

export const HeadlineStyles = css`
  font-family: var(--font-primary);
  font-weight: var(--font-weight-700);
  color: var(--color-grey-0);
  font-size: var(--font-size-18);
`;

export const StyledTitle = styled.h2`
  ${HeadlineStyles};
`;

export const StyledParagraph = styled.p`
  ${HeadlineStyles};
  font-size: var(--font-size-12);
  color: var(--color-grey-1);

  ${({ fontWeight }) => {
    switch (fontWeight) {
      case "lg":
        return css`
          font-weight: var(--font-weight-600);
        `;
      case "md":
        return css`
          font-weight: var(--font-weight-400);
        `;
    }
  }}

  ${({ colorSize }) => {
    switch (colorSize) {
      case "white":
        return css`
          color: var(--color-grey-0);
          font-size: var(--font-size-16);
        `;
      case "color__err":
        return css`
          color: var(--color-negative);
        `;
    }
  }}
`;

export const StyledLabel = styled.label`
  ${HeadlineStyles};
  font-weight: var(--font-weight-400);
  font-size: var(--font-size-12);
  color: var(--color-grey-0);
  margin-top: 1.375rem;
  margin-bottom: 1.375rem;
`;
