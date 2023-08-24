import { useContext, useState } from "react";
import { TechContext } from "../../../provider/TechContext";
import { TechDetailsModal } from "../../Modal/TechDetailsModal";
import ReactModal from "react-modal";
import { StyledParagraph, StyledTitle } from "../../../styles/tipography";
import { StyledTechnologyList } from "./styled";

export const TechList = () => {
  const { technologies, setSelectedTech, selectedTech, openModal } =
    useContext(TechContext);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

  const handleTechClick = (tech) => {
    setSelectedTech(tech);
    setIsDetailsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsDetailsModalOpen(false);
  };

  return (
    <StyledTechnologyList>
      <ul>
        {technologies.map((tech) => (
          <li
            className="list__tech"
            key={tech.id}
            onClick={() => handleTechClick(tech)}
          >
            <StyledTitle>{tech.title}</StyledTitle>
            <StyledParagraph>{tech.status}</StyledParagraph>
          </li>
        ))}
        {technologies.length === 0 && (
          <li className="list__tech-none" onClick={openModal}>
            <StyledTitle>Adicionar tecnologias</StyledTitle>
          </li>
        )}
      </ul>

      <ReactModal
        isOpen={isDetailsModalOpen}
        onRequestClose={handleCloseModal}
        className="modal__content"
        overlayClassName="custom-overlay"
      >
        {selectedTech && (
          <TechDetailsModal tech={selectedTech} onClose={handleCloseModal} />
        )}
      </ReactModal>
    </StyledTechnologyList>
  );
};
