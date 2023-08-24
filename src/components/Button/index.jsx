import { StyledButton } from "./style";

export const Button = ({ children, btn, type }) => {
  return <StyledButton btn={btn} type={type}>{children}</StyledButton>;
};
