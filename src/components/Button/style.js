import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  height: 3rem;
  color: var(--color-white);
  background-color: var(--color-color-primary);
  font-size: var(--font-size-16);
  font-weight: var(--font-weight-500);

  ${({ btn }) => {
    switch (btn) {
      case "primary":
        return css`
          background-color: var(--color-color-primary);
          :hover {
            background-color: var(--color-color-primary-50);
          }
        `;
      case "desable":
        return css`
          background-color: var(--color-grey-1);
          :hover {
            background-color: var(--color-color-primary-50);
          }
        `;
    }
  }}
`;
