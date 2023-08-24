import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  min-height: 4.5rem;
  width: 100%;
  border-bottom: 2px solid var(--color-grey-4);
  padding: 1rem clamp(0rem, 8vw, 18.75rem);
  gap: 0.8rem;
  margin: 1.5rem 0;

  button {
    padding: 0.5rem 0.7rem;
    background-color: var(--color-grey-3);
    color: var(--color-grey-0);
    display: flex;
    align-items: center;

    :hover {
      background-color: var(--color-grey-2);
    }
  }

  img {
    height: auto;
    max-height: 100%;
    object-fit: contain;
  }

  @media (min-width: 720px) {
    padding: 1rem clamp(0rem, 18vw, 18.75rem);
  }
`;
