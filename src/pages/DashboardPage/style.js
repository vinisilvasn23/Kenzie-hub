import styled from "styled-components";

export const StyledDashboard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .container__user {
    display: flex;
    width: 100%;
    height: 7.375rem;
    align-items: center;
    justify-content: space-between;
    align-content: center;
    flex-wrap: wrap;
    border-bottom: 2px solid var(--color-grey-4);
    padding: 1rem clamp(1rem, 8vw, 18.75rem);
    gap: 2rem;
  }

  .container__description {
    margin-top: 2.3125rem;
    line-height: 1.75rem;
    padding: 0 clamp(1rem, 8vw, 18.75rem);

    h2 {
      margin-bottom: 1.4375rem;
    }
  }

  @media (min-width: 720px) {
    .container__user,
    .container__description {
      padding: 1rem clamp(1rem, 18vw, 18.75rem);
    }
  }
`;
