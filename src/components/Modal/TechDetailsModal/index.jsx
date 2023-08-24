import React, { useContext } from "react";
import { TechContext } from "../../../provider/TechContext";
import { StyledModalContent } from "../../../styles/modal";
import { StyledLabel, StyledTitle } from "../../../styles/tipography";
import { StyledInput } from "../../Inputs/style";
import { Button } from "../../Button";
import { useForm } from "react-hook-form";
import { StyledSelect } from "../../Select/style";

export const TechDetailsModal = ({ tech, onClose }) => {
  const { deleteTechnology, updateTechnologyStatus } = useContext(TechContext);
  const { register, handleSubmit } = useForm();

  const handleDelete = () => {
    deleteTechnology(tech.id);
    onClose();
  };

  const handleUpdate = async (formData) => {
    await updateTechnologyStatus(tech.id, formData);
    onClose();
  };

  return (
    <StyledModalContent>
      <div className="content__title">
        <StyledTitle>Tecnologia Detalhes</StyledTitle>
        <button onClick={onClose}>X</button>
      </div>

      <form onSubmit={handleSubmit(handleUpdate)}>
        <StyledLabel>Nome</StyledLabel>
        <StyledInput placeholder={tech.title} readOnly />
        <StyledLabel>Status</StyledLabel>
        <StyledSelect {...register("status")} defaultValue={tech.status}>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </StyledSelect>
        <div className="content__btn">
          <Button btn="primary" type="submit">
            Salvar alterações
          </Button>
          <button className="btn__remove" type="button" onClick={handleDelete}>
            Excluir
          </button>
        </div>
      </form>
    </StyledModalContent>
  );
};
