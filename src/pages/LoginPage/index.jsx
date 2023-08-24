import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { ContainerLogin, EyeButton, StyledLogin } from "./style";
import logo from "../../assets/img/Logo.png";
import { StyledParagraph, StyledTitle } from "../../styles/tipography";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Input } from "../../components/Inputs";
import { Loading } from "../../components/Loading/Loading";
import { loginUserSchema } from "./LoginUserSchema";
import { UserContext } from "../../provider/UserContext";

export const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginUserSchema),
  });

  const { handleLogin, loading } = useContext(UserContext);

  const submit = (formData) => {
    handleLogin(formData, reset);
  };

  return (
    <ContainerLogin>
      <img src={logo} alt="logo" />
      <StyledLogin onSubmit={handleSubmit(submit)} noValidate>
        <StyledTitle>Login</StyledTitle>
        <Input
          label="Email"
          type="email"
          {...register("email")}
          error={errors.email}
          disabled={loading}
          placeholder="Digite aqui seu email"
        />
        <div className="content__show-password">
          <Input
            label="Senha"
            type={showPassword ? "text" : "password"}
            {...register("password")}
            error={errors.password}
            disabled={loading}
            placeholder="Digite aqui sua senha"
          />
          <EyeButton
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </EyeButton>
        </div>

        <Button btn="primary" type="submit" disabled={loading}>
          {loading ? <Loading /> : null}
          Entrar
        </Button>

        <StyledParagraph fontWeight="md">
          Ainda não possui uma conta?
        </StyledParagraph>
        <Button btn="desable">
          <Link to="/register">Cadastre-se</Link>
        </Button>
      </StyledLogin>
    </ContainerLogin>
  );
};
