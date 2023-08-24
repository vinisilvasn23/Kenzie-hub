import { forwardRef } from "react";

import { ContainerInput, StyledInput } from "./style";
import { StyledLabel, StyledParagraph } from "../../styles/tipography";

export const Input = forwardRef(({ label, error, ...rest }, ref) => {
  return (
    <ContainerInput>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput ref={ref} error={error} {...rest} />
      {error ? (
        <StyledParagraph colorSize="color__err">
          {error.message}
        </StyledParagraph>
      ) : null}
    </ContainerInput>
  );
});
