import styled from "styled-components";

export const StyledTechnologyList = styled.div`
  display: flex;
  background-color: var(--color-grey-3);
  border-radius: 0.25rem;

  > ul {
    display: flex;
    max-height: 23.2rem;
    flex-direction: column;
    padding: 1.6rem;
    width: 100%;
    justify-content: space-between;
    gap: 1rem;
    overflow-y: auto;
  }

  .list__tech {
    background-color: var(--color-grey-4);
    display: flex;
    padding: 1rem;
    border-radius: 0.25rem;
    justify-content: space-between;
    :hover {
      background-color: var(--color-grey-2);
      cursor: pointer;
    }
  }

  .list__tech-none {
    text-align: center;
    cursor: pointer;
  }
`;
