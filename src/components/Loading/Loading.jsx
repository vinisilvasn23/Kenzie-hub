import { StyledLoad } from "./style";

export const Loading = () => {
  return (
    <StyledLoad>
      <div className="load">
        <p>Carregando...</p>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </StyledLoad>
  );
};
