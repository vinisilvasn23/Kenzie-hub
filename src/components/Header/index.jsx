import logo from "../../assets/img/Logo.png";
import { StyledHeader } from "./style";

export const Header = ({ onClick, children, type }) => {
  return (
    <StyledHeader>
      <img src={logo} alt="logo img" />
      <button onClick={onClick} type={type}>
        {children}
      </button>
    </StyledHeader>
  );
};
