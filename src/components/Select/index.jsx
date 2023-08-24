import { forwardRef } from "react";
import { StyledParagraph } from "../../styles/tipography";
import { StyledSelect } from "./style";

export const Select = forwardRef(({ children, error, ...rest }, ref) => {
  return (
    <>
      <StyledSelect ref={ref} error={error} {...rest}>
        {children}
      </StyledSelect>
      {error ? (
        <StyledParagraph colorSize="color__err">
          {error.message}
        </StyledParagraph>
      ) : null}
    </>
  );
});
