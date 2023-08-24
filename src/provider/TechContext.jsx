import React, { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { UserContext } from "./UserContext";


export const TechContext = createContext();

export const TechProvider = ({ children }) => {
  const [technologies, setTechnologies] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTech, setSelectedTech] = useState(null);

  const { user } = useContext(UserContext);
  const token = localStorage.getItem("@TOKEN");

  useEffect(() => {
    setTechnologies(user.techs);
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addTechnology = async (formData) => {
    try {
      if (!formData.title) {
        toast.error(
          "Por favor, preencha os campos antes de adicionar uma tecnologia."
        );
        return;
      }

      const response = await api.post("/users/techs", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const newTechnology = response.data;
      setTechnologies([...technologies, newTechnology]);
      closeModal();
      toast.success("Tecnologia adicionada com sucesso!");
    } catch (error) {
      console.error(error);
    }
  };

  const updateTechnologyStatus = async (techId, newStatus) => {
    try {
      await api.put(`/users/techs/${techId}`, newStatus, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const updatedTechnologies = technologies.map((tech) =>
        tech.id === techId ? { ...tech, status: newStatus.status } : tech
      );
      setTechnologies(updatedTechnologies);
      toast.success("Tecnologia alterada com sucesso!");
      closeModal();
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  const deleteTechnology = async (techId) => {
    try {
      await api.delete(`/users/techs/${techId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const filteredTechnologies = technologies.filter(
        (tech) => tech.id !== techId
      );
      setTechnologies(filteredTechnologies);
      toast.success("Tecnologia excluída com sucesso!");
      closeModal();
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  return (
    <TechContext.Provider
      value={{
        technologies,
        addTechnology,
        updateTechnologyStatus,
        deleteTechnology,
        openModal,
        closeModal,
        isModalOpen,
        selectedTech,
        setSelectedTech,
        user,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
