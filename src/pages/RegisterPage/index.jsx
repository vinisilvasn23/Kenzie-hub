import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { RegisterUser } from "../../components/RegisterUser";
import { StyledRegisterPage } from "./style";

export const RegisterPage = () => {
  return (
    <StyledRegisterPage>
      <Header>
        <Link to="/">voltar</Link>
      </Header>
      <RegisterUser />
    </StyledRegisterPage>
  );
};
