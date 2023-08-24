import styled from "styled-components";

export const ContainerLogin = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 clamp(0rem, 10vw, 1rem);

  h2 {
    text-align: center;
  }
  img {
    margin-bottom: 2.1875rem;
  }
`;

export const StyledLogin = styled.form`
  width: clamp(2rem, 100%, 23.065rem);
  height: 31.375rem;
  padding: 1.625rem 1.375rem;
  display: flex;
  flex-direction: column;
  background-color: var(--color-grey-3);

  p {
    text-align: center;
  }
  .content__show-password {
    display: flex;
    width: 100%;
    position: relative;

    div {
      width: 100%;
    }
  }

  button:first-of-type {
    margin: 1.825rem 0;
  }
  button:last-of-type {
    margin-top: 1.375rem;
  }
`;
export const EyeButton = styled.button`
  position: absolute;
  top: 50%;
  right: 0.625rem;
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  color: var(--color-grey-1);
`;
