import styled from "styled-components";
import { useState } from "react";

import NavbarDropdownMenu from "./NavbarDropdownMenu";

const DropdownButton = ({ dropdownText, dropDownCategories }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledDropdownButton onClick={() => setOpen(!open)}>
        {dropdownText}
      </StyledDropdownButton>
      {open && <NavbarDropdownMenu dropDownCategories={dropDownCategories} />}
    </>
  );
};

const StyledDropdownButton = styled.button`
  position: relative;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.contrast};
  border: unset;
  cursor: pointer;
  padding: 16px 0;
  opacity: 0.65;
  text-transform: capitalize;

  &:before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-left: 10px solid ${({ theme }) => theme.colors.contrast};
    border-bottom: 8px solid transparent;
    transform: rotate(90deg);
    right: -20px;
    top: 16px;
  }

  &:hover {
    opacity: 1;
  }

  &:focus {
    opacity: 1;
  }
`;

export default DropdownButton;
