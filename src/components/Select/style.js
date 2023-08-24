import styled, { css } from "styled-components";
import icon from "../../assets/img/ANGLE-DOWN.png";

export const StyledSelect = styled.select`
  background-color: var(--color-grey-2);
  width: 100%;
  height: 3rem;
  border-radius: 0.5rem;
  padding-left: 1rem;
  color: var(--color-grey-0);
  font-weight: var(--font-weight-400);
  font-size: var(--font-size-16);
  outline: none;
  cursor: pointer;
  border: none;

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url(${icon});
  background-repeat: no-repeat;
  background-position: right center;
  background-position: 95%;

  ${({ error }) => {
    if (error) {
      return css`
        border: 1px solid var(--color-color-primary-50);
      `;
    }
  }}
`;
