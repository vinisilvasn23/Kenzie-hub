import React, { useContext } from "react";
import { StyledTechnology } from "./style";
import { TechList } from "./TechList";
import { ModalAdd } from "../Modal/ModalAdd";
import { TechContext } from "../../provider/TechContext";
import { StyledTitle } from "../../styles/tipography";
import ReactModal from "react-modal";

export const TechnologyList = () => {
  const { isModalOpen, openModal, closeModal } = useContext(TechContext);

  return (
    <StyledTechnology>
      <div className="content__title">
        <StyledTitle>Tecnologias</StyledTitle>
        <button className="btn__modal-add" onClick={openModal}>
          +
        </button>
        <ReactModal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          overlayClassName="custom-overlay"
          className="modal__content"
        >
          <ModalAdd />
        </ReactModal>
      </div>
      <TechList />
    </StyledTechnology>
  );
};
