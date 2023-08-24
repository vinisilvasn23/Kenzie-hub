import styled from "styled-components";

export const StyledModalContent = styled.div`
  width: clamp(0rem, 95vw, 23rem);
  height: 22.375rem;
  background-color: var(--color-grey-3);
  border-radius: 0.25rem;
  position: relative;

  .content__title {
    background-color: var(--color-grey-2);
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    border-radius: 0.25rem 0.25rem 0 0;

    > button {
      color: var(--color-grey-0);
      font-size: var(--font-size-14);
      font-weight: var(--font-weight-700);
      font-family: var(--font-secundary);
    }
  }

  > form {
    display: flex;
    flex-direction: column;
    padding: 0 1.5rem;

    > button {
      margin: 1.5rem 0;
    }
  }

  .content__btn {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    gap: 1rem;

    > button {
      padding: 0 clamp(0rem, 5vw, 1.8rem);
    }
    .btn__remove {
      background-color: var(--color-grey-1);
      color: var(--color-grey-0);
      font-size: var(--font-size-14);
      font-weight: var(--font-weight-400);

      :hover {
        background-color: var(--color-grey-2);
      }
    }
  }
`;
