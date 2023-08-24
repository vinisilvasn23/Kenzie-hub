import styled, { css } from "styled-components";

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled.input`
  background-color: var(--color-grey-2);
  border: 1px solid transparent;
  height: 3rem;
  padding-left: 1rem;
  color: var(--color-grey-0);
  font-weight: var(--font-weight-400);
  font-size: var(--font-size-16);

  ::placeholder {
    color: var(--color-grey-1);
  }
  :focus {
    border: 1px solid var(--color-grey-1);
  }

  ${({ error }) => {
    if (error) {
      return css`
        border: 1px solid var(--color-color-primary-50);
      `;
    }
  }}
`;
