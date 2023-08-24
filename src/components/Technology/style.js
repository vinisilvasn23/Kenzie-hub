import styled from "styled-components";

export const StyledTechnology = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;

  padding: 1rem clamp(1rem, 8vw, 18.75rem);

  .content__title {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 1.5rem;
    
    >h2{
      display: flex;
      align-items: center;
    }
  }

  .btn__modal-add {
    color: var(--color-grey-0);
    background-color: var(--color-grey-3);
    font-size: var(--font-size-18);
    padding: 0.8rem 1rem;
    border-radius: 0.25rem;
  }

  @media (min-width: 720px) {
    padding: 1rem clamp(1rem, 18vw, 18.75rem);
  }
`;
