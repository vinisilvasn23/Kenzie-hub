import React, { useContext } from "react";
import { Header } from "../../components/Header";
import { StyledParagraph, StyledTitle } from "../../styles/tipography";
import { StyledDashboard } from "./style";
import { Loading } from "../../components/Loading/Loading";
import { UserContext } from "../../provider/UserContext";
import { TechnologyList } from "../../components/Technology";

export const Dashboard = () => {
  const { user, handleLogout, loading } = useContext(UserContext);

  if (loading) {
    return <Loading />;
  }

  return (
    <StyledDashboard>
      <Header onClick={handleLogout}>Sair</Header>
      <div className="container__user">
        <StyledTitle>Olá, {user?.name}</StyledTitle>
        <StyledParagraph fontWeight="lg">{user?.course_module}</StyledParagraph>
      </div>
      <TechnologyList />
    </StyledDashboard>
  );
};
