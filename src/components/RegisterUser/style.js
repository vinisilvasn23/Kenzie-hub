import styled from "styled-components";

export const StyledContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  width: clamp(2rem, 100%, 24.3rem);
  margin-top: 2.1875rem;
`;
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2rem 1.375rem;
  background-color: var(--color-grey-3);

  .content__text {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 1.375rem;
  }

  button {
    background-color: var(--color-color-primary-disable);
    margin-top: 1.35rem;
  }
`;
