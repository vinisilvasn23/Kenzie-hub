import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../components/Inputs";
import { registerUserSchema } from "./RegisterUserSchema";
import { Select } from "../Select";
import { Button } from "../Button";
import { StyledContainerForm, StyledForm } from "./style";
import {
  StyledLabel,
  StyledParagraph,
  StyledTitle,
} from "../../styles/tipography";
import { UserContext } from "../../provider/UserContext";


export const RegisterUser = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerUserSchema),
  });

  const { handleRegister } = useContext(UserContext);

  const submit = (formData) => {
      handleRegister(formData, reset);
   };

  return (
    <StyledContainerForm>
      <StyledForm onSubmit={handleSubmit(submit)} noValidate>
        <div className="content__text">
          <StyledTitle>Crie sua conta</StyledTitle>
          <StyledParagraph>Rapido e grátis, vamos nessa</StyledParagraph>
        </div>

        <Input
          label="Nome"
          type="text"
          {...register("name")}
          error={errors.name}
          placeholder="Digite aqui seu nome"
        />
        <Input
          label="Email"
          type="email"
          {...register("email")}
          error={errors.email}
          placeholder="Digite aqui seu email"
        />
        <Input
          label="Senha"
          type="password"
          {...register("password")}
          error={errors.password}
          placeholder="Digite aqui sua senha"
        />
        <Input
          label="Confirmação de senha"
          type="password"
          {...register("confirmPassword")}
          error={errors.confirmPassword}
          placeholder="Digite novamente sua senha"
        />
        <Input
          label="bio"
          type="text"
          {...register("bio")}
          error={errors.bio}
          placeholder="Fale sobre você"
        />
        <Input
          label="Contato"
          type="text"
          {...register("contact")}
          error={errors.contact}
          placeholder="Opção de contato"
        />

        <StyledLabel>Selecionar módulo</StyledLabel>
        <Select {...register("course_module")} error={errors.course_module}>
          <option value="">Selecionar módulo</option>
          <option value="Primeiro módulo (Introdução ao Frontend)">
            Primeiro módulo (Introdução ao Frontend)
          </option>
          <option value="Segundo módulo (Frontend Avançado)">
            Segundo módulo (Frontend Avançado)
          </option>
          <option value="Terceiro módulo (Introdução ao Backend)">
            Terceiro módulo (Introdução ao Backend)
          </option>
          <option value="Quarto módulo (Backend Avançado)">
            Quarto módulo (Backend Avançado)
          </option>
        </Select>

        <Button type="submit" children="Cadastrar" btn="desable" />
      </StyledForm>
    </StyledContainerForm>
  );
};
