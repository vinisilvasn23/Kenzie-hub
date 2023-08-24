import styled from "styled-components";

export const StyledLoad = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--color-black);

  .load p {
    font-size: 14px;
    font-weight: 700;
    color: var(--color-negative);
    margin-bottom: 1rem;
  }

  .load .line {
    display: inline-block;
    width: 0.9375rem;
    height: 1.2rem;
    border-radius: 0.9375rem;
    background-color: var(--color-negative);
    animation: loading 1.5s infinite;
  }

  .load .line:nth-child(2) {
    animation-delay: 0.5s;
  }

  .load .line:nth-child(3) {
    animation-delay: 1s;
  }

  @keyframes loading {
    0% {
      width: 0.9375rem;
    }
    50% {
      width: 2.1875rem;
    }
    100% {
      width: 0.9375rem;
    }
  }
`;
