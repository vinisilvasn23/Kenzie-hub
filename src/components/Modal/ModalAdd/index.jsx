import React, { useContext } from "react";
import { TechContext } from "../../../provider/TechContext";
import { useForm } from "react-hook-form";
import { StyledModalContent } from "../../../styles/modal";
import { StyledLabel, StyledTitle } from "../../../styles/tipography";
import { StyledSelect } from "../../Select/style";
import { StyledInput } from "../../Inputs/style";
import { Button } from "../../Button";


export const ModalAdd = () => {
  const { closeModal, addTechnology } = useContext(TechContext);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (formData) => {
    addTechnology(formData);
    reset();
  };

  return (
    <StyledModalContent>
      <div className="content__title">
        <StyledTitle>Cadastrar Tecnologia</StyledTitle>
        <button onClick={closeModal}>X</button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledLabel>
          Nome
          </StyledLabel>
          <StyledInput type="text" {...register("title")} placeholder="Insira uma tecnologia"/>
        
        <StyledLabel>
          Selecionar status
          </StyledLabel>
          <StyledSelect {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </StyledSelect>
        
        <Button btn="primary" type="submit">Cadastrar tecnologia</Button>
      </form>
    </StyledModalContent>
  );
};
